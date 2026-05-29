import { useId, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import emailjs from "@emailjs/browser";
import styles from "../assets/scss/components/contact.module.scss";
import Modal from "./modal";
import { useLoading } from "../context/LoadingContext";

type ContactForm = {
  name: string;
  email: string;
  comment: string;
};

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Contact() {
  const { showLoading, hideLoading } = useLoading();
  const nameId = useId();
  const emailId = useId();
  const commentId = useId();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const sendEmail: SubmitHandler<ContactForm> = async (formData) => {
    showLoading();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setModalMessage("ありがとうございます。メッセージは送信されました。");
      reset();
    } catch {
      setModalMessage("メール送信できませんでした。時間をおいて再度お試しください。");
    } finally {
      hideLoading();
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <Modal
        isModalOpen={isModalOpen}
        emailMessage={modalMessage}
        closeFunc={() => setIsModalOpen(false)}
      />
      <form className={styles["contact"]} onSubmit={handleSubmit(sendEmail)} noValidate>
        <div className={styles["contact-input-field"]}>
          <label htmlFor={nameId} className={styles["contact-label"]}>
            お名前
          </label>
          <input
            id={nameId}
            placeholder="Name"
            {...register("name", { required: "お名前を入力してください。" })}
          />
          <ErrorMessage errors={errors} name="name" />
        </div>
        <div className={styles["contact-input-field"]}>
          <label htmlFor={emailId} className={styles["contact-label"]}>
            メールアドレス
          </label>
          <input
            id={emailId}
            placeholder="Email"
            {...register("email", {
              required: "メールアドレスを入力してください。",
              maxLength: { value: 60, message: "メールアドレスが長すぎます。" },
              pattern: {
                value: EMAIL_PATTERN,
                message: "メールアドレスの形式が不正です。",
              },
            })}
          />
          <ErrorMessage errors={errors} name="email" />
        </div>
        <div className={styles["contact-input-field"]}>
          <label htmlFor={commentId} className={styles["contact-label"]}>
            コメント
          </label>
          <TextareaAutosize
            id={commentId}
            placeholder="Comment"
            {...register("comment", { required: "コメントを入力してください。" })}
          />
          <ErrorMessage errors={errors} name="comment" />
        </div>
        <div className={styles["contact-btn-field"]}>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
