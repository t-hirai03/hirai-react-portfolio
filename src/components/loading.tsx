import styles from "../assets/scss/components/loading.module.scss";

function Loading() {
  return (
    <div className={styles["loading"]} role="status" aria-live="polite">
      <span className={styles["loading-spinner"]} />
      <span className={styles["loading-text"]}>送信中…</span>
    </div>
  );
}

export default Loading;
