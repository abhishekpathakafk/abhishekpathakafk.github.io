import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import * as React from 'react';
import { useRef, useState } from 'react';
import * as THREE from 'three'
export function Home(style?:React.CSSProperties) {

  

  function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }
  function Bg() {
    const mesh = useRef<THREE.Mesh>(null!)
    useFrame((state, delta) => {
      mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += delta
    })
    return (
      <mesh ref={mesh} scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
    )
  }

  return (
    <div style={style}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <Bg/>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      </div>
  );
}