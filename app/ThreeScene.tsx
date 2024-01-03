import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect } from "react";
import css from "./ThreeScene.module.css";
import * as THREE from "three";
import { BoxGeometry, Color, MeshBasicMaterial } from "three";

// r150
THREE.ColorManagement.enabled = true;

let camera = new THREE.PerspectiveCamera(90, 1.25, 0.1, 1000);
let [px, py, pz] = [0, 5, 25];
let [rx, ry, rz] = [0, 0, 0];
camera.position.set(px, py, pz);
camera.rotation.set(rx, ry, rz);

//const red = new THREE.MeshLambertMaterial({ color: "darkgray" });
// const sphere = new THREE.SphereGeometry(1, 28, 28);
//const box = new THREE.BoxGeometry(1, 1, 1);

//RANDOM Function
function mathRandom(num = 20) {
  var numValue = -Math.random() * num + Math.random() * num;
  return numValue;
}

function CityScene({ count = 1000, temp = new THREE.Object3D() }) {
  let myMesh: any = React.useRef();
  let myMesh2: any = React.useRef();
  let myMesh3: any = React.useRef();

  useEffect(() => {
    // Set positions
    for (let i = 0; i < count; i++) {
      temp.position.set(Math.round(mathRandom()), 0, Math.round(mathRandom()));
      temp.scale.set(1, Math.round(mathRandom()), 1);
      temp.updateMatrix();
      myMesh.current.setMatrixAt(i, temp.matrix);
    }
    // Update the instance
    myMesh.current.instanceMatrix.needsUpdate = true;
  }, [count, temp]);

  const boxColor = new Color(0x000000);
  //const boxColor = new Color("darkgray");

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a * 0.0625;
    myMesh2.current.rotation.y = a * 0.0625;
    myMesh3.current.rotation.y = a * 0.0625;
  });

  //   return <mesh material={red} geometry={box} ref={myMesh} />;
  return (
    <mesh receiveShadow>
      <instancedMesh
        castShadow
        ref={myMesh}
        args={[undefined, undefined, count]}
      >
        <boxGeometry attach="geometry" />
        <meshPhongMaterial
          specular={1}
          opacity={0.5}
          attach="material"
          shininess={2}
          side={THREE.DoubleSide}
          color={boxColor}
        />
      </instancedMesh>
      <mesh ref={myMesh2}>
        {/* <gridHelper args={[50, 50, 0xff0000, "gray"]} /> */}
      </mesh>
      <mesh receiveShadow position={[0, -1, 0]} ref={myMesh3}>
        <boxGeometry args={[200, 1, 200]} />
        <meshBasicMaterial color={boxColor} />
      </mesh>
    </mesh>
  );
}

const ThreeScene: React.FC = () => {
  const bgColor = new Color(0xff6f00);
  const ambientColor = new Color(0xffffff);

  return (
    <div id="canvas-container" className={css.scene}>
      <Canvas camera={camera}>
        <color attach="background" args={[bgColor.r, bgColor.g, bgColor.b]} />
        <ambientLight color={bgColor} intensity={10} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <pointLight color={bgColor} intensity={200} position={[10, 10, 10]} />
        <fog attach="fog" color={bgColor} near={5} far={20} />
        <CityScene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
