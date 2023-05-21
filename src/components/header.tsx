import React from "react";
import styles from "../assets/scss/components/header.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import weatherIcon from "../assets/image/components/header/weather.svg";

function Header() {
  // ハンバーガーメニューの展開制御する変数
  let isExpand: boolean = false;
  // ハンバーガーメニューボタンクリック時の処理
  const expandMenu = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLLIElement, MouseEvent>
  ) => {
    // 展開フラグの真偽値を逆転させる
    isExpand = !isExpand;

    // ハンバーガーメニューボタンの変更
    document.getElementById("header-hamburgerMenu")!.classList.toggle(styles['header-hamburgerMenu_active']);
    // ナビゲーション開閉
    document.getElementById("header-nav")!.classList.toggle(styles['header-navMenu_active']);
    // ナビゲーション開閉
    document.getElementById("header-nav_overlay")!.classList.toggle(styles['header-overlay_active']);

    if (window.innerWidth <= 768) {
      document.getElementById("header-bar")!.classList.toggle(styles['header-bar_active']);
    }
  };

  // 768pxにしたときにheader-bar_activeクラスを削除する
  function reportWindowSize() {
    if (window.innerWidth >= 768) {
      document.getElementById("header-bar")!.classList.remove(styles['header-bar_active']);
    } else if (window.innerWidth <= 767 && isExpand === true) {
      document.getElementById("header-bar")!.classList.add(styles['header-bar_active']);
    }
  }
  window.onresize = reportWindowSize;

  // 日付型取得
  let now = new Date();
  // 年数取得
  let year = now.getFullYear();
  // 月数取得
  let month = now.getMonth() + 1;
  // 日数取得
  let day = now.getDate();

  // 天気情報を格納するリスト
  let fukuiWeather = null;
  // 今日の天気情報を表示する変数
  const [todayFukuiWeather, setTodayFukuiWeather] = React.useState("");

  // 気象庁のAPIから今日の福井県の天気情報を取得する。
  async function getWeather() {
    await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/180000.json')
      .then((response) => {
        // 非同期処理が成功した場合
        return response.json();
      })
      .then(function (weather) {
        // 福井の天気情報を取得する
        fukuiWeather = weather[0].timeSeries[0].areas[0];
        // 今日の福井の天気を取得する
        setTodayFukuiWeather(fukuiWeather.weathers[0]);
      })
      .catch((error) => {
        // 非同期処理が失敗した場合
        console.log('失敗 : ' + error)
      });
  }
  getWeather();

  return (
    <header id="header">
      <div className={styles['header-bar']} id="header-bar">
        {/* 日付 */}
        <div className="ly_inner">
          <p className={styles['header-date']}>
            <span className={styles['header-year']}>{year}.</span>
            <span className={styles['header-month_day']}>{month}.{day}</span>
            <span className={styles['header-weather']}>今日の福井県の天気<img src={weatherIcon} className={styles['header-weather_icon']} /><br />{todayFukuiWeather}</span>
          </p>
        </div>
      </div>
      <div id="header-hamburgerMenu" className={styles['header-hamburgerMenu']} onClick={expandMenu}>
        <span></span>
      </div>
      <nav id="header-nav" className={styles['header-nav']}>
        <div className={styles['header-navMenu']} >
          <ul className={styles['header-navMenu-list']}>
            <li className={styles['header-navMenu-item']} onClick={expandMenu}>
              <AnchorLink href={"#header"} offset={() => 0}><span>Top</span></AnchorLink>
            </li>
            <li className={styles['header-navMenu-item']} onClick={expandMenu}>
              <a href="https://zenn.dev/hiiiita" target="_blank" rel="noreferrer"><span>自己研鑽</span></a>
            </li>
          </ul>
        </div>
        <div id="header-nav_overlay" className={styles['header-overlay']} onClick={expandMenu}></div>
      </nav>
    </header>
  );
}

export default Header;
