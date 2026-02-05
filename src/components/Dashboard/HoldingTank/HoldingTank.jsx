import axios from "axios";
import React, { useContext, useEffect } from "react";
import "./HoldingTank.css";
import Loading from "../../Loading/Loading";
import { baseURL } from "../../../utils/baseUrl";
import { useQuery } from "react-query";
import PopUpFormAddP from "./PopUpFormAddP";
import { StoreContext } from "../../../context/storeContext";

export default function HoldingTank() {
  const referId = JSON.parse(localStorage.dataAuth).referId;
  const { setTitleDashboard } = useContext(StoreContext);

  const getAllHoldingTank = (id) => {
    return axios.get(`${baseURL}/User/GetAllHoldingTank?sponsorId=${id}`);
  };

  const { data: tanks, isLoading } = useQuery(
    "getAllHoldingTank",
    () => getAllHoldingTank(referId),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  // console.log(tanks);

  useEffect(() => {
    setTitleDashboard("My Team");
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <section className="holding-tank" id="HoldingTank">
        <h2 className="mb-3 ms-3">My Team</h2>
        <div className="container">
          <div className="scroll-x rounded-3  ">
            <table className="table table-borderless ">
              <thead className="">
                <tr>
                  <th width="25%">Name</th>
                  <th width="25%">Email</th>
                  <th width="25%">ID</th>
                  <th width="25%">Status</th>
                </tr>
              </thead>
              <tbody>
                {tanks?.data.map((item) => {
                  return !item.hasParent ? (
                    <tr key={item.customerAttributeId} className="pt-1">
                      <td width="25%" className=" ">
                        <div className="icon">
                          <i className="fa-solid fa-user text-main"></i>
                        </div>
                        <div className="">
                          <p className="m-0">{item.name}</p>
                        </div>
                      </td>
                      <td width="25%">
                        <div className="">
                          <p className="m-0">{item.email}</p>
                        </div>
                      </td>
                      <td width="25%">
                        <div className="">
                          <p className="m-0 fw-bolder">{item.backOfficeId}</p>
                        </div>
                      </td>
                      <td width="25%">
                        <div className="text-main fs-6 w-100">
                          <div className="d-flex align-items-center">
                            {item.status === "Active" && !item.hasParent ? (
                              <button
                                type="button"
                                className="my-bg-success fw-bold border-0 rounded py-2 w-100 text-black d-flex gap-2 align-items-center "
                              >
                                <i className={`fa-solid fa-chevron-right`}></i>
                                <p className="m-0">
                                  {item.status}
                                  {/* <PopUpFormAddP
                                    childId={item.customerAttributeId}
                                    text={item.status}
                                  /> */}
                                </p>
                              </button>
                            ) : (
                              <p className="my-bg-danger w-100 p-2 rounded m-0">
                                {item.status}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    ""
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
