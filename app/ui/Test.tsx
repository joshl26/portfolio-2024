import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import css from "./ThreeScene.module.css";

// Utility function for random calculations
const mathRandom = (num = 8) => -Math.random() * num + Math.random() * num;

const Box = ({ position, rotation, color }) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh position={position} ref={mesh} rotation={rotation}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Fog = ({ color, near, far }) => {
  const { scene } = useThree();
  scene.fog = new THREE.Fog(color, near, far);
  return null;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    </>
  );
};

const Scene = () => {
  const setTintColor = () => {
    return "#000000";
  };

  return (
    <>
      <Fog color="#f02050" near={10} far={16} />
      {Array.from({ length: 100 }).map((_, i) => (
        <Box
          key={i}
          position={[mathRandom(), mathRandom(), mathRandom()]}
          rotation={[mathRandom(), mathRandom(), mathRandom()]}
          color={setTintColor()}
        />
      ))}
      <Lights />
    </>
  );
};

const ThreeFiberScene = () => {
  return (
    <div id="canvas-container" className={css.scene}>
      <Canvas camera={{ position: [0, 2, 14], fov: 20 }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeFiberScene;
