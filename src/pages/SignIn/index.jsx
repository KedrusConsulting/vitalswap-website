import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import InputField from "../../components/InputField";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

import vsLogo from "../../assets/vitalswap-logo2.svg";
import userImg from "../../assets/user-3.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async (values, { resetForm }, onSubmitProps) => {};

  return (
    <div className="signup">
      <div className="signup__left">
        <div className="signup__content">
          <figure className="signup__vs-logo">
            <img src={vsLogo} alt="Vitalswap logo" />
          </figure>

          <h2 className="signup__title">
            Make payments to merchants across the globe
          </h2>

          <p className="signup__text">
            The hassle to receive payment from Africa ends here. VitalSwap for
            business opens doors to new opportunities for cross border
            transactions between Africa and the world.
          </p>

          <blockquote className="signup__testimonial">
            <p className="signup__quote">
              Amazing experience, my transaction was seamlessly, when I
              initiated a transfer from my wallet my bank wqs creditd in seconds
              kudos.
            </p>

            <cite className="signup__cite">
              <img src={userImg} alt="User avatar" />
              <span>Justin Tochukwu</span>
            </cite>
          </blockquote>
        </div>
      </div>

      <div className="signup__right">
        <div className="signup__group">
          <div className="signup__header">
            <h1>Welcome Back!</h1>
            <p>
              Don't have an account? <Link to="#">Sign Up</Link>
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleSubmit, dirty, isSubmitting }) => (
              <form className="signup__form" onSubmit={handleSubmit}>
                <InputField
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  placeholder="example@example.com"
                  value={values.email}
                  onChange={handleChange}
                />

                <InputField
                  type="password"
                  name="password"
                  id="password"
                  label="Password"
                  placeholder="********"
                  value={values.password}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={!dirty}
                >
                  {isSubmitting ? "Please wait..." : "Login"}
                </button>
              </form>
            )}
          </Formik>

          <p className="signup__forgot">
            Forgot Password? <Link to="#">Recover</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;