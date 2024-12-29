import { Canvas } from '@react-three/fiber';
import { LandingCube } from './LandingCube';

export const LandingCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} decay={0} />
      <pointLight position={[-10, -10, -10]} />
      <LandingCube />
    </Canvas>
  );
};
