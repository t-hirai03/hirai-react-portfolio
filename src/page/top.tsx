import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cx from "classnames";
import hiraiFaceImage from "../assets/image/page/top/face.jpg";
import zennIcon from "../assets/image/page/top/logo-zenn.svg";
import Charts from "../components/chart";
import Contact from "../components/contact";
import GitHubIcon from "../components/gitHubIcon";
import Mv from "../components/mv";
import styles from "../assets/scss/page/top.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/scss/components/swiper.scss";

gsap.registerPlugin(ScrollTrigger);

const frontendChart = {
  title: "front-end",
  labels: ["HTML/CSS(scss)", "JavaScript", "jQuery", "Nuxt.js/Vue.js", "Wordpress"],
  data: [3, 3, 3, 3, 2],
  backgroundColor: "rgba(255, 99, 132, 0.2)",
  borderColor: "rgb(255, 99, 132)",
};

const backendChart = {
  title: "back-end",
  labels: ["Java", "PostgreSQL", "Oracle", "PHP"],
  data: [3, 3, 1, 2],
  backgroundColor: "rgba(75, 192, 192, 0.2)",
  borderColor: "rgb(75, 192, 192)",
};

function Top() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fadeIn-left",
        { opacity: 0, x: -100 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.8,
          scrollTrigger: { trigger: ".about-section", start: "top center" },
        }
      );

      gsap.fromTo(
        ".fadeIn-right",
        { opacity: 0, x: 100 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.8,
          scrollTrigger: { trigger: ".skill-section", start: "top center" },
        }
      );

      gsap.fromTo(
        ".fadeIn-bottom",
        { opacity: 0, y: 100 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.8,
          scrollTrigger: { trigger: ".contact-section", start: "top center" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="top ly_main">
      <section id="mv">
        <Mv />
      </section>

      <section id="about" className={cx(styles["top-section"], "about-section")}>
        <div className="ly_inner">
          <h2 className={cx(styles["top-contents_title"], "fadeIn-left")}>About</h2>
          <div className={styles["top-about"]}>
            <div className={styles["top-about_image"]}>
              <img src={hiraiFaceImage} alt="平井 隆裕" />
            </div>
            <div className={styles["top-about_item"]}>
              <div className={styles["top-about_wrap"]}>
                <p>平井隆裕 - ひらいたかひろ</p>
                <p className={styles["top-about_icon"]}>
                  <a
                    href="https://github.com/priv-hirai"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub プロフィール"
                  >
                    <GitHubIcon />
                  </a>
                </p>
              </div>
              <p className={styles["top-about_text"]}>
                はじめまして。平井と申します。
                <br />
                福井のSIerに入社後、常駐先でSESとして仕様書設計からコーディング/テスト、リリースまでウォーターフォール型のシステム開発を学び、
                Javaを中心に福井県の宇宙産業のシステム開発に携わりました。
                <br />
                3年勤めたのち、現在は、Web制作会社でフロントエンドエンジニアとして従事しています。
                Web制作を通じて、誰かの役に立ちたいと思っています。
              </p>
              <dl className={styles["top-about_dl"]}>
                <dt>生年月日：</dt>
                <dd>1995年9月23日</dd>
              </dl>
              <dl className={styles["top-about_dl"]}>
                <dt>出身地：</dt>
                <dd>福井県福井市</dd>
              </dl>
              <dl className={styles["top-about_dl"]}>
                <dt>趣味：</dt>
                <dd>
                  グルメ巡り
                  <br />
                  スポーツ観戦（バスケ、テニス）
                  <br />
                  ゲーム
                </dd>
              </dl>
              <dl className={styles["top-about_dl"]}>
                <dt>自己研鑽：</dt>
                <dd>
                  <a
                    href="https://zenn.dev/hiiiita"
                    target="_blank"
                    rel="noreferrer"
                    className={styles["top-zenn"]}
                  >
                    <img src={zennIcon} alt="" />
                    <span>Zenn始めました</span>
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="skill" className={cx(styles["top-section"], "skill-section")}>
        <div className="ly_inner">
          <h2 className={cx(styles["top-contents_title"], "fadeIn-right")}>
            My skill set
          </h2>
          <div>
            <p className={styles["top-skill_text"]}>
              業務で身につけたスキルをグラフにまとめました。フロントからバックエンドまで取り組んできました。
              オールラウンドに対応できる点が強みですが、全体的に理解が浅く、専門性の低さを認識しています。今後はフロントエンド系の開発の業務に携わる比率を増やし、
              少しずつ専門性を高めていきたいと考えています。
            </p>
            <p>＊業務で実際に使用した技術のみ掲載しております。</p>
          </div>
          <div className={styles["top-chart"]}>
            <div className={styles["top-chart_pc"]}>
              <div className={styles["top-chart_contents"]}>
                <Charts {...frontendChart} />
              </div>
              <div className={styles["top-chart_contents"]}>
                <Charts {...backendChart} />
              </div>
            </div>
            <div className={styles["top-chart_sp"]}>
              <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 80,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination
                modules={[EffectCoverflow, Pagination]}
                className="swiper-container"
              >
                <SwiperSlide>
                  <Charts {...frontendChart} />
                </SwiperSlide>
                <SwiperSlide>
                  <Charts {...backendChart} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>
            <p className={styles["top-skill_text"]}>
              チャートの見方としては「1: 軽く使用した程度」、「2:
              実務で数ヶ月以上使用しているがもう少し習熟が必要」、「3:
              実務レベルで自由に駆使できる」という感じです。
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className={cx(styles["top-section"], "contact-section")}>
        <div className="ly_inner">
          <h2 className={cx(styles["top-contents_title"], "fadeIn-bottom")}>
            Contact me
          </h2>
          <div className={styles["top-contact"]}>
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
