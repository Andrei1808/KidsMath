import React, { useState } from "react";
import s from "../style/pages/Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import signUpnImage from "../assets/images/imagesRegistration/sign-up-image.png";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { userActions } from "../redux/slices/userSlice";

interface IFormInput {
  userEmail: string;
  userPassword: string;
  terms: boolean;
  subscribe: boolean;
}

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({});

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.userEmail, data.userPassword)
      .then(({user}) => {
        console.log(user);
        dispatch(userActions.setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate('/');
      })
      .catch(()=> alert('SignUp component'));
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
        <img src={signUpnImage} alt="sign-up-image" />
      </div>
      <div className={s.signin}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>Sign Up Page</h2>
          <p>Sign up for free to access to in any of our products </p>
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

            <label className={s.termsLabel}>
              <div className={s.checkboxContainer}>
                <input
                  {...register("terms", {
                    required: true,
                  })}
                  type="checkbox"
                  aria-invalid={errors.terms ? "true" : "false"}
                />
                <p className={s.checkboxTitle}>
                  Agree to our <Link to='#'>Terms of use</Link> and <Link to='#'>Privacy Policy</Link>
                </p>
              </div>
              {errors.terms?.type === "required" && (
                <p role="alert" className={s.errorMessage}>
                  Please make sure you have selected this option
                </p>
              )}
            </label>

            <label className={s.termsLabel}>
              <div className={s.checkboxContainer}>
                <input
                  {...register("subscribe", {
                    required: false,
                  })}
                  type="checkbox"
                />
                <p className={s.checkboxTitle}>
                Subscribe to our monthly newsletter
                </p>
              </div>
            </label>

            <div className={s.buttonContainer}>
              <button type="submit">Sign up</button>
              <p>
                Already have an account?
                <Link to="/login">
                  <span>Log in</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
