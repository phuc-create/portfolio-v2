import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'

const DragonModal = () => {

  const gltf = useLoader(GLTFLoader, "./gltf/cyberpunk_dragon_ld34/scene.gltf")
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
        object.material.envMapIntensity = 0.5
      }
    })
    gltf.nodes["keel1_045"].rotation.x += 0.01

  }, [gltf])
  let parents = gltf.scene.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]
  let body = parents
  let group = parents.children
  let arms = parents.children[1].children

  let bodyUpAndDown = 2
  let detectDownWing = false
  useFrame((state, delta) => {
    if (bodyUpAndDown >= 10) {
      bodyUpAndDown *= 0.1
    } else {
      bodyUpAndDown += 0.1
    }
    // wing
    group[1].rotation.y += dragonRef.current * 0.001
    group[4].rotation.y -= dragonRef.current * 0.001

    // tail
    // group[2].rotation.x += Math.random() * 0.001

    // arms
    // arms[0].rotation.y += dragonRef.current * 0.00001 // not sure
    if (dragonRef.current >= 60) {
      dragonRef.current *= -1
    } else {
      dragonRef.current++
    }

    body.position.set(dragonPosZRef.current += detectDownWing ? -0.5 : 0.5, -100, 6)
    if (dragonPosZRef.current >= 61) {
      detectDownWing = true
    } else if (dragonPosZRef.current <= 10) {
      detectDownWing = false
    }
  })

  return (
    <primitive object={gltf.scene} />
  )
}

export default DragonModal
