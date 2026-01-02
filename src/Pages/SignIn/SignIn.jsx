import "./SignIn.css";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/imgs/signup/SignUp.png";
import { baseURL } from "../../utils/baseUrl";
import Loading from "../../components/Loading/Loading";
import BtnLoading from "../../components/BtnLoading/BtnLoading";

export default function SignIn() {
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [iconView, setIconView] = useState("fa-eye-slash");
  const [togglePassword, setTogglePassword] = useState(true);
  const [type, setType] = useState("password");
  const [showInvalid, setShowInvalid] = useState("d-none");
  const [invalid, setInvalid] = useState([]);
  let navigate = useNavigate();

  function sendDataToApi(values) {
    axios
      .post(`${baseURL}/User/authenticate`, values)
      .then(({ data }) => {
        localStorage.setItem("dataAuth", JSON.stringify(data));
        if (data.role == "Admin" || data.role == "Active") {
          navigate("/dashboard/main-dashboard");
        } else if (data.role == "Inactive") {
          navigate("/home");
        } else {
          navigate("/home");
        }
        setBtnLoading(false);
      })
      .catch((error) => {
        setBtnLoading(false)
        setShowInvalid("d-block");
        setInvalid(error.response.data.message);
      });
  }

  let login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const valuesAuth = {
        username: values.email,
        password: values.password,
      };
      setBtnLoading(true);
      sendDataToApi(valuesAuth);
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
    localStorage.clear();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section
        className="sign-in min-vh-100 d-flex justify-content-center align-items-center"
        id="sigIn"
      >
        <div className="container">
          <div className="content-sign text-black">
            <div className="desc-sign-up">
              <h2>Welcome Back</h2>
              <p className="text-muted">
                At Growth Academey, Community is our cornerstone. Through
                expert-led courses in trading and marketing, we empower
                individuals to thrive
              </p>
            </div>
            <Link className="signed-in" to="/auth/sign-up">
              Create new account: <span className="text-bolder">Sign Up</span>
            </Link>
            <form onSubmit={login.handleSubmit} className="">
              <div className="row mt-4 justify-content-center ">
                <div className="col-10 col-lg-7">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={login.handleChange}
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-10 col-lg-7">
                  <div className="mb-1">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        onChange={login.handleChange}
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
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="rememberPass"
                        id="rememberPass"
                      />
                      <label
                        htmlFor="rememberPass"
                        className="form-check-label fs-v-small"
                      >
                        Remember
                      </label>
                    </div>
                    <div className="forget-pass">
                      <Link
                        className="text-decoration-none text-black fs-v-small border"
                        to="/auth/forget-password"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-1">
                  <button
                    disabled={btnLoading}
                    type="submit"
                    className={`my-btn btn-sign py-2 m-auto d-block `}
                  >
                    {btnLoading ? <BtnLoading /> : "Sign In"}
                  </button>
                </div>
                <div className="col-md-10 mt-1">
                  <div
                    className={`${showInvalid} alert alert-danger p-1 fs-small fw-bold`}
                    role="alert"
                  >
                    {invalid}
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
    </>
  );
}
