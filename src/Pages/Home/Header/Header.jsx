import React, { useEffect, useState } from "react";
import "./Header.css";
import books from "../../../assets/imgs/header/books.png";
import pin from "../../../assets/imgs/header/pin.png";
import arrow1 from "../../../assets/imgs/Arrow2.png";
import arrow2 from "../../../assets/imgs/Arrow1.png";
import chart from "../../../assets/imgs/chart.png";
import ligthCir from "../../../assets/imgs/light-circle.png";
import DescHeader from "./DescHeader/DescHeader";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState("");
  let token;
  localStorage.dataAuth
    ? (token = JSON.parse(localStorage.dataAuth).token.token)
    : (token = null);

  useEffect(() => {
    if (token?.length) setShow("d-none");
  }, []);

  return (
    <section className="header" id="header">
      <div className="container">
        <div className="content position-relative">
          <DescHeader />
          <div className={`text-center ${show}`}>
            <Link
              type="button"
              className="btn my-btn position-relative z-3"
              to="/auth/sign-up"
            >
              Get Started
            </Link>
          </div>
          <div className="row justify-content-center ">
            <div className="col-6 col-lg-4">
              <div className="img-header">
                <img
                  className="d-block w-75 h-75 object-fit-fil"
                  src={books}
                  alt="books"
                />
                <div className="bg-light-cer">
                  <img src={ligthCir} className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="shaps">
            <div className="arrow1">
              <img src={arrow1} alt="arrow" />
            </div>
            <div className="arrow2">
              <img src={arrow2} alt="arrow" />
            </div>
            <div className="pin">
              <img src={pin} alt="pin" />
            </div>
            <div className="chart">
              <img src={chart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
