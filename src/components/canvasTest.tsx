import React, { useState, useMemo,useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Image } from "@react-three/drei";
// import { animateScroll as scroll } from "react-scroll";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useSpring, a, config } from "@react-spring/three";
import img from "../assets/image/page/top/face.jpg";

interface PersonProps {
  url: string;
  children?: React.ReactNode; // 👈️ for demo purposes
}

const App = () => {
  const texture = useLoader(THREE.TextureLoader, img);
  const group = useRef();

  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
      style={{
        height: "100vh",
      }}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <mesh>
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      {/* <Image url={img} /> */}
    </Canvas>
    // <Canvas
    //   camera={{
    //     position: [0,0, 1000],
    //     aspect: 960 / 540,
    //   }}
    // >
    //   <mesh>
    //     <sphereGeometry args={[600]} />
    //     <meshStandardMaterial map={texture} />
    //   </mesh>
    //   <directionalLight color="white" position={[1, 1, 1]} />
    // </Canvas>
  );
};

export default App;
