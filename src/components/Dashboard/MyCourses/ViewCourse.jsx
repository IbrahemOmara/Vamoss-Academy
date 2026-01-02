import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { baseURL } from "../../../utils/baseUrl";

export default function ViewCourse() {
  const userId = JSON.parse(localStorage.dataAuth).customerAttributeId;
  const params = useParams();
  const [index, setIndex] = useState(0);
  const [viewVideo, setViewVideo] = useState(false);
  const url = "https://player.vdocipher.com/v2";

  const getCourseDetials = (idCourse, userId) => {
    return axios.get(
      `${baseURL}/Courses/GetCourseDetails?courseId=${idCourse}&userId=${userId}`
    );
  };

  const { data: details } = useQuery(
    "getCourseDetials",
    () => getCourseDetials(params.id, userId),
    {
      // refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  const getVideos = (idCourse) => {
    return axios.get(`${baseURL}/Videos/GetCourseVideos?courseId=${idCourse}`);
  };

  const { data: videosData, isLoading } = useQuery(
    "getVideos",
    () => getVideos(params.id),
    {
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  console.log(videosData);

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
                      <iframe
                        src={`${url}/?otp=${videosData?.data[index]?.otp}&playbackInfo=${videosData?.data[index]?.playbackInfo}`}
                        style={{
                          border: "0",
                          height: "450px",
                          width: "100%",
                          borderRadius: "15px",
                        }}
                        allowFullScreen={true}
                        allow="encrypted-media"
                        aria-atomic={true}
                        aria-live="polite"
                        title="video"
                      ></iframe>
                      <p>{videosData?.data[index].lectureName}</p>
                    </div>
                  ) : (
                    <div className="">
                      <div className="video img-course my-shadow border rounded-4 overflow-hidden">
                        <img
                          className="w-100 h-100 object-fit-fill"
                          src={details?.data.photo}
                        />
                      </div>
                      <p>{details?.data.desc}</p>
                    </div>
                  )}
                </div>
              }

              {!viewVideo ? (
                <button
                  disabled={!videosData?.data.length}
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
            <div className="col-md-5 col-lg-4 pt-3 mt-4">
              <div className="plal-list bg-dash rounded py-3">
                {videosData?.data.length ? (
                  videosData?.data.map((video, ind) => {
                    return (
                        <button
                          className="btn fs-small overflow-hidden"
                          key={video.otp}
                          onClick={() => {
                            setIndex(ind % videosData?.data.length);
                            setViewVideo(true);
                          }}
                        >
                          <div className="col-12">
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
