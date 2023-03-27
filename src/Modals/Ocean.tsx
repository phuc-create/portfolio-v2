import React, { useRef, useMemo } from "react"
import { extend, useThree, useLoader, useFrame, Object3DNode } from "@react-three/fiber"
import * as THREE from "three"

import { Water } from "three/examples/jsm/objects/Water.js"

extend({ Water })
declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: Object3DNode<Water, typeof Water>
    }
  }
}

function Ocean() {
  const ref = useRef<Water>(null!)
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(
    THREE.TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  )


  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(5000, 5000), [])
  const config = useMemo(
    () => ({
      textureWidth: 400,
      textureHeight: 400,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: "#f5f6fa",
      waterColor: "#4bcffa",
      distortionScale: 8,
      fog: true,
      format: gl.outputEncoding,
      elevation: 20
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals]
  )
  // useFrame(
  //   (state, delta) => (ref.current.material.uniforms.time.value += delta)
  // )
  useFrame((state, delta) => {
    const material = ref?.current?.material as THREE.ShaderMaterial
    material.uniforms.time.value += delta
  })
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  )
}

export default Ocean
