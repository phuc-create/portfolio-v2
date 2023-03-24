import React, { RefAttributes, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from 'three'
interface CameraProps {
  position: [x: number, y: number, z: number]
}
const Camera = ({ position, ...props }: CameraProps) => {
  const cameraRef = useRef<PerspectiveCamera>(null!)
  return (
    <>
      <perspectiveCamera position={position} {...props} ref={cameraRef} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} makeDefault target={[0, 0, 0]} camera={cameraRef.current} />
    </>
  )
}

export default Camera
