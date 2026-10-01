import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

const MODEL_URL = "/models/carbine.glb";

const Carbine = () => {
  const { scene } = useGLTF(MODEL_URL);
  const offset = useMemo(() => {
    scene.updateMatrixWorld(true);
    const c = new Box3().setFromObject(scene).getCenter(new Vector3());
    return [-c.x, -c.y, -c.z];
  }, [scene]);
  return (
    <group rotation={[0, Math.PI, 0]}>
      <primitive object={scene} position={offset} />
    </group>
  );
};

export const WeaponModel = () => (
  <div className="weapon" data-testid="weapon-model">
    <Canvas
      camera={{ position: [0, 0, 1.75], fov: 35 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 5]} intensity={2} />
      <directionalLight position={[-4, 2, -3]} intensity={1} color="#22D3EE" />
      <Suspense fallback={null}>
        <Carbine />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  </div>
);

useGLTF.preload(MODEL_URL);
