"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D } from "@react-three/drei"
import { Suspense } from "react"

// Componente para cargar modelo GLTF
function DeveloperSetupModel() {
  // Descomenta y ajusta la ruta cuando tengas el archivo .gltf
  // const { scene } = useGLTF('/models/developer-setup.gltf')

  // Por ahora, un placeholder
  return (
    <mesh>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
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
    </>
  )
}

export default function GLTFSetup3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <DeveloperSetupModel />
          <FloatingCode />
        </Suspense>

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

// Precargar el modelo GLTF
// useGLTF.preload('/models/developer-setup.gltf')
