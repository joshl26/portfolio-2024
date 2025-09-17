"use client";

import Link from "next/link";
import * as THREE from "three";
import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  Suspense,
  useEffect,
} from "react";
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

// Client-side SEO/head helper (unchanged)
function useClientHead() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "404 - Page Not Found | Blackrock Design";

    const upsertMeta = (
      attrs: { name?: string; property?: string },
      content: string
    ) => {
      const selector = attrs.name
        ? `meta[name="${attrs.name}"]`
        : `meta[property="${attrs.property}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (attrs.name) el.setAttribute("name", attrs.name);
        if (attrs.property) el.setAttribute("property", attrs.property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta(
      { name: "description" },
      "The requested page could not be found. Explore our portfolio, blog, or get in touch for assistance."
    );
    upsertMeta(
      { property: "og:title" },
      "404 - Page Not Found | Blackrock Design"
    );
    upsertMeta(
      { property: "og:description" },
      "The requested page could not be found."
    );
    upsertMeta({ property: "og:type" }, "website");
    upsertMeta({ name: "robots" }, "noindex,follow");

    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "404 - Page Not Found",
      description: "The requested page could not be found.",
      url: "/404",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "client-jsonld-404";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      const created = [
        "meta[name='description']",
        "meta[property='og:title']",
        "meta[property='og:description']",
        "meta[property='og:type']",
        "meta[name='robots']",
      ];
      created.forEach((sel) => {
        const el = document.head.querySelector(sel);
        if (el) document.head.removeChild(el);
      });
      const s = document.getElementById("client-jsonld-404");
      if (s) document.head.removeChild(s);
    };
  }, []);
}

// --- theme & configs (unchanged except gold accents) ---
const ACCENTS = ["#f59e0b", "#d97706", "#b45309", "#92400e"] as const;
const BACKGROUND_COLOR = "#0a0a0f";

const createShuffle = (accent: number) => [
  { color: "#4b5563", roughness: 0.1 },
  { color: "#4b5563", roughness: 0.75 },
  { color: "#4b5563", roughness: 0.75 },
  { color: "#f3f4f6", roughness: 0.1 },
  { color: "#f3f4f6", roughness: 0.75 },
  { color: "#f3f4f6", roughness: 0.1 },
  { color: ACCENTS[accent], roughness: 0.1, accent: true },
  { color: ACCENTS[accent], roughness: 0.75, accent: true },
  { color: ACCENTS[accent], roughness: 0.1, accent: true },
];

const CAMERA_CONFIG = {
  position: [0, 0, 15] as [number, number, number],
  fov: 17.5,
  near: 1,
  far: 20,
};
const CANVAS_PROPS = {
  shadows: true,
  dpr: [1, 1.5] as [number, number],
  gl: { antialias: false },
  camera: CAMERA_CONFIG,
};
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

const SceneFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshBasicMaterial color="#4b5563" />
  </mesh>
);

// --- Component ---
const NotFound: React.FC = () => {
  useClientHead();

  // Styles adjusted for stacking: Canvas wrapper zIndex 0, overlay zIndex 20
  const styles = useMemo(
    () => ({
      sceneWrapper: {
        position: "fixed" as const,
        inset: 0,
        zIndex: 0, // keep background canvas at z=0
        pointerEvents: "auto" as const, // keep clicks working in canvas where overlay not present
      },
      canvasStyle: {
        position: "absolute" as const,
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      },
      overlayContainer: {
        position: "relative" as const,
        zIndex: 20, // overlay above the canvas
        pointerEvents: "none" as const, // container doesn't block pointer events by default
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      },
      textCard: {
        pointerEvents: "auto" as const, // enable interactions for the card and links
        maxWidth: 880,
        padding: "2rem",
        textAlign: "center" as const,
      },
      heading: {
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        background: "linear-gradient(90deg,#fbbf24,#f59e0b)",
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent" as const,
        fontWeight: 900,
        margin: 0,
      },
      paragraph: {
        fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
        color: "#d1d5db",
        marginTop: "1rem",
      },
      link: {
        display: "inline-block",
        marginTop: "1.25rem",
        fontSize: "1rem",
        background: "linear-gradient(90deg,#fbbf24,#f59e0b)",
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent" as const,
        textDecoration: "underline",
        fontWeight: 600,
      },
    }),
    []
  );

  return (
    <>
      {/* Canvas wrapper: positioned fixed so it covers the full viewport and sits behind the overlay */}
      <div style={styles.sceneWrapper}>
        <Suspense
          fallback={<div className="text-gray-400">Loading 3D Scene...</div>}
        >
          {/* Pass inline style so the internal canvas is absolutely positioned */}
          <Canvas
            style={styles.canvasStyle}
            onClick={() => {}}
            {...CANVAS_PROPS}
          >
            <color attach="background" args={[BACKGROUND_COLOR]} />
            <ambientLight intensity={LIGHTING_CONFIG.ambient.intensity} />
            <spotLight {...LIGHTING_CONFIG.spot} />

            <Physics gravity={[0, 0, 0]}>
              <Pointer />
              {/* generate connectors: kept inside Scene function below */}
              {/* We'll mount a small internal Scene content here to preserve original behavior */}
              <SceneInner />
            </Physics>

            <EffectComposer multisampling={8}>
              <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
            </EffectComposer>

            <Environment resolution={256}>
              <LightingSetup />
            </Environment>
          </Canvas>
        </Suspense>
      </div>

      {/* Overlay container sits above the Canvas */}
      <div style={styles.overlayContainer}>
        <div style={styles.textCard}>
          <h1 style={styles.heading}>404 — PAGE NOT FOUND</h1>
          <p style={styles.paragraph}>
            The page you're looking for doesn't exist or has been moved. Explore
            the site or get in touch.
          </p>
          <Link href="/" style={styles.link}>
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

// --- Extracted scene inner so Canvas children are separate and not duplicated ---
function SceneInner() {
  const [accent, click] = useReducer(
    (state: number) => ++state % ACCENTS.length,
    0
  );
  const connectors = useMemo(() => createShuffle(accent), [accent]);
  const handleClick = useCallback(() => {
    // react-three-fiber Canvas onClick isn't accessible here directly; you can wire UI to call this reducer if needed
    // For click interaction on the scene, you can add event handlers to meshes or a transparent plane
  }, []);

  return (
    <>
      {/* Create connectors and one model as in your original Scene */}
      {connectors.map((props, i) => (
        <Connector key={i} {...props} />
      ))}
      <Connector position={[10, 10, 5]}>
        <Model>
          <MeshTransmissionMaterial {...TRANSMISSION_MATERIAL_PROPS} />
        </Model>
      </Connector>
    </>
  );
}

// --- LightingSetup, Connector, Pointer, Model, etc. remain unchanged (copy from your version) ---
const LightingSetup: React.FC = () => (
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

  const { vec, pos } = useMemo(() => {
    const vec = new THREE.Vector3();
    const r = THREE.MathUtils.randFloatSpread;
    const pos = position || [r(10), r(10), r(10)];
    return { vec, pos };
  }, [position]);

  useFrame((state, delta) => {
    const clampedDelta = Math.min(0.1, delta);
    if (api.current) {
      try {
        api.current.applyImpulse(
          vec
            .copy(api.current.translation())
            .negate()
            .multiplyScalar(0.2 * clampedDelta * 60)
        );
      } catch {
        // ignore
      }
    }
  });

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
  nodes: { connector: THREE.Mesh };
  materials: { base: THREE.MeshStandardMaterial };
}

function Model({ children, color = "white", roughness = 0, ...props }: any) {
  const ref = useRef<any>(null);
  const { nodes, materials } = useGLTF(
    "/c-transformed.glb"
  ) as unknown as GLTFResult;

  const materialProps = useMemo(
    () => ({ metalness: 0.2, roughness, map: materials?.base?.map }),
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

useGLTF.preload("/c-transformed.glb");

export default NotFound;
