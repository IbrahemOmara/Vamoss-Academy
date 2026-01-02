import React from "react";
import "./Instructors.css";
import Insructor from "./Insructor";
import { useQuery } from "react-query";
import axios from "axios";
import { baseURL } from "../../../utils/baseUrl";
import Loading from "../../../components/Loading/Loading";

export default function Instructors() {
  const GetInstructors = () => {
    return axios.get(`${baseURL}/Admin/GetInstructors
    `);
  };

  const { data: instructors, isLoading } = useQuery(
    "GetInstructors",
    GetInstructors,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  if(isLoading) return <Loading/>

  return (
    <section className="instructors my-bg mt-5 py-5">
      <div className="container">
        <h2 className="border-title">Top Instructors</h2>
        <div className="row gy-3 mt-5">
          {instructors?.data.map((instructor) => {
            return (
              <div className="col-lg-6">
                <Insructor instructor={instructor} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
