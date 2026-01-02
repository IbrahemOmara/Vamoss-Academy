import React from "react";

export default function Insructor({ instructor }) {
  return (
    <>
      <div className="box-instructor bg-white rounded-3 overflow-hidden text-black">
        <div className="row">
          <div className="col-5">
            <img src={instructor.instructorPhoto} />
          </div>
          <div className="col-7 py-4">
            <h5 className="">{instructor.instractorName}</h5>
            <h6 className="">{instructor.instractorTitle}</h6>
            <p className="text-muted pe-2">{instructor.about}</p>
            <p className="text-muted fs-small fw-bold"><span className="text-black">Email: </span>{instructor.email}</p>
            {/* <div className="links d-flex gap-3 mt-4">
              <Link className="icon-link" to={instructor.links[0]}>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link className="icon-link" to={instructor.links[0]}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link className="icon-link" to={instructor.links[0]}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link className="icon-link" to={instructor.links[0]}>
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
