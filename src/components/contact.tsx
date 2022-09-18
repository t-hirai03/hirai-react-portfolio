import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "../assets/scss/contact.scss";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="contact" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-input-field">
        <input {...register("name")} placeholder="Name" required />
        {/* <label>Name</label> */}
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
        {/* <label>Email</label> */}
      </div>
      <div className="contact-input-field">
        <TextareaAutosize
          {...register("comment")}
          placeholder="Comment"
          required
        />
        {/* <label>Comment</label> */}
      </div>
      <ErrorMessage errors={errors} name="email" />
      <div className="contact-btn-field">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Demo;
