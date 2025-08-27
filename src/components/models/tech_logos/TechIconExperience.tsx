
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type TechModel = {
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
  name: string;
};

export const TechIconExperience = ({ model }: { model: TechModel }) => {
  const scene = useGLTF(model.modelPath) as any;

  useEffect(() => {
    if (model.name === "Interactive Developer" && scene?.scene) {
      scene.scene.traverse((child: any) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <Environment preset="city" />

      <Float speed={6} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          {scene?.scene && <primitive object={scene.scene} />}
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};
