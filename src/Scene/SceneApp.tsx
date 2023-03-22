import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

interface SceneProps {
  children: React.ReactNode
}
const SceneApp = ({ children }: SceneProps) => {
  return (
    <div >
      <Canvas>{children}</Canvas>
    </div>
  )
}

export default SceneApp
