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
                    Vamos started out of a genuine passion for language teaching, 
                    not just as a project idea.
                    We began with just the two of us, each teaching the language she loved and had studied. 
                    With time and the support we received from our students, we grew step by step. 
                    Today, Vamos is an online academy offering various language courses. 
                    We have a team of qualified instructors, and we work every day to provide a simple, 
                    understandable, and truly beneficial learning experience.
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
                  <h2 className=" mt-5 fw-bold">Our story</h2>
                  <p className="text-black-50">
                    The beginning was very simple. 
                    One of us started by teaching Spanish, and then the other started teaching French.
                    We were working alone, delivering the courses ourselves and interacting with each student individually.
                    Over time, demand increased, results became apparent, and it became clear that there was a real need for a different teaching method.
                    Now, thank God, we have more than one Instructor in more than one language, especially Spanish and French, 
                    and Vamos is growing and expanding day by day because of you and with you.
                  </p>
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
