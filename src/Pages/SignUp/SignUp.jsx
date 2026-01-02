import React, { useEffect, useState } from "react";
import "./SignUp.css";
import signUp from "../../assets/imgs/signup/SignUp.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { baseURL } from "../../utils/baseUrl";
import Loading from "../../components/Loading/Loading";
import WordLimit from "../../components/WordLimet/WordLimet";

export default function SignUp() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errorInSignUp, setErrorInSignUp] = useState("d-none");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearchedSpons, setIsSearchedSpons] = useState(false);
  const [iconView, setIconView] = useState("fa-eye-slash");
  const [togglePassword, setTogglePassword] = useState(true);
  const [type, setType] = useState("password");
  const instructionPass = `
          Contains at least one lowercase letter,        
          Contains at least one uppercase letter,
          Contains at least one digit,
          Contains at least one special character from the provided set,
          Is at least 8 characters long.
  `;

  //send data user to api
  function sendDataToApi(values) {
    setLoading(true);
    axios
      .post(`${baseURL}/User/SignUp`, values)
      .then(({ data }) => {
        setLoading(false);
        navigate("/auth/sign-in");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        const errors = err.response.data;
        setErrorInSignUp("d-block");
        setErrorMessage(errors);
      });
  }

  //form validation using  YUP
  function validationSchema() {
    let schema = new Yup.object({
      name: Yup.string().min(2).max(20).required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
      password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ).required(instructionPass),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must be the same")
        .required(),
    });

    return schema;
  }

  //get data from  form and validate
  let register = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      sendDataToApi(values);
    },
  });

  const viewPassword = () => {
    if (togglePassword) {
      setIconView("fa-eye");
      setType("text");
      setTogglePassword(false);
    } else {
      setIconView("fa-eye-slash");
      setType("password");
      setTogglePassword(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="sign-up min-vh-100" id="sigUp">
      <div className="container">
        <div className="content-sign text-black">
          <Link className="signed-in" to="/auth/sign-in">
            Already a member? <span className="text-bolder">Sign in</span>
          </Link>
          <div className="desc-sign-up ">
            <h2>Welcome</h2>
          </div>
          <form
            aria-disabled
            onSubmit={register.handleSubmit}
            onChange={register.handleChange}
            className="mt-4 m-auto"
          >
            <div className="row justify-content-around">
              <div className={`col-md-9`}>
                <div className="my-input mb-3 text-start">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    onChange={register.handleChange}
                    onBlur={register.handleBlur}
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                  />
                  {register.errors.name && register.touched.name ? (
                    <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">
                      {register.errors.name}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row flex-column align-items-center">
              <div className={`col-md-9`}>
                <div className="my-input mb-3 text-start">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={register.handleChange}
                    onBlur={register.handleBlur}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                  />
                  {register.errors.email && register.touched.email ? (
                    <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">
                      {register.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={`col-md-9`}>
                <div className="my-input mb-3 text-start">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    onChange={register.handleChange}
                    onBlur={register.handleBlur}
                    name="phone"
                    type="text"
                    className="form-control"
                    id="phone"
                  />
                  {register.errors.phone && register.touched.phone ? (
                    <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">
                      {register.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row flex-column align-items-center">
              <div className={`col-md-9`}>
                <div className="my-input mb-3 text-start">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="position-relative">
                    <input
                      onChange={register.handleChange}
                      onBlur={register.handleBlur}
                      name="password"
                      type={type}
                      className="form-control"
                      id="password"
                    />
                    <div
                      onClick={viewPassword}
                      className="cursor-pointer icon-view position-absolute end-0 top-50 translate-middle-y"
                    >
                      <i className={`fa-regular ${iconView} mt-1 me-2`}></i>
                    </div>
                  </div>
                  {register.errors.password && register.touched.password ? (
                    <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">
                      {register.errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={`col-md-9`}>
                <div className="my-input mb-3 text-start">
                  <label htmlFor="rePassword" className="form-label">
                    Repassword
                  </label>
                  <div className="position-relative">
                    <input
                      onChange={register.handleChange}
                      onBlur={register.handleBlur}
                      name="rePassword"
                      type={type}
                      className="form-control"
                      id="rePassword"
                    />
                    <div
                      onClick={viewPassword}
                      className="cursor-pointer icon-view position-absolute end-0 top-50 translate-middle-y"
                    >
                      <i className={`fa-regular ${iconView} mt-1 me-2`}></i>
                    </div>
                  </div>
                  {register.errors.rePassword && register.touched.rePassword ? (
                    <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">
                      {register.errors.rePassword}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={`row justify-content-center`}>
              <div className="col-md-7 mt-3">
                <button
                  type="submit"
                  className={`my-btn btn-sign py-2 m-auto d-block `}
                >
                  Sign Up
                </button>
              </div>
              <div className="col-md-7 mt-2">
                <div
                  className={`${errorInSignUp} alert alert-danger p-2`}
                  role="alert"
                >
                  {/* email already exists */}
                  <WordLimit text={errorMessage} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-sign-up">
        <img src={signUp} alt="sign up learing growth" />
      </div>
    </section>
  );
}
