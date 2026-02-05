import { useContext, useEffect, useState } from "react";
import "./Pay.css";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { baseURL } from "../../utils/baseUrl";
import { StoreContext } from "../../context/storeContext";
import BtnLoading from "../BtnLoading/BtnLoading";
import { toast } from "react-toastify";

export default function Pay() {
  const prams = useParams();
  let navigate = useNavigate();
  const { sponsorAttributeId } = useContext(StoreContext);
  const [status, setStatus] = useState(true);
  const [notAllow, setNotAllow] = useState("not-allowed");
  const [notValidToken, setNotValidToken] = useState("d-none");
 const [btnLoading,setBtnLoading] = useState(false);

  console.log(sponsorAttributeId);

  async function CheckTokenStatus(token) {
    await axios
      .get(`${baseURL}/User/CheckTokenStatus?tokenNumber=${token}`)
      .then(({data} ) => {
        setBtnLoading(false);
        console.log(data);
        if (data != false) {
            console.log(status);
          setStatus(true);
          setNotAllow("not-allowed");
          setNotValidToken("d-block");
        } else {
          setNotAllow("");
          setNotValidToken("d-none");
          setStatus(false);
        }
        
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setNotValidToken("d-block");
        setStatus(true);
        setBtnLoading(false)
      });
  }

  function buyPackages(values) {
    axios
      .post(`${baseURL}/User/BuyPackages`, values)
      .then(({ data }) => {
        console.log(data);
        navigate("/pay-success");

      })
      .catch((error) => {
        // console.log(error);
        toast.error(error.response.data)
      });
  }

  let token = useFormik({
    initialValues: {
      tokens: [],
      packagesIds: [],
      customerAttributeId: 0,
      sponsorAttributeId: sponsorAttributeId,
    },
    onSubmit: (values) => {
      const pkgIds = JSON.parse(localStorage.getItem("cart_packages_Growth"));
      values.packagesIds = pkgIds.map((pkg) => {
        return pkg.id;
      });
    //   console.log(pkgIds, values.packagesIds );
      const tokens = [values.tokens];
      delete values.tokens;
      values.tokens = tokens;
      values.customerAttributeId = JSON.parse(
        localStorage.dataAuth
      ).customerAttributeId;
      setBtnLoading(true);
      console.log(values);
      buyPackages(values);
      setBtnLoading(false);
    },
  });

  const checkToken = async (token) => {
    await CheckTokenStatus(token);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="pay" id="pay">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-lg-5 m-auto ">
              <div className="box-pay text-black">
                <div className="head-pay d-flex align-items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.5em"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="currentColor"
                      d="M1888 256q33 0 62 12t51 35t34 51t13 62v1088q0 33-12 62t-35 51t-51 34t-62 13H160q-33 0-62-12t-51-35t-34-51t-13-62V416q0-33 12-62t35-51t51-34t62-13zM160 384q-14 0-23 9t-9 23v224h1792V416q0-14-9-23t-23-9zm1728 1152q14 0 23-9t9-23V768H128v736q0 14 9 23t23 9zm-480-384h256v128h-256z"
                    ></path>
                  </svg>
                  <h2 className="text-main-2 my-fw-bold text-center">
                    Pay by Token
                  </h2>
                </div>
                <form onSubmit={token.handleSubmit}>
                  <div className="row mt-4">
                    <div className="col-12">
                      <h5 className="fw-bold">Total of the Order</h5>
                      <div className="total-ordar border rounded-2 ps-2 py-2 fw-bold">
                        ${prams.toPrice}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div className="token">
                        <label
                          htmlFor="token"
                          className="form-label fs-5 fw-bold"
                        >
                          Token
                        </label>
                        <div className="position-relative">
                          <input
                            onChange={token.handleChange}
                            type="text"
                            className="form-control bg-transparent text-black border border-white py-2 border-0"
                            name="tokens"
                            id="tokens"
                            placeholder=""
                          />
                          <div
                            className={`${notValidToken} alert alert-danger p-1 fs-small mt-2 w-75`}
                            role="alert"
                          >
                            Please enter valid Token
                          </div>
                          <button
                            type="button"
                            onClick={() => checkToken(token.values.tokens)}
                            className="btn text-black  position-absolute end-0 top-0"
                          >
                            <i className="fa-solid fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div className={`button-pay ${notAllow}`}>
                        <button
                          disabled={status||btnLoading}
                          type="submit"
                          className={`w-100 btn fw-bolder fs-5 my-btn text-black`}
                        >
                          {btnLoading? <BtnLoading/>:'Pay'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
