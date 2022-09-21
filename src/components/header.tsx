import React from "react";
import "../assets/scss/components/header.scss";
import "../assets/scss/layout.scss";

function header() {
  // ハンバーガーメニューの展開制御する変数
  let isExpand:boolean = false;
  // ハンバーガーメニューボタンクリック時の処理
  const expandMenu = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    // 展開フラグの真偽値を逆転させる
    isExpand = !isExpand;

    // ハンバーガーメニューボタンの変更
    document.getElementById("header-hamburgerMenu")!.classList.toggle("header-hamburgerMenu_active");
    // ナビゲーション開閉
    document.getElementById("header-nav")!.classList.toggle("header-navMenu_active");
    // ナビゲーション開閉
    document.getElementById("header-nav_overlay")!.classList.toggle("header-overlay_active");

    if(window.innerWidth <= 768){
      document.getElementById("header-bar")!.classList.toggle("header-bar_active");
    }
  };

  // 768pxにしたときにheader-bar_activeクラスを削除する
  function reportWindowSize() {
    if(window.innerWidth >= 768){
      document.getElementById("header-bar")!.classList.remove("header-bar_active");
    } else if(window.innerWidth <= 767 && isExpand === true) {
        document.getElementById("header-bar")!.classList.add("header-bar_active");
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

  return (
    <header>
      <div className="header-bar" id="header-bar">
        {/* 日付 */}
        <div className="ly_inner header-inner">
          <p className="header-date">
            <span className="header-year">{year}.</span>
            <span className="header-month_day">{month}.{day}</span>
          </p>
        </div>
      </div>
      <div id="header-hamburgerMenu" className="header-hamburgerMenu" onClick={expandMenu}>
          <span></span>
        </div>
      <nav id="header-nav" className="header-nav">
        <div className="header-navMenu">
          <ul className="header-navMenu-list">
            <li className="header-navMenu-item">
              <a href="#about">
                <span>Top</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="header-nav_overlay" className="header-overlay" onClick={expandMenu}></div>
      </nav>
    </header>
  );
}

export default header;
