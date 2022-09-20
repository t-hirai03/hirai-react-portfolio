import "../style.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function App() {
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(div.current, {
      backgroundImage: "linear-gradient(to left, #30CFD0, #330867)",
      duration: 5
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