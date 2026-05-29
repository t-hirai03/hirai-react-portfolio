import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import styles from "../assets/scss/components/mv.module.scss";

const TITLES = ["HIRAI TAKAHIRO", "PORTFOLIO"];

function Mv() {
  const [particlesReady, setParticlesReady] = useState(false);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    initParticlesEngine((engine) => loadSlim(engine)).then(() =>
      setParticlesReady(true)
    );
  }, []);

  useEffect(() => {
    const timelines: gsap.core.Timeline[] = [];

    titleRefs.current.forEach((element, index) => {
      if (!element) return;

      element.innerHTML = TITLES[index]
        .split("")
        .map((char) => (char === " " ? " " : `<span>${char}</span>`))
        .join("");

      const spans = element.querySelectorAll("span");
      gsap.set(spans, {
        opacity: 0,
        rotateX: "random(-90,90)",
        rotateY: "random(-90,90)",
        rotateZ: "random(-90,90)",
        x: "random(-200,200)",
        y: "random(-200,200)",
        scale: 10,
      });

      const timeline = gsap.timeline();
      timeline.to(spans, {
        duration: 3,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        x: 0,
        y: 0,
        scale: 1,
        ease: "power2.out",
        stagger: { amount: 1, from: "center" },
      });
      timelines.push(timeline);
    });

    return () => timelines.forEach((timeline) => timeline.kill());
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: true,
      particles: {
        number: { value: 40, density: { enable: true } },
        color: {
          value: ["#c311e7", "#b8e986", "#4dc9ff", "#ffd300", "#ff7e79"],
        },
        shape: { type: "circle" },
        opacity: { value: 0.9 },
        size: { value: { min: 2, max: 8 } },
        links: {
          enable: true,
          distance: 100,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          straight: false,
          outModes: "bounce",
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 125, duration: 1 },
          push: { quantity: 3 },
        },
      },
    }),
    []
  );

  return (
    <div className={styles["mv"]}>
      <div id="particles-js">
        {particlesReady && <Particles id="tsparticles" options={options} />}
      </div>
      <div className={styles["mv-title"]}>
        {TITLES.map((_, index) => (
          <h1
            key={index}
            ref={(element) => {
              titleRefs.current[index] = element;
            }}
          />
        ))}
      </div>
      <a href="#about" className={styles["mv-scrolldown"]}>
        <span>Scroll</span>
      </a>
    </div>
  );
}

export default Mv;
