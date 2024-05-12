import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import css from "./ThreeScene.module.css";
import {
  Bvh,
  Environment,
  Instance,
  OrbitControls,
  Instances,
  useGLTF,
  Stats,
} from "@react-three/drei";
import { useControls } from "leva";
import { GLTF } from "three-stdlib";

const randomVector = (r: number) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
];
const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
];
const data = Array.from({ length: 1000 }, (r: number = 10) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}));

export default function TestScene() {
  const { range } = useControls({
    range: { value: 100, min: 0, max: 300, step: 10 },
  });

  return (
    <div id="canvas-container" className={css.scene}>
      <Stats />
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        {/* <ambientLight intensity={0.5 * Math.PI} /> */}
        <directionalLight intensity={0.3} position={[5, 25, 20]} />
        <Bvh firstHitOnly>
          <Shoes data={data} range={range} />
        </Bvh>
        <Environment preset="city" />
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}

type GLTFResult = GLTF & {
  nodes: {
    connector: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial;
  };
};

//TODO create interface for data
function Shoes({ data, range }: { data: any; range: number }) {
  const { nodes, materials } = useGLTF("/c-transformed.glb") as GLTFResult;

  return (
    <Instances
      range={range}
      material={materials.base}
      geometry={nodes.connector.geometry}
    >
      {data.map((props: any, i: number) => (
        <Shoe key={i} {...props} />
      ))}
    </Instances>
  );
}

function Shoe({
  random,
  color = new THREE.Color(),
  ...props
}: {
  random: number;
  color: THREE.Color;
}) {
  const ref: any = useRef(null);
  const [hovered, setHover] = useState(false);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + random * 10000;

    if (ref.current !== null) {
      ref.current.rotation.set(
        Math.cos(t / 4) / 2,
        Math.sin(t / 4) / 2,
        Math.cos(t / 1.5) / 2
      );
      ref.current.position.y = Math.sin(t / 1.5) / 2;
      ref.current.scale.x =
        ref.current.scale.y =
        ref.current.scale.z =
          THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1);
      ref.current.color.lerp(
        color.set(hovered ? "red" : "white"),
        hovered ? 1 : 0.1
      );
    }
  });
  return (
    <group {...props}>
      <Instance
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={(e) => setHover(false)}
      />
    </group>
  );
}
