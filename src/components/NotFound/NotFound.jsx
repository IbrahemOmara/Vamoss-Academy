import React from "react";
import notFound from '../../assets/imgs/NotFound.svg';

export default function NotFound() {
  return (
    <>
      <div className="container mt-5 pt-5 min-vh-100 d-flex align-items-center justify-content-center">
        <div className="content text-center text-white">
          <img className="d-block m-auto" src={notFound} alt="Not Found" />
          <h1>Page Not Found</h1>
          <p>The page you are looking for could not be found.</p>
        </div>
      </div>
    </>
  );
}
