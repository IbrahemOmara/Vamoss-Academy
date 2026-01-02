import React from "react";

export default function BoxStudentSay({student}) {
  return (
    <>
      <div className="box-student-say rounded-4 py-4 px-3">
        <div className="head-box-say d-flex justify-content-around">
          <div className="img-say" style={{ height: "80px", width: "80px" }}>
            <img src={student.img} alt="Testimonials Growth" />
          </div>
          <div className="rate-and-title mt-3">
            <i className="fs-small fa-solid fa-star gold-color"></i>
            <i className="fs-small fa-solid fa-star gold-color"></i>
            <i className="fs-small fa-solid fa-star gold-color"></i>
            <i className="fs-small fa-solid fa-star gold-color"></i>
            <i className="fs-small fa-solid fa-star gold-color"></i>
            <div className="title">
              <h5 className="">{student.name}</h5>
            </div>
          </div>
          <div className="quote">
            <i
              className="fa-solid fa-quote-right fa-3x"
              style={{ color: "#D9D6F5" }}
            ></i>
          </div>
        </div>
        <div className="txt-say mt-3">
          <p className="text-muted text-start">
           {student.say}
          </p>
        </div>
      </div>
    </>
  );
}
