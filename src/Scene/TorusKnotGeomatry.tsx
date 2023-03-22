import React, { Suspense, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { BufferGeometry, Mesh, MeshBasicMaterial, TorusKnotGeometry } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

const TorusKnotGeomatry = () => {
  // const geometry = new TorusKnotGeometry(10, 3, 100, 16)
  // const material = new MeshBasicMaterial({ color: 0xffff00 })
  // const torusKnot = new Mesh(geometry, material)
  const geomatryRef = useRef<any>()
  return (
    <>
      <OrbitControls target={[0, 0, 0]} />
      <PerspectiveCamera position={[1, 1, 1]} />
      <color args={[0, 0, 0]} attach="background" />
      <Suspense fallback={null}>
        <mesh scale={[1, 1, 1]}>
          <torusKnotGeometry
            ref={geomatryRef}
            args={[9.7, 3.5, 139, 14, 20, 3]}
          />
          <meshStandardMaterial />
          {/* <edgesGeometry attach="geometry" args={[geomatryRef.current]} />
          <lineBasicMaterial attach="material" /> */}
        </mesh>
      </Suspense>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </>
  )
}

export default TorusKnotGeomatry
