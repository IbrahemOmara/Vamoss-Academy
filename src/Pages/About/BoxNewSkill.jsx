import React from "react";
import imgStar from "../../assets/imgs/about/newSkill-1.svg";

export default function BoxNewSkill({ skill }) {
  return (
    <>
      <div
        className={`box-new-skill p-1 ps-4 pt-4`}
        style={{
          boxShadow: `7px 7px 0px 7px ${skill.shadowColor}`,
          backgroundColor: skill.bgColor,
        }}
      >
        <div className="star">
          <img src={imgStar} />
        </div>
        <div className="head-skill d-flex gap-3 align-items-center">
          <div
            className="icon-new-skills icon-about-txt"
            style={{ backgroundColor: skill.bgIcon }}
          >
            {skill.icon}
          </div>
          <div className="title-box-skill">
            <h5 className="text-black">{skill.title}</h5>
          </div>
        </div>
        <div className="body-box-skill">
          <p className="text-muted text-start fw-medium fs-small mt-3">{skill.text}</p>
        </div>
      </div>
    </>
  );
}
