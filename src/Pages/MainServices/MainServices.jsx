import React from "react";
import "./MainServices.css";
import imgHead1 from "../../assets/imgs/MainServices/servicesHead-1.png";
import imgHead2 from "../../assets/imgs/MainServices/servicesHead-2.svg";
import imgHead3 from "../../assets/imgs/MainServices/servicesHead-3.svg";
import tradIcon from "../../assets/imgs/services/trade-icon.png";
import proIcon from "../../assets/imgs/services/pro-icon.png";
import interactiveIcon from "../../assets/imgs/services/interactive-icon.png";
import Service from "./Service";
import { LiveIcon } from "../../components/MyIcons/LiveIcon";
import { OnlineBusiness } from "../../components/MyIcons/OnlineBusiness";
import { EventIcon } from "../../components/MyIcons/EventIcon";
import { LeaderShipIcon } from "../../components/MyIcons/LeadershipIcon";
import { SalesIcon } from "../../components/MyIcons/SalesIcon";
function MainServices() {
  const services1 = [
    {
      icon: tradIcon,
      iconType:'img',
      title: "Live Trading",
      text: "fering a range of courses covering various aspects of trading, including technical analysis, fundamental analysis, risk management.",
    },
    {
      icon: <LiveIcon style={{fontSize:'4rem'}}/>,
      iconType:'svg',
      title: "Live Courses",
      text: "Providing courses on digital marketing, content marketing, social media marketing, SEO, email marketing, and other relevant strategies.",
    },
    {
      icon: <OnlineBusiness style={{fontSize:'4rem'}}/>,
      iconType:'svg',
      title: "Online business",
      text: "Utilizing interactive learning tools such as quizzes, assignments, case studies, and live webinars to enhance engagement and facilitate practical application of concepts.",
    },
  ];

  const services2 = [
    {
      icon: <EventIcon style={{fontSize:'4rem'}}/>,
      iconType:'svg',
      title: "Events",
      text: "Utilizing interactive learning tools such as quizzes,assignments, case studies, and live webinars to enhance engagement and facilitate practical application of concepts.",
    },
    {
      icon: <LeaderShipIcon style={{fontSize:'4rem'}}/>,
      iconType:'svg',
      title: "Leadership training",
      text: "Utilizing interactive learning tools such as quizzes,assignments, case studies, and live webinars to enhance engagement and facilitate practical application of concepts.",
    },
    {
      icon: <SalesIcon style={{fontSize:'4rem'}}/>,
      iconType:'svg',
      title: "After-sales service",
      text: "Utilizing interactive learning tools such as quizzes,assignments, case studies, and live webinars to enhance engagement and facilitate practical application of concepts.",
    },
  ];

  return (
    <>
      <section className="main-services">
        <div className="container pt-5">
          <div className="header position-relative">
            <div className="row mt-5 align-items-center">
              <div className="col-md-6">
                <div className="desc-head">
                  <h3 className="m-0 lh-1">
                    Never Stop{" "}
                    <img className="w-25 pb-3" src={imgHead2} alt="Learning" />
                    <br /> Life Never Stop Teaching
                  </h3>
                  <p className="mt-2 w-75">
                    Every teaching and learning journey is unique Following
                    We'll help guide your way.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-head">
                  <img src={imgHead1} alt="Learing with Growth" />
                </div>
              </div>
            </div>
            <div className="bg-ser">
              <img src={imgHead3} />
            </div>
          </div>
          <div className="services my-5 py-5">
            <h2 className="fs-1 fw-bold text-center mb-5">Our Services</h2>
            <div className="row my-bg gy-4">
              {services1.map((ser) => {
                return (
                  <div className="col-md-4" key={ser.title}>
                    <Service service={ser} />
                  </div>
                );
              })}
            </div>

            <div className="row mt-5 my-bg gy-4">
              {services2.map((ser) => {
                return (
                  <div className="col-md-4" key={ser.title}>
                    <Service service={ser} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainServices;
