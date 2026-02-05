import React from "react";
import "./Why.css";
import imgOnline from "../../../assets/imgs/why/online.png";
import imgMarket from "../../../assets/imgs/why/market.png";
import imgTrade from "../../../assets/imgs/why/trade.png";
import bgWhy from "../../../assets/imgs/why/bg-why.png";
import arrow1 from "../../../assets/imgs/Arrow1.png";
import arrow2 from "../../../assets/imgs/Arrow2.png";

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="container  position-relative">
        <h2 className="text-black text-center">Why Vamos Academy</h2>
        <div className="content">
          <div className="row mt-4 gy-5 gy-md-0 text-center">
            <div className="col-md-4">
              <div className="box-why">
                <div className="img-why">
                  <img src={imgOnline} alt="online course" />
                </div>
                <h5 className="text-black  m-0">Online Courses</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-why">
                <div className="img-why">
                  <img src={imgMarket} alt="marketing course" />
                </div>
                <h5 className="text-black  m-0">Marketing Courses</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-why">
                <div className="img-why">
                  <img src={imgTrade} alt="trading course" />
                </div>
                <h5 className="text-black  m-0">Trading Courses</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-arrow-1">
          <img src={arrow1} alt="arrow trading omline courses" />
        </div>
        <div className="bg-arrow-2">
          <img src={arrow2} alt="arrow trading omline courses" />
        </div>
        <div className="bg-why-bottom">
          <img src={bgWhy} alt="Why growth" />
        </div>
      </div>
    </section>
  );
}
