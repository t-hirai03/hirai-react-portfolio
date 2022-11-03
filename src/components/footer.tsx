import React from "react";
import styles from "../assets/scss/components/footer.module.scss";
import "../assets/scss/layout.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

function footer() {
  return (
    <footer className={styles['footer']}>
      <div id="page_top">
        <AnchorLink className={styles['footer-scrollUp']} href={"#header"}  offset={() => 0}><span>TOP</span></AnchorLink>
      </div>
    </footer>
  );
}

export default footer;
