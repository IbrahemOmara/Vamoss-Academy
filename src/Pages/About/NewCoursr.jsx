import React from "react";
import imgNewCourse1 from "../../assets/imgs/about/aboutNewCourse-1.svg";
import imgNewCourse2 from "../../assets/imgs/about/aboutNewCourse-2.svg";


export default function () {
  return (
    <>
      <section className="new-course bg-grdient pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="img-newCo">
                <img src={imgNewCourse1} alt="new course growth" />
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <p className="fs-2 text-black">Want to stay <span className="fw-bold">informed</span> about new <span className="fw-bold">courses & study?</span></p>
            </div>
            <div className="col-md-3">
                <img src={imgNewCourse2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
