import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import ProgressBorder from "../../ProgressBorder/ProgressBorder";
import { baseURL } from "../../../utils/baseUrl";
import { StoreContext } from "../../../context/storeContext";

export default function Profile() {
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("dataAuth")).customerAttributeId
  );
  const filledValue = (50 / 100) * 360; // 360 degress for a full circle
  const remainedValue = 360 - filledValue;
  const [offset, setOffset] = useState(0);
  const { setTitleDashboard } = useContext(StoreContext);

  const data0 = [
    { name: "Remained", value: remainedValue },
    { name: "description", value: filledValue },
  ];

  const getUserDetails = (id) => {
    return axios.get(`${baseURL}/User/GetUserDetails?userId=${id}`);
  };

  const { data: dataUser, isLoading } = useQuery(
    "getUserDetails",
    () => getUserDetails(userId),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  console.log(dataUser);

  useEffect(() => {
    setTitleDashboard("My Profile");
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="my-profile mt-4">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-md-6 rounded-4 overflow-hidden p-0">
              <div className="box-chart px-3 py-2 ">
                <div className="head-box-prof d-flex justify-content-between">
                  <h6 className="my-fw-bold">Growth Member</h6>
                  <div className="control">
                    <button className="btn p-0 border-0">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </div>
                <div className="img-prof mt-4 position-relative d-flex align-items-center justify-content-center">
                  <div className="progressCi">
                    <ProgressBorder percentage={50} />
                  </div>
                  <Avatar
                    sx={{ width: 100, height: 100,backgroundColor:'' }}
                    alt={dataUser?.data.nameEn}
                    src={dataUser?.data.pictureUrl || "k"}
                  />
                  <div className="edit-img-prof ">
                    {/* <input
                      type="file"
                      className=" input-file"
                      name="nationalIdfront"
                      id="nationalIdfront"
                    /> */}
                    <button className="rounded-circle bg-main-color text-main border-0">
                      <i className="fa-solid fa-camera text-main-color"></i>
                    </button>
                  </div>
                </div>

                <div className="desc-profile my-fw-bold mt-5 mb-3">
                  <h5 className="my-fw-bold text-center">
                    {dataUser?.data.nameEn}
                  </h5>
                  <div className="d-flex justify-content-between">
                    <label>ID</label>
                    <p className="m-0">{dataUser?.data.backOfficeId}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Email</label>
                    <p className="m-0">{dataUser?.data.email}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>ID Sponsor</label>
                    <p className="m-0">{dataUser?.data.sponsorId||'No Sponsor'}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Country Name</label>
                    <p className="m-0">{dataUser?.data.countryName}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Start Date</label>
                    <p className="m-0">
                      {/* {dataUser
                        ? format(
                            new Date(dataUser?.data.startDate),
                            "MMM d, y h:m a"
                          )
                        : ""} */}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Status</label>
                    <p className="m-0">{dataUser?.data.role}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Mobile</label>
                    <p className="m-0">{dataUser?.data.mobile}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Whatsapp Mobile</label>
                    <p className="m-0">{dataUser?.data.whatsappmobile}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>National Id</label>
                    <p className="m-0">{dataUser?.data.nationalId || "No National Id"}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="box-prof">
                <div className="head-box-prof d-flex gap-5 justify-content-between">
                  <h6 className="my-fw-bold">Personal Information</h6>
                  <div className="control ms-5">
                    <button className="btn p-0 border-0">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </div>
                <div className="navs-prof mt-4">
                  <ul
                    className="nav nav-tabs justify-content-between border-0"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item " role="presentation">
                      <button
                        className="nav-link active btn p-0"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        Current
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link btn p-0"
                        id="history-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#history-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="history-tab-pane"
                        aria-selected="false"
                      >
                        History
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link btn p-0"
                        id="last-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#last-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="last-tab-pane"
                        aria-selected="false"
                      >
                        Last
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content mt-4" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home-tab-pane"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                      tabIndex={0}
                    >
                      <div className="">
                        <div className="row text-black">
                          <div className="col-12">
                            <div className="progress-t d-flex justify-content-center">
                              <label>
                                <div className="d-flex flex-column align-items-center">
                                  <span>{(filledValue / 360) * 100}%</span>
                                  <span>Completed</span>
                                </div>
                                <progress max="100" value="45"></progress>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="excutive">
                          <h3 className="my-fw-bold text-center m-0">
                            Excutive
                          </h3>
                          <p className="fw-bold text-muted text-center lh-1">
                            You have {(remainedValue / 360) * 100}% left
                          </p>
                        </div>
                        <div className="view-rank border mt-5 pt-5 pb-3">
                          <button className="btn bg-grdient d-block m-auto">
                            View Rank Requirement
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="history-tab-pane"
                      role="tabpanel"
                      aria-labelledby="history-tab"
                      tabIndex={0}
                    >
                      <p className="text-black">history Sooooon</p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="last-tab-pane"
                      role="tabpanel"
                      aria-labelledby="last-tab"
                      tabIndex={0}
                    >
                      <p className="text-black">last Sooooon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="box-prof h-auto "></div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
