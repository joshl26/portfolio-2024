import { Canvas, useFrame } from "@react-three/fiber";
import React, { RefObject, Suspense, useEffect, useRef } from "react";
import css from "./ThreeScene.module.css";
import * as THREE from "three";
import { BoxGeometry, Color, MeshBasicMaterial } from "three";
import { OrbitControls } from "@react-three/drei";

// r150
// THREE.ColorManagement.enabled = true;

//const red = new THREE.MeshLambertMaterial({ color: "darkgray" });
// const sphere = new THREE.SphereGeometry(1, 28, 28);
//const box = new THREE.BoxGeometry(1, 1, 1);

//RANDOM Function
function mathRandom(num = 5) {
  var numValue = -Math.random() * num + Math.random() * num;
  return numValue;
}

function CityScene({
  count = 100,
  temp = new THREE.Object3D(),
  color = new THREE.Color(0x000000),
  container,
}: {
  count: number;
  container: any;
  temp: THREE.Object3D;
  color: THREE.Color;
}) {
  let myMesh: any = React.useRef();
  let myMesh2: any = React.useRef();
  let myMesh3: any = React.useRef();

  console.log(container);

  useEffect(() => {
    // Set positions
    for (let i = 0; i < count; i++) {
      const maxHeight = 4;
      const minHeight = 1;

      let height = Math.min(
        Math.max(
          Math.abs(Math.round(0.1 + Math.abs(mathRandom(8)))),
          minHeight
        ),
        maxHeight
      );
      var cubeWidth = 0.8;
      temp.position.set(
        Math.round(mathRandom()),
        height / 2,
        Math.round(mathRandom())
      );
      temp.castShadow = true;
      temp.receiveShadow = true;
      // temp.rotateY(0.1 + Math.abs(mathRandom(8)));
      // temp.rotation.set();
      temp.scale.set(
        cubeWidth + mathRandom(1 - cubeWidth),
        height,
        cubeWidth + mathRandom(1 - cubeWidth)
      );
      temp.updateMatrix();
      myMesh.current.setMatrixAt(i, temp.matrix);
      // console.log(Math.abs(Math.round(mathRandom())));
    }
    // Update the instance
    myMesh.antialiased;
    myMesh.current.instanceMatrix.needsUpdate = true;
  }, [count, temp]);

  // const boxColor = new Color(0xff1bbb);
  const boxColor = new Color("darkgray");

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a * 0.0625;
    // myMesh2.current.rotation.y = a * 0.0625;
    myMesh3.current.rotation.y = a * 0.0625;
  });

  var setTintNum = true;

  function setTintColor() {
    if (setTintNum) {
      setTintNum = false;
      var setColor = 0x000000;
    } else {
      setTintNum = true;
      var setColor = 0x000000;
    }
    // setColor = 0x000000;
    return setColor;
  }

  //   return <mesh material={red} geometry={box} ref={myMesh} />;
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
          color={setTintColor()}
        />
      </instancedMesh>
      {/* <mesh ref={myMesh2}>
        <gridHelper args={[50, 50, 0xff0000, "gray"]} />
      </mesh> */}
      <mesh position={[0, 0, 0]} ref={myMesh3}>
        <boxGeometry args={[200, 0, 200]} />
        <meshStandardMaterial
          metalness={1.0}
          opacity={0.9}
          transparent={false}
          roughness={0.3}
          color={setTintColor()}
          side={THREE.DoubleSide}
        />
      </mesh>
    </mesh>
  );
}

const ThreeScene: React.FC = () => {
  const bgColor = new Color(0xf02050);
  const ambientColor = new Color(0x404040);

  const myContainer = useRef<HTMLDivElement>(null);

  let camera = new THREE.PerspectiveCamera(15, undefined, 1, 500);
  let [px, py, pz] = [0, 7, 14];
  let [rx, ry, rz] = [0, 0, 0];
  camera.position.set(px, py, pz);
  camera.rotation.set(rx, ry, rz);

  return (
    <div id="canvas-container" ref={myContainer} className={css.scene}>
      <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={camera}>
        <color attach="background" args={[bgColor.r, bgColor.g, bgColor.b]} />
        <ambientLight color={ambientColor} intensity={5} />
        <spotLight
          penumbra={0.1}
          color={ambientColor}
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
        <fog attach="fog" color={bgColor} near={10} far={16} />
        <Suspense fallback={false}>
          <CityScene container={myContainer} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
