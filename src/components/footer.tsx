import React from "react";
import "../assets/scss/components/footer.scss";
import "../assets/scss/layout.scss";

function footer() {
  return (
    <footer className="footer">
      <div className="footer-scroll-top-btn">
        <a href="/">
           <i className="material-icons">keyboard_arrow_up</i>
        </a>
      </div>
      <div className="ly_inner footer-copyRight">
        <p>&copy; takahiro hirai all right reserved.</p>
      </div>
    </footer>
  );
}

export default footer;
