import React, { useEffect, useState } from "react";
import s from "../style/pages/Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import signInImage from "../assets/images/imagesRegistration/sign-in-image.png";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../redux/slices/userSlice";
import { useAuth } from "../hooks/useAuth";
import { useAppSelector } from "../hooks/typedHooks";

interface IFormInput {
  userEmail: string;
  userPassword: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { previousUrl } = useAppSelector((state) => state.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({});
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.userEmail, data.userPassword)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          userActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/home");
      })
      .catch(() => alert("Invalid user"));
  };

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
        {!isAuth && previousUrl ? (
          <div className={s.regWarning}>
            You need to be logged in to use the wish list.
          </div>
        ) : (
          ""
        )}
        <div className={s.titleContainer}>
          <h2 className={s.title}>Sign In Page</h2>
        </div>
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
            <label className={s.emailLabel}>
              <p className={s.inputTitle}>Email address</p>
              <input
                {...register("userEmail", { required: true })}
                type="email"
                aria-invalid={errors.userEmail ? "true" : "false"}
              />
              {errors.userEmail?.type === "required" && (
                <p role="alert" className={s.errorMessage}>
                  Email is required
                </p>
              )}
            </label>

            <label className={s.passwordLabel}>
              <div className={s.passwordTitleContainer}>
                <p className={s.inputTitle}>Password</p>
                <div
                  className={s.passwordState}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  {isVisible ? (
                    <span>
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
              <p>
                Don’t have an account?{" "}
                <Link to="/signup">
                  <span>Sign up</span>{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
