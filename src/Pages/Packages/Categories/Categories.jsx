import React from "react";
import "./Categories.css";
import Loading from "../../../components/Loading/Loading";
import Package from "../Package/Package";
import { useQuery } from "react-query";
import { baseURL } from "../../../utils/baseUrl";
import axios from "axios";
export default function Categories() {
  const getAllPackages = () => {
    return axios.get(`${baseURL}/Admin/GetAllPackages`);
  };

  const {
    data: pkgs,
    isError,
    isLoading,
  } = useQuery("getAllPackages", getAllPackages, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  console.log(pkgs?.data, isLoading);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="nav-categories mt-4 ">
        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
          <div className="row navs-taps">
            <div className="col-6 col-md-3">
              <li className="nav-item ms-0 w-100" role="presentation">
                <button
                  className="nav-link active "
                  id="all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#all-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="all-tab-pane"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
            </div>
            <div className="col-6 col-md-3">
              <li className="nav-item w-100" role="presentation">
                <button
                  className="nav-link"
                  id="trade-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#trade-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="trade-tab-pane"
                  aria-selected="false"
                >
                  Trading Courses
                </button>
              </li>
            </div>
            <div className="col-6 col-md-3">
              <li className="nav-item w-100" role="presentation">
                <button
                  className="nav-link"
                  id="market-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#market-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="market-tab-pane"
                  aria-selected="false"
                >
                  Marketing Courses
                </button>
              </li>
            </div>
            <div className="col-6 col-md-3">
              <li className="nav-item w-100" role="presentation">
                <button
                  className="nav-link"
                  id="offline-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#offline-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="offline-tab-pane"
                  aria-selected="false"
                >
                  Offline Courses
                </button>
              </li>
            </div>
          </div>
        </ul>
        <div className="tab-content mt-4" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="all-tab-pane"
            role="tabpanel"
            aria-labelledby="all-tab"
            tabIndex="0"
          >
            <div className="row mt-3 gy-3">
              {pkgs?.data === "Not found any packages"
                ? "Not found any packages"
                : pkgs?.data.map((pkg) => {
                    return pkg.published ? (
                      <div className="col-md-6 col-lg-4" key={pkg.id}>
                        <Package pkg={pkg} />
                      </div>
                    ) : (
                      ""
                    );
                  })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="trade-tab-pane"
            role="tabpanel"
            aria-labelledby="trade-tab"
            tabIndex="0"
          >
            <div className="row mt-3 gy-3">
              {/* {
                      pkgs?.data.map(pkg =>{
                        return (
                              <div className="col-md-6 col-lg-4"  key={pkg.id}>
                                <Package pkg = {pkg} />
                              </div>
                        )
                      })
                  } */}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="market-tab-pane"
            role="tabpanel"
            aria-labelledby="market-tab"
            tabIndex="0"
          ></div>
          <div
            className="tab-pane fade"
            id="offline-tab-pane"
            role="tabpanel"
            aria-labelledby="offline-tab"
            tabIndex="0"
          >
            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  );
}
