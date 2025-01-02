import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const LandingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));
  useFrame((state, delta) => (meshRef.current.rotation.z += delta));

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={'#e4e4e7'} />
    </mesh>
  );
};
