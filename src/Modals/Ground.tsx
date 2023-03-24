import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
import React from 'react'
import { Mesh, Vector2 } from 'three'

const Ground = ({ normalScale, blur, depthScale, reflectorOffset, distortion }: {
  blur?: [number, number]
  depthScale?: number
  distortion?: number
  normalScale?: number
  reflectorOffset?: number
}) => {
  const roughness = useTexture('./gltf/coast_sand_rocks_02_rough_2k.png')
  const normal = useTexture('./gltf/coast_sand_rocks_02_nor_gl_2k.png')
  const aoMap = useTexture('./gltf/coast_sand_rocks_02_ao_2k.png')
  const diffuseMap = useTexture('./gltf/coast_sand_rocks_02_diff_2k.jpg')
  const $box = React.useRef<Mesh>(null!)
  const _normalScale = React.useMemo(() => new Vector2(normalScale || 0), [normalScale])
  return (
    <mesh castShadow receiveShadow rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        resolution={1024}
        mirror={0.75}
        mixBlur={10}
        mixStrength={2}
        blur={blur || [0, 0]}
        minDepthThreshold={0.8}
        maxDepthThreshold={1.2}
        depthScale={depthScale || 0}
        depthToBlurRatioBias={0.2}
        distortion={distortion || 0}
        color="#a0a0a0"
        metalness={0.5}
        roughnessMap={roughness}
        normalMap={normal}
        aoMap={aoMap}
        roughness={1}
        normalScale={_normalScale}
        reflectorOffset={reflectorOffset}
        map={diffuseMap}
      />
    </mesh>
  )
}

export default Ground
