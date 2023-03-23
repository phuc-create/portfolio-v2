import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

interface SceneProps {
  children: React.ReactNode
}
const SceneApp = ({ children }: SceneProps) => {
  return (
    <div >
      <Canvas camera={{ position: [4, 0.5, 10], fov: 25 }}>{children}</Canvas>
    </div>
  )
}

export default SceneApp
