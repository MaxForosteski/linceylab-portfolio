import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Cone, Torus } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

type ShapeProps = {
    geometryType: string;
    color: string;
    position: [number, number, number];
};

function Shape({ geometryType, color, position }: ShapeProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.001
            meshRef.current.rotation.y += 0.001
            meshRef.current.position.x += 1 * 0.0005
            meshRef.current.position.y += 1 * 0.0005
        }
    });

    const geometry = useMemo(() => {
        const props = {
            ref: meshRef,
            position: position,
            onPointerOver: () => setHovered(true),
            onPointerOut: () => setHovered(false)
        };

        const material = (
            <meshStandardMaterial
                color={hovered ? "white" : color}
                metalness={0}
                roughness={0.9}
            />
        );

        switch (geometryType) {
            case "sphere":
                return (
                    <Sphere {...props} args={[0.3, 22, 22]}>
                        {material}
                    </Sphere>
                );
            case "cone":
                return (
                    <Cone {...props} args={[0.3, 0.6, 22]}>
                        {material}
                    </Cone>
                );
            case "torus":
                return (
                    <Torus {...props} args={[0.4, 0.15, 16, 50]}>
                        {material}
                    </Torus>
                );
            default:
                return (
                    <Box {...props} args={[0.4, 0.4, 0.4]}>
                        {material}
                    </Box>
                );
        }
    }, [geometryType, position, hovered, color]);

    return <>{geometry}</>;
}

export default function HeaderBackground() {
    const shapes = useMemo(() => {
        const geometries = ["box", "sphere", "cone","torus"];

        return Array.from({ length: 30 }, () => ({
            geometryType: geometries[Math.floor(Math.random() * geometries.length)],
            color: `#e1e1ff`,
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
            ] as [number, number, number],
        }));
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-linear-to-t from-blue-600 to-black">
            <Canvas camera={{ position: [0, 0, 5]}}>
                <ambientLight intensity={0.8} />
                {shapes.map((shape, i) => (
                    <Shape key={i} {...shape} />
                ))}
            </Canvas>
        </div>
    );
}