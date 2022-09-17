import React from "react";
import "../assets/scss/header.scss";
import "../assets/scss/layout.scss";

function header() {
  // ハンバーガーメニューボタンクリック時の処理
  const expandMenu = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    console.log("expandMenu");
    // let headerBar = document.getElementById("header_bar")!;
    // if (window.pageYOffset === 0) {
    //   headerBar.classList.toggle("header-hide");
    // }

    // ハンバーガーメニューボタンの変更
    document.getElementById("menuTrigger")!.classList.toggle("header-hamburgerMenu_active");
    // ナビゲーション開閉
    document.getElementById("gNav")!.classList.toggle("header-navMenu_active");
  };

  // 日付型取得
  let now = new Date();
  // 年数取得
  let year = now.getFullYear() + "."
  // 月数取得
  let month = now.getMonth() + 1;
  // 日数取得
  let day = now.getDate();

  return (
    <header>
      <div className="header" id="header_bar">
        {/* 日付 */}
        <div className="ly_inner header-inner">
          <p className="header-date">
            <span className="header-year">{year}</span>
            <span className="header-month_day">{month}.{day}</span>
          </p>
        </div>
        <div id="menuTrigger" className="header-hamburgerMenu" onClick={expandMenu}>
          <span></span>
        </div>
      </div>
      <nav id="gNav" className="header-nav">
        <div className="header-navMenu">
          <ul className="header-navMenu-list">
            <li className="header-navMenu-item">
              <a href="/">
                <span>Top</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="overlay" className="header-overlay"></div>
      </nav>
    </header>
  );
}

export default header;
