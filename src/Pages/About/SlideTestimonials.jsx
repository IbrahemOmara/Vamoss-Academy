import React from "react";
import Slider from "react-slick";
import imgStudent1 from "../../assets/imgs/about/student-1.jpg";
import imgStudent2 from "../../assets/imgs/about/student-2.jpg";
import imgStudent3 from "../../assets/imgs/about/student-3.jpg";
import BoxStudentSay from "./BoxStudentSay";

export default function SlideTestimonials() {
  const students = [
    {
      img: imgStudent1,
      name: "Ali naser",
      say: "I gained a lot from the online trading course offered by the company. The educationalmaterials were comprehensive and easy to understand.",
    },

    {
      img: imgStudent2,
      name: "Mohamed zaky",
      say: "The trading course exceeded my expectations. The content was well-structured, and the instructors were engaging.",
    },

    {
      img: imgStudent3,
      name: "Hana Ahmed",
      say: "I highly recommend the trading courses provided by this company. The curriculum covers a wide range of topics, from basic to advanced trading strategies.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slide-testimonials mt-3">
        <div className="">
          <Slider {...settings}>
            {students.map((student) => {
              return (
                <div className="">
                  <BoxStudentSay student={student} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
