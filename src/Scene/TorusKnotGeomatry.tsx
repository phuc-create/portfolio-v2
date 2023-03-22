import React, { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Mesh, MeshBasicMaterial, TorusKnotGeometry } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

const TorusKnotGeomatry = () => {
  // const geometry = new TorusKnotGeometry(10, 3, 100, 16)
  // const material = new MeshBasicMaterial({ color: 0xffff00 })
  // const torusKnot = new Mesh(geometry, material)
  const viewport = useThree(state => state.viewport)
  return (
    <>
      <OrbitControls target={[0, 0, 0]} />
      <PerspectiveCamera position={[1, 1, 1]} />
      <color args={[0, 0, 0]} attach="background" />
      <Suspense fallback={null}>
        <mesh scale={[1, 1, 1]}>
          <torusKnotGeometry
            args={[9.7, 3.5, 139, 14, 20, 3]}
          // parameters={{ radius: 9.7, tube: 3.5, tubularSegments: 140, radialSegments: 19, p: 20, q: 3 }}
          />
          <meshStandardMaterial />
        </mesh >
      </Suspense>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </>
  )
}

export default TorusKnotGeomatry
