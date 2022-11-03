import React from "react";
import styles from "../assets/scss/components/header.module.scss";
import "../assets/scss/layout.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

function header() {
  // ハンバーガーメニューの展開制御する変数
  let isExpand:boolean = false;
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

    if(window.innerWidth <= 768){
      document.getElementById("header-bar")!.classList.toggle(styles['header-bar_active']);
    }
  };

  // 768pxにしたときにheader-bar_activeクラスを削除する
  function reportWindowSize() {
    if(window.innerWidth >= 768){
      document.getElementById("header-bar")!.classList.remove(styles['header-bar_active']);
    } else if(window.innerWidth <= 767 && isExpand === true) {
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

  return (
    <header id="header">
      <div className={styles['header-bar']} id="header-bar">
        {/* 日付 */}
        <div className="ly_inner">
          <p className={styles['header-date']}>
            <span className={styles['header-year']}>{year}.</span>
            <span className={styles['header-month_day']}>{month}.{day}</span>
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
              <AnchorLink href={"#header"}  offset={() => 0}><span>Top</span></AnchorLink>
            </li>
            <li className={styles['header-navMenu-item']} onClick={expandMenu}>
              <a href="http://hirai.website/gallery/"><span>Gallery</span></a>
            </li>
          </ul>
        </div>
        <div id="header-nav_overlay" className={styles['header-overlay']} onClick={expandMenu}></div>
      </nav>
    </header>
  );
}

export default header;
