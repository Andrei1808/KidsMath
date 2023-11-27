import React from "react";
import s from "../style/pages/Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import signInImage from '../assets/images/imagesRegistration/sign-in-image.png'

interface IFormInput {
  userName: number | string;
  userPassword: number | string;
}

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({});
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img src={signInImage} alt="sign-in-image" />
      </div>
      <div className={s.signin}>
        <h2 className={s.title}>Sign In Page</h2>
        <div className={s.socialEnter}>
          <button>
            <FcGoogle />
            <p>Continue With Google</p>
          </button>
        </div>
        <div className={s.separator}>
          <p>OR</p>
        </div>
        <div className={s.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>User name or email address</label>
            <input
              {...register("userName", { required: true })}
              aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.userName?.type === "required" && (
              <p role="alert">User name(email) is required</p>
            )}

            <label>Password</label>
            <input
              {...register("userPassword", {
                required: true,
                maxLength: 12,
                minLength: 6,
              })}
              type="password"
              aria-invalid={errors.userPassword ? "true" : "false"}
            />
            {errors.userPassword?.type === "required" && (
              <p role="alert">Password is required</p>
            )}
            {errors.userPassword?.type === "maxLength" && (
              <p role="alert">Password is too long (maximum 12 characters)</p>
            )}
            {errors.userPassword?.type === "minLength" && (
              <p role="alert">Password is too short (minimum 6 characters)</p>
            )}
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
