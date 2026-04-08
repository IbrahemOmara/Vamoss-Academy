import React from "react";
import "./Why.css";
import imgGroup from "../../../assets/imgs/why/lessons.png";
import imgPrivate from "../../../assets/imgs/why/coaching.png";
import bgWhy from "../../../assets/imgs/why/bg-why.png";
import arrow1 from "../../../assets/imgs/Arrow1.png";
import arrow2 from "../../../assets/imgs/Arrow2.png";

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="container  position-relative">
        <h2 className="text-black text-center mb-5">How do you study?</h2>
        <div className="content">
          <div className="row mt-4 gy-5 gy-md-0 text-center" style={{justifyContent:"space-between"}}>
            <div className="col-md-4">
              <div className="box-why mb-5">
                <div className="img-why">
                  <img src={imgGroup} alt="online course" />
                </div>
                <h5 className="text-black mt-3 m-0">Group Courses</h5>
                <span>5-8 students<br></br></span>
                <span>Constant interaction and practice<br></br></span>
                <span>Suitable for those who enjoy learning in a group</span>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="box-why mb-5">
                <div className="img-why">
                  <img src={imgPrivate} alt="trading course" />
                </div>
                <h5 className="text-black mt-3 m-0">Private Sessions</h5>
                <span>One student + Instructor<br></br></span>
                <span>Full focus on your level and goals<br></br></span>
                <span>Faster learning</span>
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
