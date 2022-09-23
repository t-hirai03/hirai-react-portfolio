// import { useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import { Mesh } from 'three';

// type BoxProps = {
//   position: [x: number, y: number, z: number];
// };

// const Box: React.FC<BoxProps> = (props) => {
//   const mesh = useRef<Mesh>(null!);
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   useFrame(() => (mesh.current.rotation.x += 0.01));

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={() => setActive(!active)}
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   );
// };

// export const App = () => {
//   return (
//     <div style={{ width: '100%', height: '100vh' }}>
//       <Canvas>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Box position={[-1.2, 0, 0]} />
//         <Box position={[1.2, 0, 0]} />
//       </Canvas>
//     </div>
//   );
// };

import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { Mesh } from 'three';

export const App = () => {
  return (
    <Canvas>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <OrbitControls />
      {/* <AsciiRenderer invert /> */}
    </Canvas>
  )
}

function Torusknot(props:any) {
  const ref = useRef<Mesh>(null!);
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1.25}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function AsciiRenderer({ renderIndex = 1, characters = ' .:-+*=%@#', ...options }) {
  // Reactive state
  const { size, gl, scene, camera } = useThree()

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, options)
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.color = 'white'
    effect.domElement.style.backgroundColor = 'black'
    effect.domElement.style.pointerEvents = 'none'
    return effect
  }, [characters, options.invert])

  // Append on mount, remove on unmount
  // useEffect(() => {
  //   gl.domElement.parentNode.appendChild(effect.domElement);
  //   return () => gl.domElement.parentNode.removeChild(effect.domElement)
  // }, [effect])

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  // This component returns nothing, it has no view, it is a purely logical
}



export default App;