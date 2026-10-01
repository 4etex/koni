import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

const MODEL_URL = "/models/carbine.glb";
const DRACO_PATH = "/draco/";

const Carbine = () => {
  const { scene } = useGLTF(MODEL_URL, DRACO_PATH);
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
      camera={{ position: [0, 0, 3.6], fov: 35 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[4, 5, 5]} intensity={1.2} />
      <directionalLight position={[-4, 2, -3]} intensity={1.6} color="#22D3EE" />
      <directionalLight position={[2, -3, -4]} intensity={1} color="#9BF3FF" />
      <Suspense fallback={null}>
        <Carbine />
        <Environment files="/hdr/city.hdr" environmentIntensity={0.55} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.8}
        enableDamping
        dampingFactor={0.06}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.7}
      />
    </Canvas>
  </div>
);

useGLTF.preload(MODEL_URL, DRACO_PATH);
