import React, { Suspense, useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TorusKnotGeometry } from 'three'
import Camera from './Camera'
import { Environment, useGLTF } from '@react-three/drei'
import DragonModal from '../Modals/DragonModal'
import { TextureLoader } from 'three/src/loaders/TextureLoader'



const TorusKnotGeomatry = () => {
  const torusRef = useRef<Mesh>(null!)
  const torusRef2 = useRef<Mesh>(null!)
  const geomatryRef = useRef<TorusKnotGeometry>(null!)
  const geomatryRef2 = useRef<TorusKnotGeometry>(null!)
  const url = './gltf/textures/DragonMain_emissive.png'
  const colorMap = useLoader(TextureLoader, url)

  useFrame(() => {
    // torusRef.current.rotation.x += 0.01
    // torusRef.current.rotation.y += 0.01
    // torusRef2.current.rotation.x += 0.01
    // torusRef2.current.rotation.y += 0.01
    torusRef.current.rotation.z += 0.01
    torusRef2.current.rotation.z += 0.01
  })

  const torusGeomatry = useMemo(() => geomatryRef.current, [])
  const torusGeomatry2 = useMemo(() => geomatryRef2.current, [])

  return (
    <>
      <Camera position={[0, 0, 0]} />
      <color args={[0, 0, 0]} attach="background" />
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.2} position={[-30, 10, 950]} />
      <pointLight intensity={0.2} position={[0, -10, 950]} />
      <pointLight intensity={0.2} position={[-30, 0, 950]} />
      <directionalLight position={[2, 0, 5]} shadow-mapSize={1024} castShadow />
      <group position={[0, 0, 0]}>
        <DragonModal />
        <mesh scale={[0.1, 0.1, 0.1]} ref={torusRef} position={[3.5, 0, 1]}>
          <torusKnotGeometry ref={geomatryRef} args={[10, 3, 64, 8, 9, 17]} />
          {/* <meshPhongMaterial color="#55efc4" /> */}
          <meshStandardMaterial map={colorMap} />
          <lineSegments>
            <edgesGeometry attach="geometry" args={[torusGeomatry]} />
            <lineBasicMaterial attach="material" color="#069869" />
          </lineSegments>
        </mesh>
        <mesh scale={[0.1, 0.1, 0.1]} ref={torusRef2} position={[-3.5, 0, 1]} >
          <torusKnotGeometry ref={geomatryRef2} args={[10, 3, 64, 8, 9, 17]} />
          {/* <meshPhongMaterial color="#55efc4" /> */}
          <meshStandardMaterial map={colorMap} />
          <lineSegments>
            <edgesGeometry attach="geometry" args={[torusGeomatry2]} />
            <lineBasicMaterial attach="material" color="#069869" />
          </lineSegments>
        </mesh>
      </group>
      <Environment preset="city" />
    </>
  )
}

export default TorusKnotGeomatry
