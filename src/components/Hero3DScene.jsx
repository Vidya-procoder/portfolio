import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

const AnimatedSphere = (props) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} {...props}>
                <sphereGeometry args={[1, 100, 200]} />
                <MeshDistortMaterial
                    color="#38bdf8"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const AnimatedCube = (props) => {
    const meshRef = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.3;
        meshRef.current.rotation.y = t * 0.3;
    });

    return (
        <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
            <mesh ref={meshRef} {...props}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color="#94a3b8" wireframe />
            </mesh>
        </Float>
    )

}

const Hero3DScene = () => {
    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <AnimatedSphere position={[2, 0, 0]} scale={[1.2, 1.2, 1.2]} />
            <AnimatedCube position={[-2, 0, 0]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
};

export default Hero3DScene;
