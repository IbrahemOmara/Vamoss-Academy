import { useFormik } from "formik";
import bg from "../../assets/imgs/signup/SignUp.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../../utils/baseUrl";
import BtnLoading from "../../components/BtnLoading/BtnLoading";

export default function ForgetPassword() {
  const [btnLoading, setBtnLoading] = useState(false);

  async function forGetPass(email) {
    await axios
      .get(`${baseURL}/User/ForgetPassword?Email=${email}`)
      .then(({ data }) => {
        console.log("k");
        toast.success("please check your email," + data);
        setBtnLoading(false);
      })
      .catch((error) => {
        setBtnLoading(false);
        console.log(error);
        toast.error(error.response.data);
      });
  }

  const forgetPass = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setBtnLoading(true);
      forGetPass(values.email);
    },
  });

  return (
    <>
      <section className="forget-password sign-up min-vh-100 d-flex align-items-center justify-content-center">
        <div className="bg-sign-up">
          <img src={bg} className="w-100 h-100 object-fit-fill" />
        </div>
        <form onSubmit={forgetPass.handleSubmit} className="w-100">
          <div className="container">
            <div className="content-sign">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-main-2 fw-bold">Forgot Password</h2>
                  <p className="w-75 m-auto text-muted fw-medium lh-1">
                    Enter your email address and we will send a link to reset
                    your password
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={forgetPass.handleChange}
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-3">
                    <button disabled={btnLoading} type="submit" className="btn w-100 my-btn">
                     {
                        btnLoading?<BtnLoading/>:'Send Reset Link'
                     }
                    </button>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <Link
                    className="text-center fw-medium w-100 text-black form-control "
                    to="/auth/sign-in"
                  >
                    Back to login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
