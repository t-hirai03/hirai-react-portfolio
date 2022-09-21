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

import * as THREE from 'three'
import React,{ useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import face from "../assets/image/page/top/face.jpg";

function Item({ url, scale, ...props }: { url: string,scale: any }) {
  // const visible = useRef(false)
  // const ref = useIntersect((isVisible) => (visible.current = isVisible))
  // const { height } = useThree((state) => state.viewport)
  // useFrame((state, delta) => {
  //   ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
  //   ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  // }

  return (
    <group {...props}>
      <Image scale={scale} url={url} />
    </group>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url={face} scale={[w / 3, w / 3, 1]} />
      {/* <Item url={face} scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} /> */}
      {/* <Item url="/2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="/3.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="/4.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="/5.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="/6.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="/7.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="/8.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="/12.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} /> */}
    </Scroll>
  )
}

export const App = () => (
  <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]} flat>
    <color attach="background" args={['#168473']} />
    <ScrollControls damping={6} pages={5} style={{ height: '100vh' }}>
      <Items />
      {/* <Scroll html style={{ width: '100%' }}> */}
      <Scroll html>
        <h1 style={{ position: 'absolute', top: '100vh', right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
        <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
        <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
          her
          <br />
          mes.
        </h1>
      </Scroll>
    </ScrollControls>
  </Canvas>
)


export default App;