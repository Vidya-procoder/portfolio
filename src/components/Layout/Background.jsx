import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import * as random from 'maath/random/dist/maath-random.esm';
import { useSpring } from 'framer-motion';

const StarField = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const GeometricLattice = ({ color }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={[2, 2, 2]}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>
        </Float>
    )
}


const CameraController = () => {
    const { camera } = useThree();
    const location = useLocation();

    // Spring configs for smooth transitions
    const x = useSpring(0, { stiffness: 50, damping: 20 });
    const y = useSpring(0, { stiffness: 50, damping: 20 });
    const z = useSpring(5, { stiffness: 50, damping: 20 });

    useEffect(() => {
        // Define camera positions per route
        switch (location.pathname) {
            case '/':
                x.set(0); y.set(0); z.set(5);
                break;
            case '/projects':
                x.set(2); y.set(0); z.set(4);
                break;
            case '/skills':
                x.set(-2); y.set(1); z.set(4);
                break;
            case '/articles':
                x.set(0); y.set(-2); z.set(4);
                break;
            case '/profiles':
                x.set(2); y.set(2); z.set(5);
                break;
            case '/resume':
                x.set(-2); y.set(-2); z.set(6);
                break;
            case '/contact':
                x.set(0); y.set(0); z.set(3);
                break;
            default:
                x.set(0); y.set(0); z.set(5);
        }
    }, [location.pathname, x, y, z]);

    useFrame(() => {
        camera.position.x = x.get();
        camera.position.y = y.get();
        camera.position.z = z.get();
        camera.lookAt(0, 0, 0);
    });

    return null;
}

const RouteBasedLighting = () => {
    const location = useLocation();
    const color = useMemo(() => {
        switch (location.pathname) {
            case '/': return '#38bdf8'; // Blue
            case '/projects': return '#a855f7'; // Purple
            case '/skills': return '#22c55e'; // Green
            case '/articles': return '#f59e0b'; // Amber
            case '/profiles': return '#ec4899'; // Pink
            case '/resume': return '#64748b'; // Slate
            case '/contact': return '#ef4444'; // Red
            default: return '#38bdf8';
        }
    }, [location.pathname]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight color={color} position={[5, 10, 5]} intensity={1} />
            <pointLight color={color} position={[-10, -10, -10]} intensity={0.5} />
            {/* Center geometry acting as focal point */}
            <GeometricLattice color={color} />
        </>
    )
}

const Background = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                <color attach="background" args={['#0f172a']} />
                <StarField />
                <RouteBasedLighting />
                <CameraController />
            </Canvas>
        </div>
    );
};

export default Background;
