import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'

const DragonModal = () => {

  const gltf = useLoader(GLTFLoader, "../../public/gltf/scene.gltf")

  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.rotation.x = 0
    gltf.scene.rotation.y = 3.3
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true
        object.receiveShadow = true
        object.material.envMapIntensity = 0.5
      }
    })
  }, [gltf])

  return (
    <primitive object={gltf.scene} position={[0, -0.5, 2]} />
  )
}

export default DragonModal
