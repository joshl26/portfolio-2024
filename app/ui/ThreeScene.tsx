import React, { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  useProgress,
  Html,
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

// Loading Component
const Loader: React.FC = () => {
  const { progress, loaded, total } = useProgress();

  return (
    <Html center>
      <div
        className="loading-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        {/* Loading Text */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Loading Scene...
        </div>

        {/* Progress Bar Container */}
        <div
          style={{
            width: "300px",
            height: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "3px",
            overflow: "hidden",
            marginBottom: "10px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Progress Bar Fill */}
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1)",
              borderRadius: "3px",
              transition: "width 0.3s ease-out",
              boxShadow: "0 0 10px rgba(255, 107, 107, 0.5)",
            }}
          />
        </div>

        {/* Progress Text */}
        <div
          style={{
            fontSize: "14px",
            color: "#cccccc",
            marginBottom: "20px",
          }}
        >
          {Math.round(progress)}% ({loaded} / {total} items)
        </div>

        {/* Loading Spinner */}
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "3px solid rgba(255, 255, 255, 0.3)",
            borderTop: "3px solid #ff6b6b",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />

        {/* Add CSS animation */}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </Html>
  );
};

// Helper functions
function randomPointInCity(cityRadius = 120) {
  const r = Math.sqrt(Math.random()) * (cityRadius * 0.75); // Reduced from 0.85 to keep cars further from edge
  const theta = Math.random() * Math.PI * 2;
  return new THREE.Vector3(
    Math.cos(theta) * r,
    0.8 + Math.random() * 1.2, // Very low: 0.8-2.0 units high
    Math.sin(theta) * r
  );
}

function generateOrganicBuildings(count = 90, cityRadius = 120) {
  // Increased building count for density
  const buildings: Building[] = [];
  const minSpacing = 12; // Reduced spacing for Manhattan-like density

  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let validPosition = false;
    let x, z;

    while (!validPosition && attempts < 20) {
      // Create organic distribution using noise-like placement
      const angle = (i / count) * Math.PI * 2;
      const distance = (0.2 + 0.8 * Math.random()) * cityRadius * 0.85; // More varied distribution
      x = Math.cos(angle) * distance + (Math.random() - 0.5) * 30; // More randomness
      z = Math.sin(angle) * distance + (Math.random() - 0.5) * 30;

      // Skip if too close to center
      if (Math.sqrt(x * x + z * z) < 20) {
        // Reduced center clearance for density
        attempts++;
        continue;
      }

      // Check distance from other buildings
      validPosition = true;
      for (let existing of buildings) {
        const dist = Math.sqrt(
          (x - existing.position.x) ** 2 + (z - existing.position.z) ** 2
        );
        if (dist < minSpacing) {
          validPosition = false;
          break;
        }
      }

      attempts++;
    }

    if (!validPosition) continue; // Skip this building if we can't find a good spot

    // Manhattan-style building dimensions with extreme variation
    const buildingType = Math.random();
    let width, depth, height;

    if (buildingType < 0.1) {
      // Super tall skyscrapers (10%)
      width = 8 + Math.random() * 15;
      depth = 8 + Math.random() * 15;
      height = 40 + Math.random() * 60; // 40-100 units tall
    } else if (buildingType < 0.3) {
      // Tall buildings (20%)
      width = 5 + Math.random() * 10;
      depth = 5 + Math.random() * 10;
      height = 20 + Math.random() * 30; // 20-50 units tall
    } else if (buildingType < 0.6) {
      // Medium buildings (30%)
      width = 4 + Math.random() * 8;
      depth = 4 + Math.random() * 8;
      height = 10 + Math.random() * 20; // 10-30 units tall
    } else {
      // Low buildings (40%) - for car navigation
      width = 3 + Math.random() * 6;
      depth = 3 + Math.random() * 6;
      height = 3 + Math.random() * 12; // 3-15 units tall
    }

    const position = new THREE.Vector3(x, 0, z);
    const size = new THREE.Vector3(width, height, depth);
    const center = new THREE.Vector3(x, height / 2, z);
    const radius = Math.max(width, depth) * 0.7; // Tighter collision radius for density

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
  // Floor collision detection - prevent cars from going below ground level
  const floorLevel = 0.5; // Extremely low minimum height
  if (car.position.y < floorLevel) {
    car.position.y = floorLevel;
    // If velocity is downward, redirect it upward
    if (car.velocity.y < 0) {
      car.velocity.y = Math.abs(car.velocity.y) * 0.3; // Less bouncy
    }
  }

  // Compute desired toward per-car goal
  let desired = new THREE.Vector3().subVectors(car.goal, car.position);
  const distToGoal = desired.length();

  // If we're close to goal, pick a new goal that's far away to encourage exploration
  const goalThreshold = 6.0; // Increased threshold
  if (distToGoal < goalThreshold) {
    // Pick a goal that's far from current position to encourage exploration
    let attempts = 0;
    do {
      car.goal = randomPointInCity(cityRadius);
      attempts++;
    } while (car.goal.distanceTo(car.position) < 30 && attempts < 10); // Ensure goal is far away

    desired.subVectors(car.goal, car.position);
  }

  // Stronger goal-seeking behavior
  desired.normalize().multiplyScalar(car.maxSpeed * 1.2); // 20% stronger goal attraction

  // Basic steering (desired - velocity) with exploration boost
  let steer = new THREE.Vector3().subVectors(desired, car.velocity);
  if (steer.length() > car.maxForce) steer.setLength(car.maxForce);

  // Add exploration momentum - reduce tendency to get stuck
  const explorationForce = desired.clone().normalize().multiplyScalar(0.5);
  steer.add(explorationForce);

  // ---- Separation (car-to-car repulsion) - reduced to allow more exploration ----
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
    separation.multiplyScalar(car.separationWeight * 0.7); // Reduced separation influence
  }

  // ---- Enhanced Building avoidance with prediction and stronger force ----
  let buildingAvoid = new THREE.Vector3();
  const lookAheadTime = 1.5; // Shorter prediction for low-altitude navigation
  const predictedPos = car.position
    .clone()
    .add(car.velocity.clone().multiplyScalar(lookAheadTime));

  for (let b of buildings) {
    // Check both current position and predicted future position
    const positions = [car.position, predictedPos];

    for (let pos of positions) {
      const diff = new THREE.Vector3().subVectors(pos, b.center);
      const d = diff.length();
      const minDist = b.radius + car.radius + 4.0; // Reduced clearance to force interaction

      if (d < minDist) {
        diff.normalize();
        const strength = Math.pow(1 - d / minDist, 2); // Stronger exponential falloff
        const weight = pos === predictedPos ? 1.5 : 1.0; // Stronger weight for prediction
        buildingAvoid.addScaledVector(diff, strength * weight);
      }
    }

    // Much stronger vertical avoidance at low altitude - encourage going around not over
    if (car.position.y < b.size.y * 0.3) {
      // Only when very low relative to building
      const horizontalDist = new THREE.Vector2(
        car.position.x - b.center.x,
        car.position.z - b.center.z
      ).length();

      if (horizontalDist < b.radius + 8.0) {
        // Prefer lateral avoidance over vertical at street level
        const lateralAvoid = new THREE.Vector3(
          car.position.x - b.center.x,
          0,
          car.position.z - b.center.z
        ).normalize();
        buildingAvoid.add(lateralAvoid.multiplyScalar(2.0)); // Strong lateral push
        buildingAvoid.y += 0.5; // Minimal upward force
      }
    }
  }

  if (buildingAvoid.lengthSq() > 0) {
    buildingAvoid.normalize().multiplyScalar(car.maxSpeed);
    buildingAvoid
      .sub(car.velocity)
      .clampLength(0, car.maxForce)
      .multiplyScalar(car.avoidWeight * 1.5); // Increased avoidance weight
  }

  // ---- Floor avoidance - prevent cars from diving into ground ----
  let floorAvoid = new THREE.Vector3();
  const heightAboveFloor = car.position.y;
  const minFlightHeight = 0.6; // Very minimal threshold
  if (heightAboveFloor < minFlightHeight) {
    const strength = 1 - heightAboveFloor / minFlightHeight;
    floorAvoid.y = strength * 2; // Very gentle upward force
  }

  // ---- Weave / rhythmic motion with horizontal bias and altitude variation ----
  car.weavePhase += dt * 1.6; // Frequency

  // Horizontal weaving (reduced)
  const weaveOffset = Math.sin(car.weavePhase + car.phaseOffset) * 2.0; // Reduced amplitude
  let forward =
    car.velocity.length() > 0.1
      ? car.velocity.clone().normalize()
      : new THREE.Vector3(1, 0, 0);
  let lateral = new THREE.Vector3()
    .crossVectors(forward, new THREE.Vector3(0, 1, 0))
    .normalize();
  const weave = lateral.multiplyScalar(weaveOffset * car.weaveWeight * 0.5); // Reduced horizontal weaving

  // Random altitude variations - occasional dips and rises
  let altitudeChange = new THREE.Vector3();
  car.jitterTimer += dt;

  if (car.jitterTimer > 2.0 + Math.random() * 3.0) {
    // Every 2-5 seconds
    const altitudeDirection = Math.random() - 0.5; // Random up or down
    const altitudeStrength = Math.random() * 1.0 + 0.2; // Smaller: 0.2-1.2 strength

    // Create very small altitude changes to keep cars at street level
    altitudeChange.y = altitudeDirection * altitudeStrength;
    car.jitterTimer = 0;
  }

  // Dampen Y velocity more aggressively to keep cars low
  car.velocity.y *= 0.95; // Stronger dampening to maintain street level

  // ---- Boundary: encourage exploration across the city ----
  const toCenter = car.position.clone().setY(0);
  const dist = toCenter.length();
  const boundaryLimit = cityRadius * 0.95;
  let boundaryForce = new THREE.Vector3();
  if (dist > boundaryLimit) {
    // Instead of circling, push more directly inward with exploration bias
    const inward = toCenter.clone().multiplyScalar(-1).normalize();
    const tangent = new THREE.Vector3()
      .crossVectors(inward, new THREE.Vector3(0, 1, 0))
      .normalize();

    // More inward force, less tangential to reduce circling
    boundaryForce.addScaledVector(inward, 1.5); // Stronger inward
    boundaryForce.addScaledVector(tangent, 0.8); // Reduced tangential
    boundaryForce.multiplyScalar(car.maxSpeed);
    boundaryForce
      .sub(car.velocity)
      .clampLength(0, car.maxForce)
      .multiplyScalar(1.5);
  }

  // ---- Combine forces ----
  const combined = new THREE.Vector3();
  combined.add(steer);
  combined.add(separation);
  combined.add(buildingAvoid);
  combined.add(floorAvoid); // Add floor avoidance
  combined.add(weave);
  combined.add(altitudeChange); // Add random altitude changes
  combined.add(boundaryForce);

  // ---- Horizontal preference: reduce Y component of steering but maintain momentum ----
  combined.y *= 0.1; // Much stronger reduction of vertical steering

  // Ensure there's always some forward momentum component
  const horizontalMagnitude = Math.sqrt(
    combined.x * combined.x + combined.z * combined.z
  );
  if (horizontalMagnitude < 1.0) {
    // Add a small forward bias if horizontal forces are too weak
    const currentHorizontalDir = new THREE.Vector3(
      car.velocity.x,
      0,
      car.velocity.z
    );
    if (currentHorizontalDir.length() > 0.1) {
      currentHorizontalDir.normalize().multiplyScalar(0.5);
      combined.x += currentHorizontalDir.x;
      combined.z += currentHorizontalDir.z;
    }
  }

  // ---- Smooth steering with less smoothing for more responsive exploration ----
  const steerLerp = 0.15; // Increased from 0.08 for more responsive steering
  car.steerSmoothed.lerp(combined, steerLerp);

  // ---- Apply to velocity and position ----
  car.velocity.add(car.steerSmoothed.clone().multiplyScalar(dt));

  // Speed cap
  if (car.velocity.length() > car.maxSpeed)
    car.velocity.setLength(car.maxSpeed);

  // Anti-stall: maintain minimum forward velocity
  const minSpeed = 3.0; // Minimum speed to prevent stalling
  if (car.velocity.length() < minSpeed) {
    // If moving too slowly, add forward momentum
    if (car.velocity.length() > 0.1) {
      // Boost existing direction
      car.velocity.setLength(minSpeed);
    } else {
      // If nearly stationary, pick a random direction
      const randomDir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.3) * 0.5, // Slight upward bias
        (Math.random() - 0.5) * 2
      ).normalize();
      car.velocity.copy(randomDir.multiplyScalar(minSpeed));
    }
  }

  // Minimum motion jitter if stuck (enhanced)
  if (car.velocity.length() < minSpeed * 0.8) {
    car.jitterTimer += dt * 2; // Faster accumulation when slow
    if (car.jitterTimer > 0.3) {
      // Quicker response
      // Apply strong horizontal impulse to break free
      const escapeForce = new THREE.Vector3(
        (Math.random() - 0.5) * 6, // Strong horizontal escape
        Math.random() * 0.8, // Small upward component
        (Math.random() - 0.5) * 6
      );
      car.velocity.add(escapeForce);
      car.jitterTimer = 0;
    }
  } else {
    // Don't reset jitter timer - let it accumulate for altitude changes
  }

  car.position.add(car.velocity.clone().multiplyScalar(dt));

  // Final floor check after position update
  if (car.position.y < floorLevel) {
    car.position.y = floorLevel;
    car.velocity.y = Math.max(0, car.velocity.y); // Stop downward velocity
  }
}

// Optimized Building Component with LOD and Manhattan-style variety
const Building: React.FC<{ building: Building; distance?: number }> = ({
  building,
  distance = 0,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Use lower detail for distant buildings
  const detail = distance > 100 ? 1 : distance > 50 ? 2 : 4;

  // Color variation based on height for Manhattan feel
  const getColorByHeight = (height: number) => {
    if (height > 60) return "#4a4a4a"; // Dark for super tall
    if (height > 30) return "#5a5a5a"; // Medium gray for tall
    if (height > 15) return "#6a6a6a"; // Light gray for medium
    return "#7a7a7a"; // Lightest for short
  };

  return (
    <mesh ref={meshRef} position={building.position} castShadow receiveShadow>
      <boxGeometry
        args={[
          building.size.x,
          building.size.y,
          building.size.z,
          detail,
          detail,
          detail,
        ]}
      />
      <meshStandardMaterial
        color={getColorByHeight(building.size.y)}
        metalness={0.1}
        roughness={0.8}
        envMapIntensity={0.7}
      />
    </mesh>
  );
};

// Optimized Car Component
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

// Expanded Ground Component
const ExpandedGround: React.FC<{ cityRadius: number }> = ({ cityRadius }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create a much larger ground that extends to horizon
  const groundSize = cityRadius * 10; // Make ground much larger than city

  return (
    <>
      {/* Main ground plane */}
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[groundSize, groundSize, 32, 32]} />
        <meshStandardMaterial
          color="#0b0b0d"
          roughness={1}
          metalness={0}
          // Add subtle grid pattern for depth perception
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Add a subtle grid overlay for better depth perception */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.48, 0]}>
        <planeGeometry args={[groundSize, groundSize, 100, 100]} />
        <meshBasicMaterial
          color="#1a1a2e"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
};

// Lighting orchestration component
const SceneLighting: React.FC<{ cityRadius: number }> = ({ cityRadius }) => {
  const { gl, scene } = useThree();

  useEffect(() => {
    // Physically based renderer settings
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
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-300} // Increased for larger ground
        shadow-camera-right={300}
        shadow-camera-top={300}
        shadow-camera-bottom={-300}
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

      {/* Accumulative soft shadows on the ground */}
      <AccumulativeShadows
        temporal
        frames={30}
        alphaTest={0.85}
        scale={1.0}
        position={[0, -0.49, 0]}
      >
        <RandomizedLight
          amount={4}
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
        width={cityRadius * 4} // Increased for larger ground
        height={cityRadius * 4}
        blur={2}
        far={20}
      />
    </>
  );
};

// Flying Cars Scene Component with Progressive Loading
const FlyingCarsScene: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const cityRadius = 120;

  // Initialize scene with progressive loading
  useEffect(() => {
    const initializeScene = async () => {
      // Show loading state
      setIsInitialized(false);

      // Generate buildings in chunks to avoid blocking
      const generateBuildingsAsync = () => {
        return new Promise<Building[]>((resolve) => {
          setTimeout(() => {
            const newBuildings = generateOrganicBuildings(100, cityRadius);
            resolve(newBuildings);
          }, 100);
        });
      };

      // Generate cars in chunks
      const generateCarsAsync = () => {
        return new Promise<Car[]>((resolve) => {
          setTimeout(() => {
            const newCars: Car[] = [];
            for (let i = 0; i < 30; i++) {
              const position = randomPointInCity(cityRadius);
              newCars.push({
                id: i,
                position,
                velocity: new THREE.Vector3(
                  (Math.random() - 0.5) * 2,
                  Math.abs(Math.random() - 0.2) * 1, // Start with slight upward bias
                  (Math.random() - 0.5) * 2
                ),
                goal: randomPointInCity(cityRadius),
                radius: 1.0,
                maxSpeed: 22, // Slightly increased from 20 for better momentum
                maxForce: 10, // Reduced from 12 for smoother steering
                separationRadius: 6.0, // Reduced from 8.0
                separationWeight: 5.0, // Reduced from 8.0
                avoidWeight: 8.0, // Increased avoidance weight
                weaveWeight: 0.3, // Further reduced weaving
                steerSmoothed: new THREE.Vector3(),
                weavePhase: Math.random() * Math.PI * 2,
                phaseOffset: Math.random() * Math.PI * 2,
                jitterTimer: 0,
              });
            }
            resolve(newCars);
          }, 50);
        });
      };

      try {
        // Load buildings first
        const newBuildings = await generateBuildingsAsync();
        setBuildings(newBuildings);

        // Then load cars
        const newCars = await generateCarsAsync();
        setCars(newCars);

        // Mark as initialized
        setIsInitialized(true);
      } catch (error) {
        console.error("Error initializing scene:", error);
        setIsInitialized(true); // Still mark as initialized to prevent infinite loading
      }
    };

    initializeScene();
  }, []);

  // Animation loop - only run when initialized
  useFrame((_, delta) => {
    if (!isInitialized || cars.length === 0) return;

    setCars((prevCars) => {
      const updatedCars = [...prevCars];
      updatedCars.forEach((car) => {
        updateCar(car, delta, updatedCars, buildings, cityRadius);
      });
      return updatedCars;
    });
  });

  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <>
      {/* Expanded Ground */}
      <ExpandedGround cityRadius={cityRadius} />

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

// Main App Component with Suspense
const App: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows
        camera={{ position: [0, 50, 100], fov: 50 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
        }}
        onCreated={({ gl, scene }) => {
          // Runtime settings
          (gl as any).physicallyCorrectLights = true;
          (gl as any).toneMapping = THREE.ACESFilmicToneMapping;
          (gl as any).toneMappingExposure = 1.0;

          // Scene background
          scene.background = new THREE.Color(0x0a0a12);
        }}
      >
        <Suspense fallback={<Loader />}>
          <FlyingCarsScene />
          <OrbitControls
            maxPolarAngle={Math.PI * 0.49}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
