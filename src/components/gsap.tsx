import "../style.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
    gsap.registerPlugin(ScrollTrigger);
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(div.current, {
    //   backgroundImage: "linear-gradient(to left, #30CFD0, #330867)",
    //   duration: 5
    scrollTrigger: div.current,
    x: 500, // x軸方向に500px移動する
    rotation: 180, // 180度回転する
    duration: 3, // 3秒間アニメーションする
    // delay: 3, // 3秒後にアニメーションする
    });
  }, [div]);
  return (
    <div ref={div} className="App">
      <h1>文字の色がだんだん変わります</h1>
      <h2>再読込してためしてみてください</h2>
    </div>
  );
}

export default App;