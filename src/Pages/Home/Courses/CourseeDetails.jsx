import React, { useContext } from "react";
import { StoreContext } from "../../../context/storeContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../utils/baseUrl";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading/Loading";

export default function CourseeDetails() {
  const prams = useParams();
//   const { coursesHome } = useContext(StoreContext);
//   console.log(coursesHome);

  const getCourses = () => {
    return axios.get(`${baseURL}/Courses/GetHomeCourses`);
  };

  const { data: courses , isLoading} = useQuery("getCourses", getCourses, {
    // refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
  
  const course = courses?.data?.find((course) => course.courseId == prams.id);

//   console.log(courses);

  const ratingGold = () => {
    let stars = [];
    for (let i = 0; i < course?.rate; i++) {
      stars.push(<i className="fs-small fa-solid fa-star gold-color"></i>);
    }
    return stars;
  };

  const ratingGray = () => {
    let stars = [];
    for (let i = 0; i < 5 - course?.rate; i++) {
      stars.push(<i className="fs-small fa-solid fa-star text-secondary"></i>);
    }
    return stars;
  };

  const getLessons = (id) => {
    return axios.get(`${baseURL}/Videos/GetCourseVideos?courseId=${id}`);
  };

  const { data: lessons ,isError:errorLessons} = useQuery("getLessons", () => getLessons(prams.id), {
    // refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  if (isLoading) {
    return <Loading/>
  }
  console.log(lessons);

  return (
    <>
      <section className="course-details mt-5 pt-5">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-6">
              <div
                className="img-course rounded-4 overflow-hidden"
                style={{ height: "300px" }}
              >
                <img src={course?.coursePhoto} alt={course?.shortDesc} />
              </div>
            </div>
            <div className="col-lg-6">
              <h4>{course?.shortDesc}</h4>
              <p>
                Number of Lessons: <span className="text-black">{course?.numberLecture} Lesson</span>
              </p>
              <p>
                Total Hourse: <span className="text-black">{course?.totalHouers}</span>
              </p>
              <p>
                Teacher: <span className="text-black">{course?.instructors[0].instractorName}</span>
              </p>
              <p>
                Review:{" "}
                <span>
                  {ratingGold().map((star) => {
                    return star;
                  })}
                  {ratingGray().map((star) => {
                    return star;
                  })}
                </span>
              </p>
              <p>
                Price: <span>{course?.price}$</span>
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h4>Course Details</h4>
              <p>{course.fullDesc}</p>
            </div>
            <div className="col-12">
              <h4>What you'll learn in this course:</h4>
              <div className="">
                {
                    
                    errorLessons?lessons?.data.map((lesson) => {
                  return (
                    <div className="lesson d-flex gap-3">
                      <div className="icon-lesson">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="text-lesson">
                        <p>
                         {lesson.lectureName}
                        </p>
                      </div>
                    </div>
                  );
                }):<p>No lessons</p>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
