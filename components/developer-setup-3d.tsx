"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function VSCodeMonitor() {
  const monitorRef = useRef<THREE.Group>(null)

  return (
    <group ref={monitorRef} position={[0, 0, 0]}>
      {/* Monitor Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.1, 8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Monitor Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 2.2, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Screen Background */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[3, 2]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>

      {/* VS Code Title Bar */}
      <mesh position={[0, 0.9, 0.07]}>
        <planeGeometry args={[3, 0.15]} />
        <meshBasicMaterial color="#323233" />
      </mesh>

      {/* VS Code Sidebar */}
      <mesh position={[-1.2, 0, 0.07]}>
        <planeGeometry args={[0.6, 1.7]} />
        <meshBasicMaterial color="#252526" />
      </mesh>

      {/* File Explorer Icons */}
      <mesh position={[-1.35, 0.6, 0.08]}>
        <planeGeometry args={[0.05, 0.05]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
      <mesh position={[-1.35, 0.4, 0.08]}>
        <planeGeometry args={[0.05, 0.05]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
      <mesh position={[-1.35, 0.2, 0.08]}>
        <planeGeometry args={[0.05, 0.05]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>

      {/* File Names */}
      <mesh position={[-1.1, 0.6, 0.08]}>
        <planeGeometry args={[0.25, 0.03]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
      <mesh position={[-1.1, 0.4, 0.08]}>
        <planeGeometry args={[0.2, 0.03]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
      <mesh position={[-1.1, 0.2, 0.08]}>
        <planeGeometry args={[0.3, 0.03]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>

      {/* Editor Tabs */}
      <mesh position={[0.3, 0.75, 0.07]}>
        <planeGeometry args={[1.8, 0.1]} />
        <meshBasicMaterial color="#2d2d30" />
      </mesh>

      {/* Active Tab */}
      <mesh position={[-0.3, 0.75, 0.08]}>
        <planeGeometry args={[0.4, 0.1]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>

      {/* Code Editor Area */}
      <mesh position={[0.3, 0.1, 0.07]}>
        <planeGeometry args={[1.8, 1.3]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>

      {/* Code Lines with Syntax Highlighting */}
      {/* Import statement */}
      <mesh position={[-0.4, 0.5, 0.08]}>
        <planeGeometry args={[0.15, 0.04]} />
        <meshBasicMaterial color="#c586c0" />
      </mesh>
      <mesh position={[-0.1, 0.5, 0.08]}>
        <planeGeometry args={[0.3, 0.04]} />
        <meshBasicMaterial color="#ce9178" />
      </mesh>

      {/* Function declaration */}
      <mesh position={[-0.4, 0.3, 0.08]}>
        <planeGeometry args={[0.2, 0.04]} />
        <meshBasicMaterial color="#569cd6" />
      </mesh>
      <mesh position={[-0.05, 0.3, 0.08]}>
        <planeGeometry args={[0.25, 0.04]} />
        <meshBasicMaterial color="#dcdcaa" />
      </mesh>

      {/* JSX/HTML */}
      <mesh position={[-0.3, 0.1, 0.08]}>
        <planeGeometry args={[0.1, 0.04]} />
        <meshBasicMaterial color="#808080" />
      </mesh>
      <mesh position={[-0.1, 0.1, 0.08]}>
        <planeGeometry args={[0.2, 0.04]} />
        <meshBasicMaterial color="#4ec9b0" />
      </mesh>
      <mesh position={[0.2, 0.1, 0.08]}>
        <planeGeometry args={[0.15, 0.04]} />
        <meshBasicMaterial color="#9cdcfe" />
      </mesh>

      {/* String */}
      <mesh position={[-0.2, -0.1, 0.08]}>
        <planeGeometry args={[0.4, 0.04]} />
        <meshBasicMaterial color="#ce9178" />
      </mesh>

      {/* Comments */}
      <mesh position={[-0.3, -0.3, 0.08]}>
        <planeGeometry args={[0.5, 0.04]} />
        <meshBasicMaterial color="#6a9955" />
      </mesh>

      {/* Terminal */}
      <mesh position={[0.3, -0.6, 0.07]}>
        <planeGeometry args={[1.8, 0.4]} />
        <meshBasicMaterial color="#0c0c0c" />
      </mesh>

      {/* Terminal Text */}
      <mesh position={[-0.4, -0.55, 0.08]}>
        <planeGeometry args={[0.3, 0.03]} />
        <meshBasicMaterial color="#00ff00" />
      </mesh>
      <mesh position={[0.1, -0.55, 0.08]}>
        <planeGeometry args={[0.4, 0.03]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Cursor */}
      <mesh position={[0.15, 0.1, 0.09]}>
        <planeGeometry args={[0.02, 0.04]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

function Keyboard() {
  return (
    <group position={[0, -2.2, 1]}>
      {/* Keyboard Base */}
      <mesh>
        <boxGeometry args={[2.5, 0.1, 1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Keys */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh key={i} position={[-1 + (i % 5) * 0.4, 0.1, -0.3 + Math.floor(i / 5) * 0.3]}>
          <boxGeometry args={[0.3, 0.1, 0.3]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
      ))}

      {/* RGB Lighting */}
      <pointLight position={[0, 0.2, 0]} color="#6366f1" intensity={0.5} distance={2} />
    </group>
  )
}

function Mouse() {
  return (
    <group position={[1.5, -2.1, 0.5]}>
      <mesh>
        <boxGeometry args={[0.4, 0.1, 0.6]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      <pointLight position={[0, 0.2, 0]} color="#8b5cf6" intensity={0.3} distance={1} />
    </group>
  )
}

function PCCase() {
  const pcRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (pcRef.current) {
      pcRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={pcRef} position={[2.5, -1, 0]}>
      {/* PC Case */}
      <mesh>
        <boxGeometry args={[0.8, 2, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Front Panel */}
      <mesh position={[0.41, 0, 0]}>
        <planeGeometry args={[1.4, 1.8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* RGB Fans */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[0.42, 0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 8]} />
          <MeshDistortMaterial color="#6366f1" distort={0.1} speed={5} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[0.42, -0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 8]} />
          <MeshDistortMaterial color="#8b5cf6" distort={0.1} speed={5} />
        </mesh>
      </Float>

      {/* RGB Lighting */}
      <pointLight position={[0.5, 0.5, 0]} color="#6366f1" intensity={1} distance={3} />
      <pointLight position={[0.5, -0.5, 0]} color="#8b5cf6" intensity={1} distance={3} />
    </group>
  )
}

function Speakers() {
  return (
    <>
      {/* Left Speaker */}
      <group position={[-2.5, -1, 0.5]}>
        <mesh>
          <boxGeometry args={[0.4, 1, 0.4]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        <mesh position={[0, 0.2, 0.21]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
        <pointLight position={[0, 0.3, 0.3]} color="#06b6d4" intensity={0.5} distance={2} />
      </group>

      {/* Right Speaker */}
      <group position={[4, -1, 0.5]}>
        <mesh>
          <boxGeometry args={[0.4, 1, 0.4]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        <mesh position={[0, 0.2, 0.21]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
        <pointLight position={[0, 0.3, 0.3]} color="#06b6d4" intensity={0.5} distance={2} />
      </group>
    </>
  )
}

function FloatingCode() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={2}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.2}
          height={0.02}
          position={[-1, 2, -1]}
          rotation={[0, Math.PI / 4, 0]}
        >
          {"</>"}
          <meshStandardMaterial color="#6366f1" />
        </Text3D>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.15}
          height={0.02}
          position={[2, 2.5, -2]}
          rotation={[0, -Math.PI / 6, 0]}
        >
          {"{ }"}
          <meshStandardMaterial color="#8b5cf6" />
        </Text3D>
      </Float>

      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1.8}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.18}
          height={0.02}
          position={[-2.5, 1.5, -1.5]}
          rotation={[0, Math.PI / 3, 0]}
        >
          {"()"}
          <meshStandardMaterial color="#06b6d4" />
        </Text3D>
      </Float>

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.2}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.12}
          height={0.02}
          position={[3, 1.8, -1]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          {"[]"}
          <meshStandardMaterial color="#f59e0b" />
        </Text3D>
      </Float>
    </>
  )
}

export default function DeveloperSetup3D() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl border-2 border-blue-500/30 shadow-lg shadow-blue-500/10">
      <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.7} />

        {/* Desk */}
        <mesh position={[0, -2.5, 0]}>
          <boxGeometry args={[6, 0.2, 3]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>

        {/* Setup Components */}
        <VSCodeMonitor />
        <Keyboard />
        <Mouse />
        <PCCase />
        <Speakers />
        <FloatingCode />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
