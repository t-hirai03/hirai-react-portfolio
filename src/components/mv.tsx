import styles from "../assets/scss/components/mv.module.scss";
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {

    // 文字のアニメーション
    for (let i = 0; i < 2; i++) {
      const titleElement = document.querySelector(".mv-title_" + i),
        titleTexts = titleElement!.textContent!.split("");

      titleElement!.textContent = "";
      let outputTexts = "";
      titleTexts.forEach(
        (text) =>
          (outputTexts += text === " " ? " " : "<span>" + text + "</span>")
      );
      titleElement!.innerHTML = outputTexts;

      const target = ".mv-title_" + i + " span";
      document.querySelectorAll(target).forEach((el) => {
        gsap.set(el, {
          opacity: 0,
          rotateX: "random(-90,90)",
          rotateY: "random(-90,90)",
          rotateZ: "random(-90,90)",
          x: "random(-200,200)",
          y: "random(-200,200)",
          scale: 10,
        });
      });

      const tl = gsap.timeline();
      tl.to(target, 3, {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        x: 0,
        y: 0,
        ease: "power2.out",
        scale: 1,
        stagger: {
          amount: 1,
          from: "center",
        },
      })
    }
  }, [div]);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // await console.log(container);
  }, []);

  const [mvHeight, setMvHeight] = React.useState("calc(100vh - 4.375rem)");

  function mvHeightResponsive() {
    if(window.innerWidth >= 768){
      setMvHeight("calc(100vh - 4.375rem");
    } else {
      setMvHeight("100vh");
    }
  }
  window.onresize = mvHeightResponsive;

  const options: any = {
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#c311e7", "#b8e986", "#4dc9ff", "#ffd300", "#ff7e79"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 30,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
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
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 125,
          duration: 1,
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    style: {
      width: "100%",
      height: mvHeight,
      position: "unset",
    },
  };

  return (
    <div className={styles['mv']}>
      <div id="particles-js">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        />
      </div>
      <div className={styles['mv-title']}>
        <h1 className='mv-title_0'>HIRAI TAKAHIRO</h1>
        <h1 className='mv-title_1'>PORTFOLIO</h1>
      </div>
      <AnchorLink href={"#about"}  offset={() => 0} className={styles['mv-scrolldown']}><span>Scroll</span></AnchorLink>
    </div>
  );
}

export default App;
