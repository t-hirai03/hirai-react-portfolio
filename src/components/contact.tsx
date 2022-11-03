import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import emailjs from "emailjs-com";
import styles from "../assets/scss/components/contact.module.scss";
import Modal from "./modal";
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../store/reducer'

type Inputs = {
  name: string;
  email: string;
  comment: string;
};

export const Demo = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  // EmailJSでメール送信処理を行う
  const sendEmail: SubmitHandler<Inputs> = (formData) => {
    openLoading();
    emailjs
      .send(
        "service_q33y4rh",
        "template_96aqcml",
        formData,
        "rawkfONLc6juf6E_5"
      )
      .then(
        (result) => {
          console.log(result.text);
          // モーダルに表示するメッセージ
          setModalMessage("ありがとうございます。メッセージは送信されました。");
          // モーダル表示
          setIsOpen(true);
          // ローディング解除
          closeLoading();
        },
        (error) => {
          console.log(error.text);
          // モーダルに表示するメッセージ
          setModalMessage("メール送信できませんでした。");
          // モーダル表示
          setIsOpen(true);
          // ローディング解除
          closeLoading();
        }
      );
    reset();
  };

  // モーダル表示、非表示制御フラグ
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // モーダルに表示するメッセージ変数
  const [modalMessage, setModalMessage] = React.useState("");

  const openLoading = () => {
    dispatch(increment(React.useState))
  }

  const closeLoading = () => {
    dispatch(decrement(React.useState))
  }

  return (
    <div>
      <Modal
        isModalOpen={modalIsOpen}
        emailMessage={modalMessage}
        closeFunc={() => setIsOpen(false)}
      />
      <form className={styles['contact']} onSubmit={handleSubmit(sendEmail)}>
        <div className={styles['contact-input-field']}>
          <input {...register("name")} placeholder="Name" required />
        </div>
        <div className={styles['contact-input-field']}>
          <input
            {...register("email", {
              required: true,
              maxLength: 60,
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "メールアドレスの形式が不正です。",
              },
            })}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles['contact-input-field']} >
          <TextareaAutosize
            {...register("comment")}
            placeholder="Comment"
            required
          />
        </div>
        <ErrorMessage errors={errors} name="email" />
        <div className={styles['contact-input-field']}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
