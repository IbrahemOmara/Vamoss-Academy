import React from "react";
import "./HomeServices.css";
import tradIcon from "../../../assets/imgs/services/trade-icon.png";
import marketIcon from "../../../assets/imgs/services/market-icon.png";
import proIcon from "../../../assets/imgs/services/pro-icon.png";
import interactiveIcon from "../../../assets/imgs/services/interactive-icon.png";
import arrowLeft from "../../../assets/imgs/services/bigArrowLeft.png";
import arrowRight from "../../../assets/imgs/services/bigArrowRight.png";
import Service from "../../MainServices/Service";

export default function HomeServices() {

  const services = [
    {
      icon: tradIcon,
      iconType:'img',
      title: "Trading Courses",
      text: "fering a range of courses covering various aspects of trading, including technical analysis, fundamental analysis, risk management.",
    },
    {
      icon: marketIcon,
      iconType:'img',
      title: "Marketing Courses",
      text: "Providing courses on digital marketing, content marketing, social media marketing, SEO, email marketing, and other relevant strategies ",
    },
    {
      icon: proIcon,
      iconType:'img',
      title: "Professional Courses",
      text: " Offering certification programs in trading and marketing to validate skills and expertise, enhancing career prospects and credibility in the industry.",
    },
    {
      icon: interactiveIcon,
      iconType:'img',
      title: "Interactive Learning",
      text: "Utilizing interactive learning tools such as quizzes,assignments, case studies, and live webinars to enhance engagement and facilitate practical application of concepts.",
    },
  ];


  return (
    <section className="services mt-5" id="services">
      <div className="container position-relative">
        <h2 className="text-white text-center">Our Services</h2>
        <div className="content my-bg">
          <div className="row gy-3 gy-lg-0 mt-5">
            {services.map((ser) => {
              return (
                <div className="col-md-6 col-lg-3" key={ser.title}>
                  <Service service={ser}/>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-arrows">
          <div className="arrow-left">
            <img src={arrowRight} alt="growth learn" />
          </div>
          <div className="arrow-right">
            <img src={arrowLeft} alt="growth learn" />
          </div>
        </div>
      </div>
    </section>
  );
}
