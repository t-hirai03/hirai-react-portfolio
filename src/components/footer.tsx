import React from "react";
import "../assets/scss/components/footer.scss";
import "../assets/scss/layout.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

function footer() {
  return (
    <footer className="footer">
      <div id="page_top">
        <AnchorLink className="footer-scrollUp" href={"#header"}  offset={() => 0}><span>TOP</span></AnchorLink>
      </div>
    </footer>
  );
}

export default footer;
