import React from "react";
import "./HomeServices.css";
import engIcon from "../../../assets/imgs/services/united-kingdom.png";
import gerIcon from "../../../assets/imgs/services/german.png";
import spnIcon from "../../../assets/imgs/services/spanish.png";
import freIcon from "../../../assets/imgs/services/french.png";
import arrowLeft from "../../../assets/imgs/services/bigArrowLeft.png";
import arrowRight from "../../../assets/imgs/services/bigArrowRight.png";
import Service from "../../MainServices/Service";

export default function HomeServices() {

  const services = [
    {
      icon: engIcon,
      iconType:'img',
      title: "English",
      text: "Improve your English for work, call centers, or studies without the fear of speaking.",
    },
    {
      icon: gerIcon,
      iconType:'img',
      title: "German",
      text: "A precise and crucial language for job and study opportunities in Europe. ",
    },
    {
      icon: spnIcon,
      iconType:'img',
      title: "Spanish",
      text: "One of the most in-demand languages ​​in the current job market, with opportunities increasing daily.",
    },
    {
      icon: freIcon,
      iconType:'img',
      title: "French",
      text: "A powerful language for work, study, and travel, with a solid academic foundation.",
    },
  ];


  return (
    <section className="services mt-5" id="services">
      <div className="container position-relative">
        <h2 className="text-black text-center">You Can Learn With Us</h2>
        <p className="text-center">All languages ​​offer the same quality, the same curriculum, and the same level of attention.</p>
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
