import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import emailjs from "emailjs-com";
import "../assets/scss/contact.scss";
import ReactModal from "./modal";

type Inputs = {
  name: string;
  email: string;
  comment: string;
};

export const Demo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  // EmailJSでメール送信処理を行う
  const sendEmail: SubmitHandler<Inputs> = (formData) => {
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
          setModalMessage("メールを送信しました。");
          setIsOpen(true);
        },
        (error) => {
          console.log(error.text);
          setModalMessage("メール送信できませんでした。");
          setIsOpen(true);
        }
      );
    reset();
  };

  // モーダル表示、非表示制御フラグ
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // モーダルに表示するメッセージ変数
  const [modalMessage, setModalMessage] = React.useState("");

  return (
    <div>
      <ReactModal
        isModalOpen={modalIsOpen}
        emailMessage={modalMessage}
        closeFunc={() => setIsOpen(false)}
      />
      <form className="contact" onSubmit={handleSubmit(sendEmail)}>
        <div className="contact-input-field">
          <input {...register("name")} placeholder="Name" required />
        </div>
        <div className="contact-input-field">
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
        <div className="contact-input-field">
          <TextareaAutosize
            {...register("comment")}
            placeholder="Comment"
            required
          />
        </div>
        <ErrorMessage errors={errors} name="email" />
        <div className="contact-btn-field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
