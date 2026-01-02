import React, { useContext, useEffect } from "react";
import OverviewSells from "./OverviewSells/OverviewSells";
import MonthlyChart from "./MonthlyChart/MonthlyChart";
import WeeklyChart from "./WeeklyChart/WeeklyChart";
import AnalysisSells from "./AnalysisSells/AnalysisSells";
import { StoreContext } from "../../../context/storeContext";

export default function MainDashboard() {
  const { setTitleDashboard } = useContext(StoreContext);

  useEffect(() => {
    setTitleDashboard("Dashboard");
  }, []);
  return (
    <>
      <section className="main-dashboard mt-3">
        <h2 className="mb-5 ms-3">Main Dashboard</h2>
        <div className="container-fluid">
          <div className="row gy-5 justify-content-around">
            <div className="col-md-6 col-lg-7 ">
              <div className="box-chart gradient-box">
                <h4 className="title m-3">Direct Sells monthly</h4>
                <div className="d-flex justify-content-center">
                  <MonthlyChart />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ">
              <div className="box-chart gradient-box max-width">
                <h4 className="title m-3">Overview</h4>
                <div className="d-flex justify-content-center">
                  <OverviewSells />
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-5 justify-content-around mt-4">
            <div className="col-md-6 col-lg-7 ">
              <div className="box-chart gradient-box">
                <h4 className="title m-3">Direct Sells Weekly</h4>
                <div className="d-flex justify-content-center">
                  <WeeklyChart />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ">
              <div className="box-chart gradient-box max-width">
                <h4 className="title m-3">Analysis of Direct Sells</h4>
                <div className="d-flex justify-content-center">
                  <AnalysisSells />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
