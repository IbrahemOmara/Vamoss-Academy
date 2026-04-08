import React, { useState } from "react";

export default function Service({ service }) {
  const [isHovered, setIsHovered] = useState(false);
  const [classHover, setClassHover] = useState("my-service");

  const handleMouseEnter = () => {
    setIsHovered(true);
    setClassHover("my-service");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setClassHover("");
  };
  return (
    <>
      <div
        className={`box-service ${
          service.title === "German" ||
          service.title === "Live Courses"
            ? classHover
            : ""
        }

        `}
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={()=>handleMouseLeave(classHover)}
        // style={{ background: isHovered ? "lightblue" : "transparent" }}
      >
        {service.iconType === "img" ? (
          <div className="icon">
            <img src={service.icon} alt="trading" />
          </div>
        ) : (
          <div className="icon">{service.icon}</div>
        )}

        <h5>{service.title}</h5>
        <p>{service.text}</p>
      </div>
    </>
  );
}
