import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
} from "@react-three/drei";

// Types
interface Car {
  id: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  goal: THREE.Vector3;
  radius: number;
  maxSpeed: number;
  maxForce: number;
  separationRadius: number;
  separationWeight: number;
  avoidWeight: number;
  weaveWeight: number;
  steerSmoothed: THREE.Vector3;
  weavePhase: number;
  phaseOffset: number;
  jitterTimer: number;
}

interface Building {
  position: THREE.Vector3;
  size: THREE.Vector3;
  center: THREE.Vector3;
  radius: number;
}

// Helper functions
function randomPointInCity(cityRadius = 120) {
  const r = Math.sqrt(Math.random()) * (cityRadius * 0.85);
  const theta = Math.random() * Math.PI * 2;
  return new THREE.Vector3(
    Math.cos(theta) * r,
    5 + Math.random() * 6,
    Math.sin(theta) * r
  );
}

function generateOrganicBuildings(count = 100, cityRadius = 120) {
  const buildings: Building[] = [];
  for (let i = 0; i < count; i++) {
    // Create organic distribution using noise-like placement
    const angle = (i / count) * Math.PI * 2;
    const distance = (0.3 + 0.7 * Math.random()) * cityRadius * 0.9;
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;

    // Skip if too close to center
    if (Math.sqrt(x * x + z * z) < 20) continue;

    const width = 2 + Math.random() * 8;
    const depth = 2 + Math.random() * 8;
    const height = 5 + Math.random() * 25;

    const position = new THREE.Vector3(x, 0, z);
    const size = new THREE.Vector3(width, height, depth);
    const center = new THREE.Vector3(x, height / 2, z);
    const radius = Math.max(width, depth) * 0.7;

    buildings.push({ position, size, center, radius });
  }
  return buildings;
}

function updateCar(
  car: Car,
  dt: number,
  allCars: Car[],
  buildings: Building[],
  cityRadius = 120
) {
  // Compute desired toward per-car goal
  let desired = new THREE.Vector3().subVectors(car.goal, car.position);
  const distToGoal = desired.length();

  // If we're close to goal, pick a new goal (only for this car)
  const goalThreshold = 4.0;
  if (distToGoal < goalThreshold) {
    car.goal = randomPointInCity(cityRadius);
    desired.subVectors(car.goal, car.position);
  }

  desired.normalize().multiplyScalar(car.maxSpeed);

  // Basic steering (desired - velocity)
  let steer = new THREE.Vector3().subVectors(desired, car.velocity);
  if (steer.length() > car.maxForce) steer.setLength(car.maxForce);

  // ---- Separation (car-to-car repulsion) ----
  let separation = new THREE.Vector3();
  for (let other of allCars) {
    if (other === car) continue;
    const diff = new THREE.Vector3().subVectors(car.position, other.position);
    const d = diff.length();
    if (d > 0 && d < car.separationRadius + other.radius) {
      // Stronger when closer
      diff.normalize();
      const strength = 1 - d / (car.separationRadius + other.radius);
      separation.addScaledVector(diff, strength / Math.max(d, 0.0001));
    }
  }
  if (separation.lengthSq() > 0) {
    separation.normalize();
    separation.multiplyScalar(car.maxSpeed);
    separation.sub(car.velocity);
    separation.clampLength(0, car.maxForce);
    separation.multiplyScalar(car.separationWeight);
  }

  // ---- Building avoidance ----
  let buildingAvoid = new THREE.Vector3();
  for (let b of buildings) {
    const diff = new THREE.Vector3().subVectors(car.position, b.center);
    const d = diff.length();
    const minDist = b.radius + car.radius + 1.0; // Extra clearance
    if (d < minDist) {
      diff.normalize();
      const strength = 1 - d / minDist;
      buildingAvoid.addScaledVector(diff, strength);
    }
  }
  if (buildingAvoid.lengthSq() > 0) {
    buildingAvoid.normalize().multiplyScalar(car.maxSpeed);
    buildingAvoid
      .sub(car.velocity)
      .clampLength(0, car.maxForce)
      .multiplyScalar(car.avoidWeight);
  }

  // ---- Weave / rhythmic motion (per-car phase) ----
  car.weavePhase += dt * 1.6; // Frequency
  const weaveOffset = Math.sin(car.weavePhase + car.phaseOffset) * 3.0; // Amplitude
  // Create a lateral weave vector orthogonal to velocity
  let forward =
    car.velocity.length() > 0.1
      ? car.velocity.clone().normalize()
      : new THREE.Vector3(1, 0, 0);
  let lateral = new THREE.Vector3()
    .crossVectors(forward, new THREE.Vector3(0, 1, 0))
    .normalize();
  const weave = lateral.multiplyScalar(weaveOffset * car.weaveWeight);

  // ---- Boundary: keep inside the city without snapping to center ----
  const toCenter = car.position.clone().setY(0);
  const dist = toCenter.length();
  const boundaryLimit = cityRadius * 0.95;
  let boundaryForce = new THREE.Vector3();
  if (dist > boundaryLimit) {
    // Push slightly inward and add tangential velocity so they circle instead of stacking
    const inward = toCenter.clone().multiplyScalar(-1).normalize();
    const tangent = new THREE.Vector3()
      .crossVectors(inward, new THREE.Vector3(0, 1, 0))
      .normalize();
    boundaryForce.addScaledVector(inward, 0.8); // Mild inward
    boundaryForce.addScaledVector(tangent, 1.5); // Make them move along boundary
    boundaryForce.multiplyScalar(car.maxSpeed);
    boundaryForce
      .sub(car.velocity)
      .clampLength(0, car.maxForce)
      .multiplyScalar(1.2);
  }

  // ---- Combine forces ----
  const combined = new THREE.Vector3();
  combined.add(steer);
  combined.add(separation);
  combined.add(buildingAvoid);
  combined.add(weave);
  combined.add(boundaryForce);

  // ---- Smooth steering so it doesn't twitch but don't fully collapse differences ----
  const steerLerp = 0.08; // Small -> preserves individuality
  car.steerSmoothed.lerp(combined, steerLerp);

  // ---- Apply to velocity and position ----
  car.velocity.add(car.steerSmoothed.clone().multiplyScalar(dt));
  // Speed cap
  if (car.velocity.length() > car.maxSpeed)
    car.velocity.setLength(car.maxSpeed);
  // Minimum motion jitter if stuck
  if (car.velocity.length() < 0.2) {
    car.jitterTimer += dt;
    if (car.jitterTimer > 0.5) {
      // Apply occasional impulse
      car.velocity.add(
        new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.2) * 1,
          (Math.random() - 0.5) * 2
        )
      );
      car.jitterTimer = 0;
    }
  } else {
    car.jitterTimer = 0;
  }
  car.position.add(car.velocity.clone().multiplyScalar(dt));
}

// Building Component
const Building: React.FC<{ building: Building }> = ({ building }) => {
  return (
    <mesh position={building.position} castShadow receiveShadow>
      <boxGeometry args={[building.size.x, building.size.y, building.size.z]} />
      <meshStandardMaterial
        color="#6b6b6b"
        metalness={0.05}
        roughness={0.7}
        envMapIntensity={0.9}
      />
    </mesh>
  );
};

// Car Component
const Car: React.FC<{ car: Car }> = ({ car }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.copy(car.position);
      // Orient car in direction of travel
      if (car.velocity.length() > 0.1) {
        meshRef.current.lookAt(
          car.position.x + car.velocity.x,
          car.position.y + car.velocity.y,
          car.position.z + car.velocity.z
        );
      }
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[1.5, 0.5, 1]} />
      <meshStandardMaterial
        color="#ff3333"
        metalness={0.4}
        roughness={0.3}
        envMapIntensity={1.2}
      />
    </mesh>
  );
};

// Lighting orchestration component
const SceneLighting: React.FC<{ cityRadius: number }> = ({ cityRadius }) => {
  const { gl, scene } = useThree();

  useEffect(() => {
    // Physically based renderer settings
    // gl.physicallyCorrectLights = true;
    // gl.outputEncoding = THREE.sRGBEncoding;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.0;
    // subtle scene ambient tint
    scene.background = new THREE.Color(0x0a0a12);
  }, [gl, scene]);

  return (
    <>
      {/* HDRI environment (drei preset). This provides realistic ambient lighting & reflections */}
      <Environment preset="city" background={false} blur={0.6} />

      {/* High-quality directional 'sun' with shadow */}
      <directionalLight
        castShadow
        position={[80, 120, -40]}
        intensity={2.0}
        color={0xfff5ea}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-150}
        shadow-camera-right={150}
        shadow-camera-top={150}
        shadow-camera-bottom={-150}
        shadow-bias={-0.0002}
      />

      {/* Additional fill light from opposite direction */}
      <hemisphereLight
        intensity={0.5}
        color={0xffffbb}
        groundColor={0x080820}
      />

      {/* Warm point light for additional rim lighting */}
      <pointLight
        position={[-30, 20, 40]}
        intensity={1.5}
        color={0xffe5c4}
        distance={100}
      />

      {/* Accumulative soft shadows on the ground (gives good contact / AO feel) */}
      <AccumulativeShadows
        temporal
        frames={60}
        alphaTest={0.85}
        scale={1.0}
        position={[0, -0.49, 0]}
      >
        <RandomizedLight
          amount={6}
          radius={20}
          intensity={0.6}
          ambient={0.2}
          position={[50, 50, -20]}
        />
      </AccumulativeShadows>

      {/* Contact shadows under moving objects (cars) */}
      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.7}
        width={cityRadius * 2}
        height={cityRadius * 2}
        blur={2}
        far={20}
      />
    </>
  );
};

// Flying Cars Scene Component
const FlyingCarsScene: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const cityRadius = 120;

  // Initialize scene
  useEffect(() => {
    // Generate organic buildings
    const newBuildings = generateOrganicBuildings(100, cityRadius);
    setBuildings(newBuildings);

    // Create cars with distributed starting positions
    const newCars: Car[] = [];
    for (let i = 0; i < 30; i++) {
      const position = randomPointInCity(cityRadius);
      newCars.push({
        id: i,
        position,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ),
        goal: randomPointInCity(cityRadius),
        radius: 1.0,
        maxSpeed: 25,
        maxForce: 8,
        separationRadius: 6.0,
        separationWeight: 6.0,
        avoidWeight: 4.0,
        weaveWeight: 1.2,
        steerSmoothed: new THREE.Vector3(),
        weavePhase: Math.random() * Math.PI * 2,
        phaseOffset: Math.random() * Math.PI * 2,
        jitterTimer: 0,
      });
    }
    setCars(newCars);
  }, []);

  // Animation loop
  useFrame((_, delta) => {
    setCars((prevCars) => {
      const updatedCars = [...prevCars];
      updatedCars.forEach((car) => {
        updateCar(car, delta, updatedCars, buildings, cityRadius);
      });
      return updatedCars;
    });
  });

  return (
    <>
      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[cityRadius * 2.5, cityRadius * 2.5, 10, 10]} />
        <meshStandardMaterial color="#0b0b0d" roughness={1} metalness={0} />
      </mesh>

      {/* Buildings */}
      {buildings.map((building, index) => (
        <Building key={index} building={building} />
      ))}

      {/* Cars */}
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}

      {/* Lighting */}
      <SceneLighting cityRadius={cityRadius} />
    </>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows
        camera={{ position: [0, 50, 100], fov: 50 }}
        gl={{ antialias: true }} // keep only valid WebGLRendererParameters here
        onCreated={({ gl, scene }) => {
          // runtime settings
          (gl as any).physicallyCorrectLights = true;
          // (gl as any).outputEncoding = THREE.sRGBEncoding;
          (gl as any).toneMapping = THREE.ACESFilmicToneMapping;
          (gl as any).toneMappingExposure = 1.0;

          // scene background
          scene.background = new THREE.Color(0x0a0a12);
        }}
      >
        <FlyingCarsScene />
        <OrbitControls maxPolarAngle={Math.PI * 0.49} />
      </Canvas>
    </div>
  );
};

export default App;
