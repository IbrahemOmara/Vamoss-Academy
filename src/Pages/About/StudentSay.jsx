import React from "react";

import SlideTestimonials from "./SlideTestimonials";

export default function StudentSay() {
  return (
    <>
      <section className="student-say text-center mt-5 py-5">
        <div className="container">
          <h6
            className="mx-auto m-0 bg-light text-info py-1 px-3 mb-3 rounded-4"
            style={{ width: "fit-content" }}
          >
            Our Testimonials
          </h6>
          <h2>
            What Students Think and Say <br /> About SkillGrow{" "}
          </h2>
          <p className="w-50 m-auto text-white-50">
            when known printer took a galley of type scrambl edmake
          </p>
          <SlideTestimonials />
        </div>
      </section>
    </>
  );
}
