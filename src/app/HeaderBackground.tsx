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

    useFrame(({ pointer }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01
            meshRef.current.position.x += pointer.x * 0.0005
            meshRef.current.position.y += pointer.y * 0.0005
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
        const geometries = ["box", "sphere", "cone"];

        return Array.from({ length: 30 }, (_, i) => ({
            geometryType: geometries[Math.floor(Math.random() * geometries.length)],
            color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
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