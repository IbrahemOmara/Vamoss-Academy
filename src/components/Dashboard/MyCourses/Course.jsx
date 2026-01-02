import React, { useState } from "react";
import imgCourse1 from "../../../assets/imgs/courses/course-1.png";
import { VideoIcon } from "../../../components/MyIcons/VideoIcon";
import { Link } from "react-router-dom";
import WordLimit from "../../WordLimet/WordLimet";
export default function Course({ course, colorIconVid }) {
  const ratingGold = () => {
    let stars = [];
    for (let i = 0; i < course.rate; i++) {
      stars.push(
        <i
          className="fs-small fa-solid
       fa-star gold-color"
        ></i>
      );
    }
    return stars;
  };

  const ratingGray = () => {
    let stars = [];
    for (let i = 0; i < 5 - course.rate; i++) {
      stars.push(<i className="fs-small fa-solid fa-star text-secondary"></i>);
    }
    return stars;
  };

  return (
    <>
      <div
        className="card rounded-4 overflow-hidden m-auto"
        style={{ height: "400px", maxWidth: "355px" }}
      >
        <div className="card-img">
          <img
            src={course.coursePhoto || imgCourse1}
            className=""
            alt="course 1 growth"
          />
        </div>
        <div className="card-header bg-transparent border-0 d-flex justify-content-between">
          <div className="num-lesson d-flex gap-1">
            <VideoIcon style={{ fontSize: "1.5rem", color: colorIconVid }} />
            <span>{course.numberLecture}x</span>
            <span>Lesson</span>
          </div>
          <div className="rank">
            {ratingGold().map((star,ind) => {
              return (
                <span key={ind}>{star}</span>
              );
            })}
            {ratingGray().map((star,ind) => {
              return (
                <span key={ind}>{star}</span>
              );
            })}
          </div>
        </div>
        <div className="card-body">
          {/* <p className="card-text text-muted fw-medium">{course.desc}</p> */}
          <WordLimit classes={"text-muted"} text={course.desc} limit={5} />
        </div>
        <div className="card-footer d-flex justify-content-between">
          <div className="instructor d-flex gap-1">
            <div
              className="img-inst rounded-circle overflow-hidden"
              style={{ width: "40px", height: "40px" }}
            >
              <img className="" src={course.instructors[0]?.instructorPhoto} />
            </div>
            <div className="desc-inst">
              <h6 className="m-0 fw-bold fs-small">
                {course.instructors[0]?.instractorName}
              </h6>
              <span className="m-0 fw-bold fs-small text-muted">
                {course.instructors[0]?.instractorTitle}
              </span>
            </div>
          </div>
          <Link
            to={`view-course/${course.id}`}
            className="my-btn rounded-2 fs-small fw-bold d-flex align-items-center justify-content-center"
            style={{ maxWidth: "100px" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
