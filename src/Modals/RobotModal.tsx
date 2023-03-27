import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'
import { useGLTF } from '@react-three/drei'

const RobotModal = () => {

  const gltf = useGLTF("./gltf/pbr_mech_practice.glb")
  const dragonRef = useRef<number>(0.01)
  const dragonPosZRef = useRef<number>(10)
  useEffect(() => {
    gltf.scene.scale.set(2, 2, 2)
    // gltf.scene.rotation.x = 0
    // gltf.scene.rotation.y = 3.3
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true
        object.receiveShadow = true
        object.material.envMapIntensity = 0
        // object.material
      }
    })

  }, [gltf])




  return (
    <primitive object={gltf.scene} />
  )
}

export default RobotModal
