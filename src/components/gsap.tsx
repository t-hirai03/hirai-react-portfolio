import "../assets/scss/components/style.scss";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    var tl = gsap.timeline({repaet: -1 });
    tl.to(".mv-radius", {
      // x: 600, // 右方向に600動く
      // rotation: 360, // 開始〜終了までの間で360度回転する
      // duration: 1, // アニメーションは1秒間
      // scrollTrigger: {
      //   trigger: div.current, // 要素".b"がビューポートに入ったときにアニメーション開始
      //   start: "top center", // アニメーション開始位置
      //   end: "top 300px", // アニメーション終了位置
      //   scrub: true, // アニメーションをスクロール位置にリンクさせる
      //   markers: true, // マーカー表示
      // },
      x: "random([20, 30, 50, 80, 90])",
      y:"random(-100, 100, 5)"
    });
    gsap.from(div.current, {
      autoAlpha: 0,
      scale: 0,
      y: 1000,
      duration: 1.5,
      opacity: 0,
    });
  }, [div]);
  return (
    <div className="mv">
      <div ref={div} className="mv-leftUp">
        <div className="mv-leftUp_text">
          <span>HIRAI TAKAHIRO</span>
        </div>
        <div className="mv-leftUp_text">
          <span>PORTFOLIO</span>
        </div>
      </div>
      <div className="mv-radius"></div>
    </div>
  );
}

export default App;
