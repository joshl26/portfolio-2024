"use client";

import Link from "next/link";
import * as THREE from "three";
import { useRef, useReducer, useMemo, useCallback, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";

// Static configurations - moved outside components
const ACCENTS = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"] as const;
const BACKGROUND_COLOR = "#141622";

// Memoized shuffle function
const createShuffle = (accent: number) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: ACCENTS[accent], roughness: 0.1, accent: true },
  { color: ACCENTS[accent], roughness: 0.75, accent: true },
  { color: ACCENTS[accent], roughness: 0.1, accent: true },
];

// Memoized camera configuration
const CAMERA_CONFIG = {
  position: [0, 0, 15] as [number, number, number],
  fov: 17.5,
  near: 1,
  far: 20,
};

// Memoized canvas props
const CANVAS_PROPS = {
  shadows: true,
  dpr: [1, 1.5] as [number, number],
  gl: { antialias: false },
  camera: CAMERA_CONFIG,
};

// Memoized lighting configuration
const LIGHTING_CONFIG = {
  ambient: { intensity: 0.4 },
  spot: {
    position: [10, 10, 10] as [number, number, number],
    angle: 0.15,
    penumbra: 1,
    intensity: 1,
    castShadow: true,
  },
};

// Memoized transmission material props
const TRANSMISSION_MATERIAL_PROPS = {
  temporalDistortion: 0,
  distortionScale: 0,
  transmissionSampler: false,
  backside: false,
  backsideThickness: 0,
  backsideResolution: 0,
  clearcoat: 1,
  thickness: 0.1,
  anisotropicBlur: 0.1,
  chromaticAberration: 0.1,
  samples: 8,
  resolution: 512,
};

// Loading fallback component
const SceneFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshBasicMaterial color="#444" />
  </mesh>
);

const NotFound = () => {
  // Memoized styles to prevent recreation
  const styles = useMemo(
    () => ({
      sceneContainer: {
        zIndex: 1,
        position: "absolute" as const,
        width: "100vw",
        height: "100vh",
        left: "0px",
        top: "0px",
      },
      backgroundDiv: {
        position: "relative" as const,
        height: "100vh",
        background: "none",
        zIndex: 0,
      },
      contentContainer: {
        textAlign: "center" as const,
        display: "flex",
        alignItems: "center",
      },
      textOverlay: {
        zIndex: 2,
        position: "absolute" as const,
        background: "transparent",
        width: "100vw",
        height: "fit-content",
        top: "40%",
        margin: "auto",
      },
      heading: { fontSize: "2.5rem" },
      paragraph: { fontSize: "1.5rem" },
      link: { fontSize: "2.5rem", textDecoration: "underline" },
    }),
    []
  );

  return (
    <>
      <div style={styles.sceneContainer}>
        <Suspense fallback={<div>Loading 3D Scene...</div>}>
          <Scene />
        </Suspense>
      </div>
      <div style={styles.backgroundDiv}></div>
      <div style={styles.contentContainer}>
        <div style={styles.textOverlay}>
          <h2 style={styles.heading}>Page Not Found</h2>
          <div className="spacer"></div>
          <p style={styles.paragraph}>Could not find requested resource</p>
          <div className="spacer"></div>
          <Link style={styles.link} href="/">
            Return Home
          </Link>
          <div className="spacer"></div>
        </div>
      </div>
    </>
  );
};

function Scene(props: any) {
  const [accent, click] = useReducer((state) => ++state % ACCENTS.length, 0);

  // Memoize connectors to prevent recreation on every render
  const connectors = useMemo(() => createShuffle(accent), [accent]);

  // Memoize click handler
  const handleClick = useCallback(() => click(), []);

  return (
    <Canvas onClick={handleClick} {...CANVAS_PROPS} {...props}>
      <color attach="background" args={[BACKGROUND_COLOR]} />
      <ambientLight intensity={LIGHTING_CONFIG.ambient.intensity} />
      <spotLight {...LIGHTING_CONFIG.spot} />

      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}
        <Connector position={[10, 10, 5]}>
          <Model>
            <MeshTransmissionMaterial {...TRANSMISSION_MATERIAL_PROPS} />
          </Model>
        </Connector>
      </Physics>

      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>

      <Environment resolution={256}>
        <LightingSetup />
      </Environment>
    </Canvas>
  );
}

// Extracted lighting setup for better organization
const LightingSetup = () => (
  <group rotation={[-Math.PI / 3, 0, 1]}>
    <Lightformer
      form="circle"
      intensity={4}
      rotation-x={Math.PI / 2}
      position={[0, 5, -9]}
      scale={2}
    />
    <Lightformer
      form="circle"
      intensity={2}
      rotation-y={Math.PI / 2}
      position={[-5, 1, -1]}
      scale={2}
    />
    <Lightformer
      form="circle"
      intensity={2}
      rotation-y={Math.PI / 2}
      position={[-5, -1, -1]}
      scale={2}
    />
    <Lightformer
      form="circle"
      intensity={2}
      rotation-y={-Math.PI / 2}
      position={[10, 1, 0]}
      scale={8}
    />
  </group>
);

function Connector({ position, children, scale, accent, ...props }: any) {
  const api = useRef<any>(null);

  // Memoized vector and random function
  const { vec, pos } = useMemo(() => {
    const vec = new THREE.Vector3();
    const r = THREE.MathUtils.randFloatSpread;
    const pos = position || [r(10), r(10), r(10)];
    return { vec, pos };
  }, [position]);

  // Optimized frame loop with delta clamping
  useFrame((state, delta) => {
    const clampedDelta = Math.min(0.1, delta);
    if (api.current) {
      api.current.applyImpulse(
        vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
      );
    }
  });

  // Memoized collider args
  const colliderArgs = useMemo(
    () => [
      [0.38, 1.27, 0.38] as [number, number, number],
      [1.27, 0.38, 0.38] as [number, number, number],
      [0.38, 0.38, 1.27] as [number, number, number],
    ],
    []
  );

  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={colliderArgs[0]} />
      <CuboidCollider args={colliderArgs[1]} />
      <CuboidCollider args={colliderArgs[2]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer() {
  const ref = useRef<any>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ mouse, viewport }) => {
    if (ref.current) {
      ref.current.setNextKinematicTranslation(
        vec.set(
          (mouse.x * viewport.width) / 2,
          (mouse.y * viewport.height) / 2,
          0
        )
      );
    }
  });

  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

interface GLTFResult {
  nodes: {
    connector: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial;
  };
}

function Model({ children, color = "white", roughness = 0, ...props }: any) {
  const ref = useRef<any>(null);
  const { nodes, materials } = useGLTF(
    "/c-transformed.glb"
  ) as unknown as GLTFResult;

  // Memoized material props with proper typing
  const materialProps = useMemo(
    () => ({
      metalness: 0.2,
      roughness,
      map: materials?.base?.map,
    }),
    [roughness, materials]
  );

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={10}
      geometry={nodes?.connector?.geometry}
    >
      <meshStandardMaterial {...materialProps} />
      {children}
    </mesh>
  );
}

// Preload the GLTF model
useGLTF.preload("/c-transformed.glb");

export default NotFound;
