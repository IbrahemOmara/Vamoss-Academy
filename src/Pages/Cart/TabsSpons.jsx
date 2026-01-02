import React from "react";
import './TabsSpons.css';
import SponsorId from "../../components/SponsorId/SponsorId";

export default function TabsSpons() {
  return (
    <>
      <div className="tabs-have-spons">
        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
          <div className="row navs-taps gap-5">
            <div className="col-6 col-md-3 p-0">
              <li className="nav-item ms-0 w-100" role="presentation">
                <button
                  className="nav-link"
                  id="no-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#no-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="no-tab-pane"
                  aria-selected="true"
                >
                  No
                </button>
              </li>
            </div>
            <div className="col-6 col-md-3 p-0">
              <li className="nav-item w-100" role="presentation">
                <button
                  className="nav-link"
                  id="yes-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#yes-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="yes-tab-pane"
                  aria-selected="false"
                >
                  Yes
                </button>
              </li>
            </div>
          </div>
        </ul>
        <div className="tab-content pb-4" id="myTabContent">
          <div
            className="tab-pane fade show"
            id="no-tab-pane"
            role="tabpanel"
            aria-labelledby="no-tab"
            tabIndex="0"
          >
          </div>
          <div
            className="tab-pane fade"
            id="yes-tab-pane"
            role="tabpanel"
            aria-labelledby="yes-tab"
            tabIndex="0"
          >
           <SponsorId />
          </div>
        </div>
      </div>
    </>
  );
}
