import React, { useContext, useEffect, useState } from "react";
import "./Courses.css";
import Course from "./Course";
import axios from "axios";
import { baseURL } from "../../../utils/baseUrl";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading/Loading";
import { StoreContext } from "../../../context/storeContext";

export default function Courses() {

  const {coursesHome,setCoursesHome} = useContext(StoreContext);

//   const [randomNumber, setRandomNumber] = useState(5);
  const listColors = [
    "#24D198",
    "#00C1FF",
    "#F15568",
    "#FF6905",
    "#7F56D9",
    "#4883FF",
  ];

//   const generateRandomNumber = () => {
//     // Generate a random number between 0 and 100
//     const randomNumber = Math.floor(Math.random() * listColors.length);
//     setRandomNumber(randomNumber);
//   };

  const getCourses = () => {
    return axios.get(`${baseURL}/Courses/GetHomeCourses`);
  };

  const { data: courses , isLoading} = useQuery("getCourses", getCourses, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });


  // useEffect(() => {
  //   setCoursesHome(courses?.data);
  //   console.log(coursesHome);
  // }, [courses]);

  // console.log(courses);

  if(isLoading) return <Loading/>
  return (
    <>
      <section className="courses my-bg">
        <div className="container">
          <h2>
            Our Most <span className="text-main-color">Popular Courses</span>
          </h2>
          <p>
            Let’s join our best classes with our famous instructor and
            institutes
          </p>
          <div className="row mt-5 gy-4 justify-content-center">
            {courses?.data?.map((course, index) => {
              return (
                <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
                  <Course
                    key={index}
                    course={course}
                    colorIconVid={
                      listColors[index%listColors.length]
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
