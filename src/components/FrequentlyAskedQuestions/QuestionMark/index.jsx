/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
*/



import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.0109}>
        <mesh geometry={nodes.question_mark__0.geometry} material={nodes.question_mark__0.material} position={[0, -120, -10]} scale={40} rotation={[0, -0.8, -0.1]}/>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
