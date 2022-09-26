import React, { useRef, useEffect } from "react";
import hiraiFaceImage from "../assets/image/page/top/face.jpg";
import gitHubLogo from "../assets/image/page/top/github-icon.svg";
import Charts from "../components/chart";
import Contact from "../components/contact";
import GitHubIcon from "../components/gitHubIcon";
import Mv from "../components/mv";
import "../assets/scss/page/top.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Top() {
  gsap.registerPlugin(ScrollTrigger);
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      ".fadeIn-about",
      {
        opacity: 0,
        x: -100,
        duration: 1,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      ".fadeIn-skill",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      {
        x: 0,
        duration: 1.5,
        opacity: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".skill-section",
          start: "top center",
          end: "center 300px",
        },
      }
    );

    gsap.fromTo(
      ".fadeIn-contact",
      {
        opacity: 0,
        y: 100,
        duration: 1,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".fadeIn-section",
          start: "top center",
          end: "center 300px",
        },
      }
    );
  }, [div]);

  return (
    <div className="top ly_main">
      <section id="mv">
        <Mv />
      </section>
      <section id="about" className="top-section about-section">
        <div className="ly_inner">
          <h2 className="top-contents_title fadeIn-about">About</h2>
          <div className="top-about">
            <div className="top-about_image fadeIn-about">
              <img src={hiraiFaceImage} alt="平井 隆裕" />
            </div>
            <div className="top-about_item fadeIn-about">
              <div className="top-about_wrap">
                <p>平井隆裕 - ひらいたかひろ</p>
                <p className="top-about_icon">
                  <a
                    href="https://github.com/priv-hirai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                    {/* <img src={gitHubLogo} alt="gitHub logo" /> */}
                    {/* <svg
                      width="80"
                      height="80"
                      viewBox="0 0 250 250"
                      style={{ fill: "#fff", color: "#151513", position: "absolute", top: "0", border: "0", right: "0" }} //color: #151513; position: absolute; top: 0; border: 0; right: 0
                      aria-hidden="true"
                    >
                      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                      <path
                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                        fill="currentColor"
                        style={{ "transformOrigin": "130px 106px" }}
                        className="octo-arm"
                      ></path>
                      <path
                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                        fill="currentColor"
                        className="octo-body"
                      ></path>
                    </svg> */}
                  </a>
                </p>
              </div>
              <p className="top-about_text">
                はじめまして。平井と申します。
                <br />
                福井のSIerに入社後、常駐先でSESとして仕様書設計からコーディング/テスト、リリースまでウォーターフォール型のシステム開発を学び、
                Javaを中心に福井県の宇宙産業のシステム開発に携わりました。
                <br />
                3年勤めたのち、現在は、Web制作会社でフロントエンドエンジニアとして従事しています。
                Web制作を通じて、誰かの役に立ちたいと思っています。
              </p>
              <dl className="top-about_dl">
                <dt>生年月日：</dt>
                <dd>1995年9月23日</dd>
              </dl>
              <dl className="top-about_dl">
                <dt>出身地：</dt>
                <dd>福井県福井市</dd>
              </dl>
              <dl className="top-about_dl">
                <dt>趣味：</dt>
                <dd>
                  グルメ巡り
                  <br />
                  スポーツ観戦（バスケ、テニス）
                  <br />
                  ゲーム
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section id="skill" className="top-section skill-section">
        <div className="ly_inner">
          <h2 className="top-contents_title fadeIn-skill">My skill set</h2>
          <div className="fadeIn-skill">
            <p className="top-skill_text">
              業務で身につけたスキルをグラフにまとめました。フロントからバックエンドまで取り組んできました。
              オールラウンドに対応できる点が強みですが、全体的に理解が浅く、専門性の低さを認識しています。今後はフロントエンド系の開発の業務に携わる比率を増やし、
              少しずつ専門性を高めていきたいと考えています。
            </p>
            <p>＊業務で実際に使用した技術のみ掲載しております。</p>
          </div>
          <div className="top-chart fadeIn-skill">
            <div className="top-chart_pc">
              <div className="top-chart_contents">
                <Charts
                  titleLabel={"font-end"}
                  Label01={"HTML/CSS"}
                  data01={3}
                  Label02={"JavaScript"}
                  data02={3}
                  Label03={"jQuery"}
                  data03={3}
                  Label04={"Nuxt.js/Vue.js"}
                  data04={3}
                  Label05={"Wordpress"}
                  data05={2}
                  Label06={""}
                  data06={0}
                  graphBackgroundColor={"rgba(255, 99, 132, 0.2)"}
                  graphBorderColor={"rgb(255, 99, 132)"}
                />
              </div>
              <div className="top-chart_contents">
                <Charts
                  titleLabel={"back-end"}
                  Label01={"Java"}
                  data01={3}
                  Label02={"PostgreSQL"}
                  data02={3}
                  Label03={"Oracle"}
                  data03={1}
                  Label04={""}
                  data04={0}
                  Label05={""}
                  data05={0}
                  Label06={""}
                  data06={0}
                  graphBackgroundColor={"rgba(75, 192, 192, 0.2)"}
                  graphBorderColor={"rgb(75, 192, 192)"}
                />
              </div>
            </div>
            <div className="top-chart_sp">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 80,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="swiper-container"
              >
                <SwiperSlide>
                  <div>
                    <Charts
                      titleLabel={"font-end"}
                      Label01={"HTML/CSS"}
                      data01={3}
                      Label02={"JavaScript"}
                      data02={3}
                      Label03={"jQuery"}
                      data03={3}
                      Label04={"Nuxt.js/Vue.js"}
                      data04={3}
                      Label05={"Wordpress"}
                      data05={2}
                      Label06={""}
                      data06={0}
                      graphBackgroundColor={"rgba(255, 99, 132, 0.2)"}
                      graphBorderColor={"rgb(255, 99, 132)"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <Charts
                      titleLabel={"back-end"}
                      Label01={"Java"}
                      data01={3}
                      Label02={"PostgreSQL"}
                      data02={3}
                      Label03={"Oracle"}
                      data03={1}
                      Label04={""}
                      data04={0}
                      Label05={""}
                      data05={0}
                      Label06={""}
                      data06={0}
                      graphBackgroundColor={"rgba(75, 192, 192, 0.2)"}
                      graphBorderColor={"rgb(75, 192, 192)"}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="fadeIn-skill">
            <p className="top-skill_text">
              チャートの見方としては「1: 軽く使用した程度」、「2:
              実務で数ヶ月以上使用しているがもう少し習熟が必要」、「3:
              実務レベルで自由に駆使できる」という感じです。
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="top-section fadeIn-section">
        <div className="ly_inner">
          <h2 className="top-contents_title fadeIn-contact">Contact me</h2>
          <div className="top-contact fadeIn-contact">
            <p>
              最後までご覧いただきありがとうございました。
              このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
              もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
            </p>
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Top;
