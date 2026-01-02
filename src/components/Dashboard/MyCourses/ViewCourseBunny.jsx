/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { baseURL } from "../../../utils/baseUrl";
import imgCourses from "../../../assets/imgs/imgCourses.png";

export default function ViewCourseBunny() {
  // const userId = JSON.parse(localStorage.dataAuth).customerAttributeId;
  const params = useParams();
  const [index, setIndex] = useState(0);
  const [viewVideo, setViewVideo] = useState(false);
  const url = "https://iframe.mediadelivery.net/embed/243905";

  const getCourseDetials = (idCourse) => {
    return axios.get(
      `${baseURL}/BunnyVideo/GetCourseVideos?courseId=${idCourse}`
    );
  };

  const { data: details, isLoading } = useQuery(
    "getCourseDetials",
    () => getCourseDetials(params.id),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="view-course">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-7 col-lg-8">
              <h4>{details?.data.name}</h4>
              {
                <div className="">
                  {viewVideo ? (
                    <div className="video">
                      <div
                        style={{ position: "relative", paddingTop: "56.25%" }}
                      >
                        <iframe
                          src={`${url}/${details?.data[index]?.videoDetails.guId}?autoplay=true`}
                          loading="lazy"
                          style={{
                            border: "none",
                            position: "absolute",
                            top: "0",
                            height: "100%",
                            width: "100%",
                          }}
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowfullscreen="true"
                          ariaAtomic={true}
                          ariaLive="polite"
                          title="video"
                        ></iframe>
                      </div>
                      <p>{details?.data[index]?.lectureName}</p>
                    </div>
                  ) : (
                    <div className="">
                      <div className="video img-course my-shadow border rounded-4 overflow-hidden">
                        <img
                          className="w-100 h-100 object-fit-fill"
                          src={details?.data.photo || imgCourses}
                        />
                      </div>
                      <p>{details?.data.desc}</p>
                    </div>
                  )}
                </div>
              }

              {!viewVideo ? (
                <button
                  onClick={() => {
                    setIndex(0);
                    setViewVideo(true);
                  }}
                  className="btn bg-grdient w-100"
                >
                  Start
                </button>
              ) : (
                ""
              )}
            </div>
            <div
              style={{ maxHeight: "500px" }}
              className="col-md-5 col-lg-4 pt-2 overflow-y-scroll"
            >
              <div className="row plal-list bg-dash rounded py-3">
                {details?.data?.length ? (
                  details?.data.map((video, ind) => {
                    return (
                      <button
                        className="col-12 btn fs-small overflow-hidden"
                        key={video.otp}
                        onClick={() => {
                          setIndex(ind % details?.data?.length);
                          setViewVideo(true);
                        }}
                      >
                        <div className="">
                          <div className="lesson  d-flex mt-2 gap-2 align-items-center">
                            {(index === ind) & viewVideo ? (
                              <i className="fa-solid fa-circle text-main-color"></i>
                            ) : (
                              <i className="fa-regular fa-circle"></i>
                            )}
                            <i
                              className={`fa-regular fa-circle-play  ${
                                (index === ind) & viewVideo
                                  ? "text-main-color"
                                  : ""
                              }`}
                            ></i>
                            <span
                              className={`fw-bold ${
                                (index === ind) & viewVideo
                                  ? "text-main-color"
                                  : ""
                              }`}
                            >
                              {ind + 1} -
                            </span>
                            <p
                              className={` m-0 text-nowrap fs-5 fw-bold ${
                                (index === ind) & viewVideo
                                  ? "text-main-color"
                                  : ""
                              } `}
                            >
                              {video.lectureName.length > 35
                                ? `${video.lectureName.slice(0, 30)}...`
                                : video.lectureName}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <h3>No Lecture</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
