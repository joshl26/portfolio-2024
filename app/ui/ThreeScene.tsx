import { Canvas, useFrame } from "@react-three/fiber";
import React, {
  RefObject,
  Suspense,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState,
} from "react";
import css from "./ThreeScene.module.css";
import * as THREE from "three";
import { Color } from "three";
import { OrbitControls } from "@react-three/drei";

// r150
THREE.ColorManagement.enabled = true;

// Optimized random function with memoization
const mathRandom = (num = 5) => {
  return -Math.random() * num + Math.random() * num;
};

// Pre-calculate building data interface
interface BuildingData {
  position: [number, number, number];
  scale: [number, number, number];
  matrix: THREE.Matrix4;
}

function CityScene({ count, container }: { count: number; container: any }) {
  const myMesh = useRef<THREE.InstancedMesh>(null);
  const myMesh3 = useRef<THREE.Mesh>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Pre-calculate all building data once
  const buildingData = useMemo<BuildingData[]>(() => {
    const data: BuildingData[] = [];
    const maxHeight = 4;
    const minHeight = 1;
    const cubeWidth = 0.8;
    const temp = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.25 + Math.random() * 3;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      const height = Math.min(
        Math.max(
          Math.abs(Math.round(0.1 + Math.abs(mathRandom(8)))),
          minHeight
        ),
        maxHeight
      );

      const scaleX = cubeWidth + mathRandom(1 - cubeWidth);
      const scaleZ = cubeWidth + mathRandom(1 - cubeWidth);

      // Pre-calculate matrix
      temp.position.set(x, height / 2, z);
      temp.scale.set(scaleX, height, scaleZ);
      temp.updateMatrix();

      data.push({
        position: [x, height / 2, z],
        scale: [scaleX, height, scaleZ],
        matrix: temp.matrix.clone(),
      });
    }
    return data;
  }, [count]);

  // Memoized colors to prevent recreation
  const materialColor = useMemo(() => new Color(0x000000), []);

  // Lazy initialization of instanced mesh
  useEffect(() => {
    if (!myMesh.current || isInitialized) return;

    // Batch all matrix updates
    buildingData.forEach((building, i) => {
      myMesh.current!.setMatrixAt(i, building.matrix);
    });

    // Single update call
    myMesh.current.instanceMatrix.needsUpdate = true;
    setIsInitialized(true);
  }, [buildingData, isInitialized]);

  // Optimized animation with useFrame
  useFrame(({ clock }) => {
    if (!myMesh.current || !myMesh3.current) return;

    const elapsed = clock.getElapsedTime();
    myMesh.current.rotation.y = elapsed * 0.125;
    myMesh3.current.rotation.y = elapsed * 0.125;
    myMesh.current.scale.y = Math.abs(Math.sin(elapsed));
  });

  return (
    <mesh receiveShadow castShadow>
      <instancedMesh ref={myMesh} args={[undefined, undefined, count]}>
        <boxGeometry />
        <meshStandardMaterial
          flatShading={false}
          metalness={1.0}
          opacity={0.9}
          transparent={true}
          roughness={0.3}
          side={THREE.DoubleSide}
          color={materialColor}
        />
      </instancedMesh>
      <mesh position={[0, 0, 0]} ref={myMesh3}>
        <boxGeometry args={[200, 0, 200]} />
        <meshStandardMaterial
          metalness={1.0}
          opacity={0.9}
          transparent={false}
          roughness={0.3}
          color={materialColor}
          side={THREE.DoubleSide}
        />
      </mesh>
    </mesh>
  );
}

const ThreeScene: React.FC = () => {
  // Memoize expensive color and camera calculations
  const { bgColor, ambientColor, camera } = useMemo(() => {
    const bgColor = new Color(0xf02050);
    const ambientColor = new Color(0x404040);

    const camera = new THREE.PerspectiveCamera(15, undefined, 1, 500);
    camera.position.set(0, 7, 14);
    camera.rotation.set(0, 0, 0);

    return { bgColor, ambientColor, camera };
  }, []);

  const myContainer = useRef<HTMLDivElement>(null);

  // Memoized lighting setup
  const lightingProps = useMemo(
    () => ({
      ambientIntensity: 5,
      spotPosition: [5, 5, 5] as [number, number, number],
      spotRotation: [(45 * Math.PI) / 180, 0, (-45 * Math.PI) / 180] as [
        number,
        number,
        number
      ],
      pointPosition: [0, 6, 0] as [number, number, number],
      pointIntensity: 5,
    }),
    []
  );

  // Memoized canvas props
  const canvasProps = useMemo(
    () => ({
      gl: { antialias: true },
      dpr: [1, 2] as [number, number],
      camera,
    }),
    [camera]
  );

  // Loading fallback component
  const LoadingFallback = useCallback(
    () => (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    ),
    []
  );

  return (
    <div id="canvas-container" ref={myContainer} className={css.scene}>
      <Canvas {...canvasProps}>
        <color attach="background" args={[bgColor.r, bgColor.g, bgColor.b]} />
        <ambientLight
          color={ambientColor}
          intensity={lightingProps.ambientIntensity}
        />
        <spotLight
          penumbra={0.1}
          color={ambientColor}
          castShadow={true}
          position={lightingProps.spotPosition}
          rotation={lightingProps.spotRotation}
        />
        <OrbitControls maxPolarAngle={Math.PI / 2.5} minPolarAngle={0} />
        <pointLight
          castShadow
          color={0xffffff}
          intensity={lightingProps.pointIntensity}
          position={lightingProps.pointPosition}
        />
        <fog attach="fog" color={bgColor} near={10} far={16} />
        <Suspense fallback={<LoadingFallback />}>
          <CityScene container={myContainer} count={25} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
