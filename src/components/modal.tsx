import { useEffect } from "react";
import styles from "../assets/scss/components/modal.module.scss";

type Props = {
  emailMessage: string;
  isModalOpen: boolean;
  closeFunc: () => void;
};

function Modal({ emailMessage, isModalOpen, closeFunc }: Props) {
  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeFunc();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen, closeFunc]);

  if (!isModalOpen) return null;

  return (
    <div className={styles["modal-overlay"]} onClick={closeFunc}>
      <div
        className={styles["modal"]}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles["modal-header"]}>
          <h2 id="modal-title" className={styles["modal-title"]}>
            Contact me
          </h2>
          <button
            type="button"
            className={styles["modal-close"]}
            aria-label="閉じる"
            onClick={closeFunc}
          >
            &times;
          </button>
        </div>
        <p className={styles["modal-body"]}>{emailMessage}</p>
        <div className={styles["modal-footer"]}>
          <button
            type="button"
            className={styles["modal-btn"]}
            onClick={closeFunc}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
