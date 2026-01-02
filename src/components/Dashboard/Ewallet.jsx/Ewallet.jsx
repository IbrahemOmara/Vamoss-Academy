import React, { useContext, useEffect, useState } from "react";
import { baseURL } from "../../../utils/baseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import { format } from "date-fns";
import Loading from "../../Loading/Loading";
import { StoreContext } from "../../../context/storeContext";

export default function Ewallet() {

  const [dataUser, setDataUser] = useState(JSON.parse(localStorage.dataAuth));
  const { setTitleDashboard } = useContext(StoreContext);

  const geiBalanceHist = (id) => {
    return axios.get(
      `${baseURL}/BankController/GetBalanceHistory?CustomerAttributeId=${id}`
    );
  };

  const { data: balanceHistory,isLoading:loadingHist } = useQuery(
    "geiBalanceHist",
    () => geiBalanceHist(dataUser.customerAttributeId),
    {
      // refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  // console.log(balanceHistory);


  //get hold amount and total
  const getHoldAmoAndTotalAmo = (userId) => {
    return axios.get(
      `${baseURL}/User/Get_HoldAmount_and_TotalAmount?customerAttributeId=${userId}`
    );
  };

  //hold and total
  const { data: amounts ,isLoading:loadingAmount} = useQuery(
    "getHoldAmoAndTotalAmo",
    () => getHoldAmoAndTotalAmo(dataUser.customerAttributeId),
    {
      // refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  // console.log(amounts);

  useEffect(() => {
    setTitleDashboard("E Wallet");
  }, []);

 if(loadingHist||loadingAmount) return <Loading/>

  return (
    <>
      <section className="ewallet py-4">
        <div className="container">
          <h4>Ewallet Account History</h4>
          <div className="row gy-4">
            <div className="col-lg-6 px-4">
              <div
                style={{ height: "230px" }}
                className="information-ewallet p-3 box-chart mt-4 rounded-2"
              >
                <h5>Inoformation</h5>
                <div className="data">
                  <div className="info d-flex justify-content-between">
                    <p>Name</p>
                    <span>{dataUser.name}</span>
                  </div>
                  <div className="info d-flex justify-content-between">
                    <p>Holding Amount</p>{" "}
                    <span>${amounts?.data.holdAmount}</span>
                  </div>
                  <div className="info d-flex justify-content-between">
                    <p>Available Amount</p>{" "}
                    <span>${amounts?.data.avaliableAmount}</span>
                  </div>
                  <div className="info d-flex justify-content-between">
                    <p>Total Amount</p>{" "}
                    <span>${amounts?.data.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4">
              <div
                style={{ height: "230px" }}
                className="information-ewallet p-3 box-chart mt-4 rounded-2"
              >
                <h5>Wallet History</h5>
                <div className="data">
                  <div className="info d-flex justify-content-between">
                    <p>Hold Amount</p>
                    <span>${amounts?.data.holdAmount}</span>
                  </div>
                  <div className="info d-flex justify-content-between">
                    <p>Issue Date</p>
                    <span>
                      {amounts?.data.from
                        ? format(new Date(amounts.data.from), "MMM d, y h:m a")
                        : "No Date"}
                    </span>
                  </div>
                  <div className="info d-flex justify-content-between">
                    <p>Release Date</p>
                    <span>
                      {amounts?.data.from
                        ? format(new Date(amounts.data.to), "MMM d, y h:m a")
                        : "No Date"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div
                className=" table-responsive rounded-3 box-chart"
                style={{ maxWidth: "" }}
              >
                <table className="table table-borderless table-hover text-center fw-bold">
                  <thead>
                    <tr className="bg-dash">
                      <th scope="col">Global Date</th>
                      {/* <th scope="col">Type</th> */}
                      <th scope="col">Global Desc</th>
                      <th scope="col">Debit</th>
                      <th scope="col">Credit</th>
                      <th scope="col">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {balanceHistory?.data.map((balance) => {
                      return (
                        <tr
                          className="border-bottom fs-small fw-light"
                          key={balance.id}
                        >
                          <td>
                            {balance.transactionDate
                              ? format(
                                  new Date(balance.transactionDate),
                                  "MMM d, y h:m a"
                                )
                              : "No Date"}
                          </td>
                          {/* <td>Adjust</td> */}
                          <td>{balance.description}</td>
                          <td>{balance.debit}</td>
                          <td>{balance.credit}</td>
                          <td>{balance.balance}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
