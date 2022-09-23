// import React from 'react';
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import HeaderSection from "./components/header";
import Top from "./page/top";
// import FooterSection from "./components/footer";
import reportWebVitals from "./reportWebVitals";
import "ress";
import "sanitize.css";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* ヘッダー */}
    <HeaderSection />
    {/* コンテンツ */}
    <div className="index-contents">
      <Canvas
        orthographic
        camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}
        style={{
          height: "100vh",
        }}
      >
        <color attach="background" args={["#fff"]} />
        <ScrollControls
          pages={4} // Each page takes 100% of the height of the canvas
          distance={1} // A factor that increases scroll bar travel (default: 1)
          damping={6} // Friction, higher is faster (default: 4)
          horizontal={false} // Can also scroll horizontally (default: false)
          infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll html>
            <Top />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
