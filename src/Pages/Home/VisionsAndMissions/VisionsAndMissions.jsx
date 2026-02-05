import React from "react";
import "./VisionsAndMissions.css";
import iconVision1 from "../../../assets/imgs/vision/icon-vision1.png";
import iconVision2 from "../../../assets/imgs/vision/icon-vision2.png";
import iconVision3 from "../../../assets/imgs/vision/icon-vision3.png";
import Arrow1 from "../../../assets/imgs/Arrow1.png";
import chart from "../../../assets/imgs/chart.png";

export default function VisionsAndMissions() {
  return (
    <section className="visions-and-missions" id="vision">
      <div className="container position-relative">
        <h2 className="text-black text-center">Visions and Missions</h2>
        <div className="content1 p-4 my-bg mt-5">
          <h3 className="text-black text-uppercase">Our visions</h3>
          <div className="row py-4">
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision1} alt="vision" />
                </div>
                <h5 className="mt-3">Guiding Futures</h5>
                <p>
                  Leading Financial Empowerment: Be the go to platform for
                  trading education, guiding individuals towards financial
                  freedom.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision2} alt="vision" />
                </div>
                <h5 className="mt-3">Empowering Individuals</h5>
                <p>
                  Transforming Futures: Enable individuals to unlock their
                  trading potential, transforming their financial futures.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision3} alt="vision" />
                </div>
                <h5 className="mt-3">Market Leadership</h5>
                <p>
                  Setting Excellence Standards: Continuously evolve to meet
                  market needs, setting the standard for top-tier trading
                  education.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content2 p-4 my-bg mt-5">
          <h3 className="text-black text-uppercase">Our Missions</h3>
          <div className="row py-4">
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision1} alt="vision" />
                </div>
                <h5 className="mt-3">Unlocking Potential</h5>
                <p>
                  Empower Traders: Provide accessible and comprehensive trading
                  courses to empower individuals with the skills needed for
                  success.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision2} alt="vision" />
                </div>
                <h5 className="mt-3">Informed Decision-Making</h5>
                <p>
                  Promote Financial Literacy: Offer high-quality education to
                  enhance financial literacy and informed decision-making in
                  trading.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision3} alt="vision" />
                </div>
                <h5 className="mt-3">Collaborative Growth</h5>
                <p>
                  Build Community: Cultivate a supportive community where
                  traders can learn, collaborate, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-arrow">
          <img src={Arrow1} alt="chart vision" />
        </div>
        <div className="bg-chart">
          <img src={chart} alt="chart vision" />
        </div>
      </div>
    </section>
  );
}
