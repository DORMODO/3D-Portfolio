import { useGLTF } from "@react-three/drei";

export function Computer(props: any) {
  const gltf = useGLTF("/models/computer-optimized-transformed.glb") as any;
  const { nodes, materials } = gltf;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube000_ComputerDesk_0001_1 as any).geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube000_ComputerDesk_0001_2 as any).geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;