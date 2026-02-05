import React, { useContext, useEffect, useState } from "react";
import "./MyWallet.css";
import axios from "axios";
import { format } from "date-fns";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";
import { useQuery } from "react-query";
import { baseURL } from "../../../utils/baseUrl";
import { StoreContext } from "../../../context/storeContext";

export default function MyWallet() {
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.dataAuth).customerAttributeId
  );
  const [balance, setBalance] = useState({});
  const [paid, setPaid] = useState([]);
  const [unPaid, setUnPaid] = useState([]);
  const [totalPriceUnPaid, setTotalPriceUnPaid] = useState([]);
  const [totalPricePaid, setTotalPricePaid] = useState([]);
  const { setTitleDashboard } = useContext(StoreContext);

  async function getYourBalance(id) {
    await axios
      .get(`${baseURL}/User/GetYourBalance?userId=${id}`)
      .then(({ data }) => {
        typeof data === "string" ? setBalance({ remain: 0 }) : setBalance(data);
      })
      .catch((error) => {
        setBalance({ remain: 0 });
        toast.warning("You dont have any balance");
      });
  }

  function requestToken(values) {
    axios
      .post(`${baseURL}/User/RequestToken`, values)
      .then(({ data }) => {
        if (typeof data === "string") {
          setCode(data);
        } else {
          getYourBalance(userId);
          setCode(data.token);
          getUserTokens(values.userId);
          refetch();
        }
      })
      .catch((error) => {
        setCode("You dont have balance");
        toast.error("You dont have balance");
      });
  }

  async function getUserTokens(id) {
    return axios.get(`${baseURL}/User/GetUserTokens?userId=${id}`);
  }

  const {
    data: tokens,
    isLoading,
    refetch,
  } = useQuery("getUserTokens", () => getUserTokens(userId), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  const calcSumTotPricePaid = () => {
    let sum = 0;
    paid?.forEach((token) => {
      sum += token.value;
    });
    setTotalPricePaid(sum);
  };

  const calcSumTotPriceUnPaid = () => {
    let sum = 0;
    unPaid?.forEach((token) => {
      sum += token.value;
    });
    setTotalPriceUnPaid(sum);
  };

  let $requestToken = useFormik({
    initialValues: {
      userId: "",
      tokenValue: "",
    },
    onSubmit: (values) => {
      values.userId = userId;
      requestToken(values);
    },
  });

  let paidTokens ;
  let unpaidTokens;
  const paidAndUnPaid = () => {
    setPaid(paidTokens);
    setUnPaid(unpaidTokens);
    calcSumTotPricePaid();
    calcSumTotPriceUnPaid();
  };

  useEffect(() => {
    
    const id = JSON.parse(localStorage.dataAuth).customerAttributeId;
    setUserId(id);
    getYourBalance(id);
    getUserTokens(id);

    refetch();
    if (typeof tokens?.data !== "string") {
      paidTokens = tokens?.data.filter((token) => token.isUsed);
      unpaidTokens = tokens?.data.filter((token) => !token.isUsed);
      paidAndUnPaid();
    }
    
    setTitleDashboard("My Wallet");

  }, [tokens]);

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="my-wallet" id="my-wallet">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="point-remain box-chart p-3 mt-4 rounded-1 d-flex justify-content-between align-align-items-center ">
                <p className="fs-5 fw-bold m-0">Point Remaining</p>
                <p className="fs-5 fw-bold m-0">
                  {balance.remain ? balance.remain : "0 "}
                  <span> Point</span>
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={$requestToken.handleSubmit} className="mt-5">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="point-request">
                  <label
                    htmlFor="tokenValue"
                    className="form-label text-black my-fw-bold"
                  >
                    Piont Request
                  </label>
                  <select
                    onChange={$requestToken.handleChange}
                    name="tokenValue"
                    className="form-select select-piont py-2"
                    aria-label="Default select example"
                    id="tokenValue"
                  >
                    <option defaultValue>Select Piont</option>
                    {/* <option value="3">3</option> */}
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="410">410</option>
                    <option value="280">280</option>
                    {/*<option value="100">100</option>*/}
                    {/* <option value="1230">1230</option> */}
                  </select>
                </div>
              </div>
              <div className="col-md-4 mt-4 pt-2 ">
                <button
                  type="submit"
                  className="btn bg-grdient py-2 border-0 fw-bold"
                >
                  Request Points
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8">
                <h6 className="fw-bold text-black">Code</h6>
                <div className="show-code border p-2 rounded-3 text-black-50 ">
                  {code}
                </div>
              </div>
            </div>
          </form>

          <div className="show-tokens my-5">
            <ul
              className="nav nav-tabs gap-5 border-0"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item " role="presentation">
                <button
                  className="nav-link active btn p-0"
                  id="unPaid-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#unPaid-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="unPaid-tab-pane"
                  aria-selected="true"
                >
                  Un Paid
                </button>
              </li>
              <li className="nav-item flex-grow-1" role="presentation">
                <button
                  className="nav-link btn p-0"
                  id="paid-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#paid-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="paid-tab-pane"
                  aria-selected="false"
                >
                  Paid
                </button>
              </li>
            </ul>
            <div className="tab-content mt-4" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="unPaid-tab-pane"
                role="tabpanel"
                aria-labelledby="unPaid-tab"
                tabIndex={0}
              >
                <h6 className="my-fw-bold text-black text-end ">
                  Total Price : {totalPriceUnPaid || 0}
                </h6>
                <div className="table-responsive rounded-3 mt-4">
                  <table className="table table-borderless table-hover text-center fw-bold">
                    <thead>
                      <tr className="bg-dash">
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Token</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tokens != "You dont have any tokens" ? (
                        unPaid
                          ?.slice()
                          .reverse()
                          .map((item, index = 0) => {
                            return (
                              <tr
                                // className={`${
                                //   item.isUsed ? "table-danger" : "table-success"
                                // }`}
                                key={index + 1}
                              >
                                {/* <th scope="row">{index + 1}</th> */}
                                <td>
                                  <span> {item.token} </span>
                                </td>
                                <td>
                                  <span>{item.value}</span> $
                                </td>
                                <td>
                                  <span>
                                    {format(
                                      new Date(item.createdDate),
                                      "MMM d, y h:m a"
                                    )}
                                  </span>
                                </td>
                              </tr>
                            );
                          })
                      ) : (
                        <tr className="text-center mt-3 text-black position-absolute start-50">
                          {tokens}
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="paid-tab-pane"
                role="tabpanel"
                aria-labelledby="paid-tab"
                tabIndex={0}
              >
                <h6 className="my-fw-bold text-black text-end">
                  Total Price : {totalPricePaid || 0}
                </h6>
                <div className="table-responsive show-history-piont rounded-3 ">
                  <table className="table table-borderless text-center fw-bold">
                    <thead>
                      <tr className="bg-dash">
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Token</th>
                        <th scope="col">Price</th>
                        <th scope="col">Paid By</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tokens != "You dont have any tokens" ? (
                        paid
                          ?.slice()
                          .reverse()
                          .map((item, index = 0) => {
                            return (
                              <tr
                                // className={`${
                                //   item.isUsed ? "table-danger" : "table-success"
                                // }`}
                                key={index + 1}
                              >
                                {/* <th scope="row">{index + 1}</th> */}
                                <td>
                                  <span> {item.token} </span>
                                </td>
                                <td>
                                  <span>{item.value}</span> $
                                </td>
                                <td>
                                  <span>{item.paidby}</span>
                                </td>
                                <td>
                                  <span>
                                    {format(
                                      new Date(item.createdDate),
                                      "MMM d, y h:m a"
                                    )}
                                  </span>
                                </td>
                              </tr>
                            );
                          })
                      ) : (
                        <tr className="text-center mt-3 text-black position-absolute start-50">
                          {tokens}
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
