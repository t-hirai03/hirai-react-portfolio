import React from "react";
import dogIcon from '../assets/image/top/dog_icon.png';
import scroll_down from '../assets/image/top/scroll_down.svg';
import "../assets/scss/top.scss";

function top() {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    console.log("確認");
  };

  return (
    <div className="top ly_main" onClick={handleClick}>
      <section className="top-mv">
        <div className="top-mv_cloud01"></div>
        <div className="top-mv_cloud02"></div>
        <div className="top-mv_triangle"></div>
        <div className="top-mv_bar fadeIn">
          <h1>
            ポートフォリオ
            <br />
            平井隆裕
          </h1>
        </div>
        <div className="top-mv_dog fadeIn">
          <img src={dogIcon} alt="dogIcon" />
        </div>
        <div className="top-mv_underArea">
          <a href="#profile" className="top-mv_scrollDown">
            <img src={scroll_down} className="fadeIn" alt="scroll_down" />
          </a>
        </div>
      </section>
      {/* <div className="top-header">
        <img src={logo} className="top-logo" alt="logo" />
        <p>
          Edit <code>src/top.tsx</code> and save to reload.
        </p>
        <a
          className="top-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div> */}
    </div>
  );
}

export default top;
