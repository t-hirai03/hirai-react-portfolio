import { useEffect, useId, useState } from "react";
import cx from "classnames";
import styles from "../assets/scss/components/header.module.scss";
import weatherIcon from "../assets/image/components/header/weather.svg";

type JmaForecast = {
  timeSeries: {
    areas: { weathers?: string[] }[];
  }[];
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [todayWeather, setTodayWeather] = useState("");
  const navId = useId();

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://www.jma.go.jp/bosai/forecast/data/forecast/180000.json",
          { signal: controller.signal }
        );
        const data = (await response.json()) as JmaForecast[];
        const weather = data[0]?.timeSeries[0]?.areas[0]?.weathers?.[0];
        if (weather) setTodayWeather(weather);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("天気情報の取得に失敗しました", error);
        }
      }
    };

    fetchWeather();
    return () => controller.abort();
  }, []);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const closeMenu = () => setIsOpen(false);

  return (
    <header id="header">
      <div
        className={cx(styles["header-bar"], { [styles["header-bar_active"]]: isOpen })}
        id="header-bar"
      >
        <div className="ly_inner">
          <p className={styles["header-date"]}>
            <span className={styles["header-year"]}>{year}.</span>
            <span className={styles["header-month_day"]}>
              {month}.{day}
            </span>
            <span className={styles["header-weather"]}>
              今日の福井県の天気
              <img src={weatherIcon} className={styles["header-weather_icon"]} alt="" />
              <br />
              {todayWeather}
            </span>
          </p>
        </div>
      </div>
      <button
        type="button"
        className={cx(styles["header-hamburgerMenu"], {
          [styles["header-hamburgerMenu_active"]]: isOpen,
        })}
        aria-label="メニューを開閉する"
        aria-expanded={isOpen}
        aria-controls={navId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
      </button>
      <nav
        id={navId}
        className={cx(styles["header-nav"], {
          [styles["header-navMenu_active"]]: isOpen,
        })}
      >
        <div className={styles["header-navMenu"]}>
          <ul className={styles["header-navMenu-list"]}>
            <li className={styles["header-navMenu-item"]}>
              <a href="#header" onClick={closeMenu}>
                <span>Top</span>
              </a>
            </li>
            <li className={styles["header-navMenu-item"]}>
              <a
                href="https://zenn.dev/hiiiita"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <span>自己研鑽</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={cx(styles["header-overlay"], {
            [styles["header-overlay_active"]]: isOpen,
          })}
          onClick={closeMenu}
        />
      </nav>
    </header>
  );
}

export default Header;
