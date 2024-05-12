import * as THREE from "three";
import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Random from "canvas-sketch-util/random";
import css from "./ThreeScene.module.css";
import { OrbitControls } from "@react-three/drei";

export function SpaceDust({ count }: { count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100);
      const factor = Random.range(20, 120);
      const speed = Random.range(0.01, 0.015) / 2;
      const x = Random.range(-50, 50);
      const y = Random.range(-50, 50);
      const z = Random.range(-50, 50);

      temp.push({ time, factor, speed, x, y, z });
    }

    console.log(temp);

    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    // Run through the randomized data to calculate some movement

    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle;

      // Update the particle time
      const t = (particle.time += speed);

      // Update the particle position based on the time
      // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );

      // Derive an oscillating value which will be used
      // for the particle size and rotation
      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 100, s * 100, s * 100);
      dummy.updateMatrix();

      // And apply the matrix to the instanced item

      mesh?.current?.setMatrixAt(index, dummy.matrix);
    });
    if (mesh.current !== null) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }

    // console.log(mesh.current);
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <bufferGeometry args={[0.2, 0]} />
        <meshPhongMaterial color={"#FFFFFF"} />
      </instancedMesh>
    </>
  );
}

const TestScene = () => {
  const myContainer = useRef(null);

  let camera = new THREE.PerspectiveCamera(15, 1, 1, 500);

  return (
    <div id="canvas-container" ref={myContainer} className={css.scene}>
      <Canvas dpr={[1, 2]} camera={camera}>
        <color attach="background" args={[0xbbbbbb]} />
        {/* <ambientLight color={0xffffff} intensity={5} />
        <spotLight
          penumbra={0.1}
          color={0xffffff}
          castShadow={true}
          position={[5, 5, 5]}
          rotation={[(45 * Math.PI) / 180, 0, (-45 * Math.PI) / 180]}
        />
        <OrbitControls maxPolarAngle={Math.PI / 2.5} minPolarAngle={0} />
        <pointLight
          castShadow
          color={0xffffff}
          intensity={5}
          position={[0, 6, 0]}
        />
        <fog attach="fog" color={0xbbbfff} near={10} far={16} /> */}
        <Suspense fallback={false}>
          <SpaceDust count={10000} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TestScene;
