import React, { useState } from "react";
import BoxNewSkill from "./BoxNewSkill";
import { GraduateIcon } from "../../components/MyIcons/GraduateIcon";
import { CertificateIcon } from "../../components/MyIcons/CertificateIcon";
import { EffectiveICon } from "../../components/MyIcons/EffectiveIcon";

export default function NewSkills() {
  const [sizeIcon, setSizeICon] = useState("2rem");

  const skills = [
    {
      icon: <GraduateIcon style={{ fontSize: sizeIcon }} />,
      text: " Providing comprehensive training on how to effectively analyze financial markets, including both technical and fundamental analysis",
      bgColor: "#F1FDFF",
      bgIcon: "#1BCBE3",
      shadowColor: "#C9E4E9",
      title: "Market Analysis",
    },
    {
      icon: <EffectiveICon style={{ fontSize: sizeIcon }} />,
      text: "Teaching how to effectively manage risks while trading, including position sizing, setting stop-loss orders, and employing risk-reward ratios.",
      bgColor: "#EDEAFF",
      bgIcon: "#5751E1",
      shadowColor: "#C8C1ED",
      title: "Risk Management",
    },
    {
      icon: <CertificateIcon style={{ fontSize: sizeIcon }} />,
      text: " Offering instruction on various trading strategies, such as day trading, swing trading, and trend following",
      bgColor: "#FFF7E2",
      bgIcon: "#FFC224",
      shadowColor: "#EBE0C4",
      title: "Trading Strategies:",
    },
  ];

  return (
    <>
      <section className="new-skills mt-5 py-5 text-center">
        <h6
          className="bg-light text-primary m-auto mb-2 py-2 px-3 rounded-4"
          style={{ width: "fit-content" }}
        >
          What We Offer
        </h6>
        <h2 className="">
          Learn New Skills When And <br /> Where You Like
        </h2>
        <p>when known printer took a galley of type scrambl edmake</p>
        <div className="row mt-4 gy-5">
          {skills.map((skill, ind) => {
            return (
              <div className="col-md-6 col-lg-4" key={ind}>
                <BoxNewSkill skill={skill} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
