import styles from "../assets/scss/components/footer.module.scss";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div id="page_top">
        <a className={styles["footer-scrollUp"]} href="#header">
          <span>TOP</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
