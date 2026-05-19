import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SpaceBackground = ({ mouseX, mouseY }) => {
  const starfieldRef = useRef(null)
  const asteroidsRef = useRef([])

  useFrame((state) => {
    if (starfieldRef.current) {
      // Subtle rotation based on mouse position
      const rotX = (mouseY / window.innerHeight - 0.5) * 0.3
      const rotY = (mouseX / window.innerWidth - 0.5) * 0.3
      starfieldRef.current.rotation.x += (rotX - starfieldRef.current.rotation.x) * 0.1
      starfieldRef.current.rotation.y += (rotY - starfieldRef.current.rotation.y) * 0.1
    }

    // Animate asteroids
    asteroidsRef.current.forEach((asteroid, i) => {
      asteroid.rotation.x += 0.002
      asteroid.rotation.y += 0.003
      asteroid.position.x += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.0005
      asteroid.position.y += Math.cos(state.clock.elapsedTime * 0.4 + i) * 0.0005
    })
  })

  useEffect(() => {
    // Create starfield
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 1000
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100
      positions[i + 1] = (Math.random() - 0.5) * 100
      positions[i + 2] = (Math.random() - 0.5) * 100

      const color = Math.random()
      if (color < 0.5) {
        colors[i] = 0
        colors[i + 1] = 0.93
        colors[i + 2] = 1
      } else if (color < 0.8) {
        colors[i] = 1
        colors[i + 1] = 1
        colors[i + 2] = 1
      } else {
        colors[i] = 0.48
        colors[i + 1] = 0.36
        colors[i + 2] = 1
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const starMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const starfield = new THREE.Points(starGeometry, starMaterial)
    starfieldRef.current = starfield

    return () => {
      starGeometry.dispose()
      starMaterial.dispose()
    }
  }, [])

  return (
    <>
      <primitive object={starfieldRef.current} />

      {/* Ambient light */}
      <ambientLight intensity={0.3} color={0x0022ff} />

      {/* Point lights for cosmic effect */}
      <pointLight position={[10, 10, 10]} intensity={0.4} color={0x00eaff} />
      <pointLight position={[-10, -10, -5]} intensity={0.2} color={0x7a5cff} />

      {/* Create asteroids */}
      {[...Array(15)].map((_, i) => (
        <Asteroid
          key={i}
          position={[
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 30 - 20,
          ]}
          scale={Math.random() * 2 + 0.5}
          speed={Math.random() * 0.5 + 0.2}
          asteroidRef={(ref) => {
            if (ref) asteroidsRef.current[i] = ref
          }}
        />
      ))}

      {/* Nebula background */}
      <mesh position={[0, 0, -50]}>
        <sphereGeometry args={[100, 64, 64]} />
        <meshBasicMaterial
          map={createNebulaTexture()}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </mesh>
    </>
  )
}

const Asteroid = ({ position, scale, speed, asteroidRef }) => {
  const meshRef = useRef(null)

  useEffect(() => {
    if (meshRef.current) {
      asteroidRef(meshRef.current)
    }
  }, [asteroidRef])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={0x556b7a}
        metalness={0.6}
        roughness={0.8}
        emissive={0x1a2a3a}
      />
    </mesh>
  )
}

function createNebulaTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')

  // Create nebula gradient
  const gradient = ctx.createRadialGradient(256, 256, 100, 256, 256, 512)
  gradient.addColorStop(0, 'rgba(122, 92, 255, 0.3)')
  gradient.addColorStop(0.5, 'rgba(0, 234, 255, 0.1)')
  gradient.addColorStop(1, 'rgba(5, 7, 13, 0.9)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 512, 512)

  // Add some stars
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 512
    const y = Math.random() * 512
    const radius = Math.random() * 1.5
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8})`
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  return new THREE.CanvasTexture(canvas)
}

export default SpaceBackground
