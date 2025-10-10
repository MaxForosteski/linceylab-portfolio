'use client'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Mesh,Group } from 'three';

function RobotHead() {
    const headRef = useRef<Mesh>(null!);
    const groupRef = useRef<Group>(null!);
    const { mouse } = useThree(); 

    /*useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) *2 + 1;
            mouse.current = {x,y};
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);*/

    useFrame(() => {
        const maxRotation = 0.5;
        const targetX = -mouse.y * maxRotation;
        const targetY = mouse.x * maxRotation;
        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.1;
        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.1;
    });

    return (
        <group ref={groupRef}>
            <mesh ref={headRef} position={[0,0,0]}>
                <boxGeometry args={[2,2,2]}/>
                <meshStandardMaterial color="#555" metalness={0.6} roughness={0.4}/>
            </mesh>

            <mesh position={[-0.6,0.2,1.05]}>
                <boxGeometry args={[0.6,0.3,0.1]} />
                <meshStandardMaterial emissive="#0ff" emissiveIntensity={1.5} />
            </mesh>
            <mesh position={[0.6,0.2,1.05]}>
                <sphereGeometry args={[0.2,32,32]} />
                <meshStandardMaterial emissive="#0ff" emissiveIntensity={1.5} />
            </mesh>

            <mesh position={[0,1.5,0]}>
                <cylinderGeometry args={[0.05,0.05, 1]}/>
                <meshStandardMaterial color="#f00" />
            </mesh>
        </group>
    );
}

export default function RobotHeader() {
    return (
        <div className="h-[40vh] w-[40vw] right-[0] opacity-100">
            <Canvas camera={{position: [0,0,5]}}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[5,5,5]} intensity={1}/>
                <RobotHead/>
                <OrbitControls enablePan={false} enableRotate={false} enableZoom={false}/>
            </Canvas>
        </div>
    );
}