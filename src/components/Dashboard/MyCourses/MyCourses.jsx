import React, { useContext, useEffect } from "react";
import "./MyCourses.css";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { baseURL } from "../../../utils/baseUrl";
import Course from "./Course";
import { StoreContext } from "../../../context/storeContext";

export default function MyCourses() {
  const userId = JSON.parse(localStorage.dataAuth).customerAttributeId;
  const { setTitleDashboard } = useContext(StoreContext);

  //   const [randomNumber, setRandomNumber] = useState(5);
  const listColors = [
    "#24D198",
    "#00C1FF",
    "#F15568",
    "#FF6905",
    "#7F56D9",
    "#4883FF",
  ];

  const getCourse = (id) => {
    return axios.get(`${baseURL}/Courses/GetMyCoruses?UserId=${id}`);
  };

  const {
    data: courses,
    isLoading,
    error,
  } = useQuery("courses", () => getCourse(userId), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  // console.log(courses, error);

  useEffect(() => {
    setTitleDashboard("My Courses");
  }, []);

  if (isLoading) return <Loading />;

  

  return error ? (
    <h1 className="text-white text-center my-fw-bold mt-5">
      {error.response.data}
    </h1>
  ) : (
    <section className="courses">
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          {courses?.data.map((course,index) => {
            return (
              <div className="col-md-4" key={index}>
                {/* <Link
                  className="d-block w-100"
                  to={`view-course/${course.id}`}
                  key={course.id}
                >
                  <div className="course-desc rounded">
                    <div className="head-course d-flex justify-content-between position-absolute w-100 p-2">
                      <span className="num-hours text-white bg-grdient p-1 rounded">
                        {course.totalHouers} h
                      </span>
                      <span className="price text-white bg-grdient p-1 rounded">
                        ${course.price}
                      </span>
                    </div>
                    <div className="title-desc-course bg-grdient opacity-75">
                      <p className="my-fw-bold tile-desc text-main-3">
                      
                      </p>
                      <p className="text-desc text-center">{course.desc}</p>
                    </div>
                    <div className="main-title">
                      <h6> {course.name}</h6>
                    </div>
                    <div
                      className="img-course overflow-hidden"
                      style={{ height: "350px" }}
                    >
                      <img
                        src={course.photo}
                        className="w-100 h-100 object-fit-fill"
                      />
                    </div>
                  </div>
                </Link> */}

                <Course
                  key={index}
                  course={course}
                  colorIconVid={listColors[index % listColors.length]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
