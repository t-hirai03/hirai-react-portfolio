import "../assets/scss/components/mv.scss";
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      ".mv-leftUp_text",
      2,
      { y: 1000, scale: 0, opacity: 0, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1.5,
        opacity: 1,
        stagger: 0.5,
      }
    );
  }, [div]);

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <div className="mv">
      <div id="particles-js">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
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
              height: "100vh",
            },
          }}
        />
      </div>
      <div className="mv-leftUp">
        <div className="mv-leftUp_text">
          <span>HIRAI TAKAHIRO</span>
        </div>
        <div className="mv-leftUp_text">
          <span>PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}

export default App;
