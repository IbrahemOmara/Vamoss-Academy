import React from "react";
import "./About.css";
import imgHead from "../../assets/imgs/about/aboutHead-1.svg";
import imgAbout1 from "../../assets/imgs/about/about-1.svg";
import NewSkills from "./NewSkills";
import NewCoursr from "./NewCoursr";
import StartJourny from "./StartJourny";
import StudentSay from "./StudentSay";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="head-about mt-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1>Who We Are </h1>
              </div>
              <div className="col-md-6">
                <img className="" src={imgHead} alt={"about growth"} />
              </div>
            </div>
          </div>
          <div className="more">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <img src={imgAbout1} />
              </div>
              <div className="col-md-6 ">
                <div className="text-about mt-5">
                  <h6
                    className="m-0 bg-light text-info py-1 px-3 mb-3 rounded-4"
                    style={{ width: "fit-content" }}
                  >
                    Get More About Us
                  </h6>
                  <h3>
                    Empowering Students to reach their{" "}
                    <span className="bg-warning px-2 word-rounded">
                      Potential
                    </span>{" "}
                    Goal For Next
                    <br />
                    Level Challenge.
                  </h3>
                  <p className="text-black-50">
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting.
                  </p>
                  <div className="mt-5">
                    <div className="d-flex gap-2 mt-3 align-items-center">
                      <div className="icon-about-txt bg-warning">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="txt">
                        <h5 className="fw-bold">
                          The Most World Class Instructors
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 align-items-center">
                      <div className="icon-about-txt bg-warning">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="txt">
                        <h5 className="fw-bold">Access Your Class anywhere</h5>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 align-items-center">
                      <div className="icon-about-txt bg-warning">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="txt">
                        <h5 className="fw-bold">Flexible Course Plan</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewSkills />
        </div>
        <NewCoursr />
        <StartJourny />
        <StudentSay />
      </section>
    </>
  );
}
