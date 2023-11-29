import React, { useState } from "react";
import s from "../style/pages/Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import signInImage from "../assets/images/imagesRegistration/sign-in-image.png";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

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

  const [isVisible, setIsVisible] = useState(true);

  const handleMouseDown = () => {
    setIsVisible(false);
  };

  const handleMouseUp = () => {
    setIsVisible(true);
  };

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
          <button className={s.facebookIcon}>
            <FaFacebookSquare />
            <p>Continue With Facebook</p>
          </button>
        </div>
        <div className={s.separator}>
          <p>OR</p>
        </div>
        <div className={s.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <p>User name or email address</p>
              <input
                {...register("userName", { required: true })}
                aria-invalid={errors.userName ? "true" : "false"}
              />
              {errors.userName?.type === "required" && (
                <p role="alert" className={s.errorMessage}>
                  User name(email) is required
                </p>
              )}
            </label>

            <label>
              <div className={s.titleContainer}>
                <p>Password</p>
                <div  className={s.passwordState} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} >
                  {isVisible ? (
                    <span >
                      <BiSolidHide /> <p className={s.stateValue}>Hide</p>
                    </span>
                  ) : (
                    <span>
                      <BiSolidShow />
                      <p className={s.stateValue}>Show</p>
                    </span>
                  )}
                </div>
              </div>

              <input
                {...register("userPassword", {
                  required: true,
                  maxLength: 12,
                  minLength: 6,
                })}
                type={isVisible ? "password" : "text"}
                aria-invalid={errors.userPassword ? "true" : "false"}
              />
              {errors.userPassword?.type === "required" && (
                <p role="alert" className={s.errorMessage}>
                  Password is required
                </p>
              )}
              {errors.userPassword?.type === "maxLength" && (
                <p role="alert" className={s.errorMessage}>
                  Password is too long (maximum 12 characters)
                </p>
              )}
              {errors.userPassword?.type === "minLength" && (
                <p role="alert" className={s.errorMessage}>
                  Password is too short (minimum 6 characters)
                </p>
              )}
            </label>
            <div className={s.buttonContainer}>
              <button type="submit">Sign in</button>
              <p>Don’t have an account? Sign up </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
