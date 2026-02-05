import React from "react";
import imgIconExperts from '../../assets/imgs/about/experts.svg';
import imgIconAnything from '../../assets/imgs/about/anything.svg';
import imgIconCertificate from '../../assets/imgs/about/certificate.svg';
import imgIconEmailMarketing from '../../assets/imgs/about/emailMarketing.svg';

export default function StartJourny() {

  const sizeIcon = '90px';

  return (
    <>
      <section className="start-journy text-center my-bg rounded-0 py-5">
        <div className="container">
          <h6
            className="mx-auto m-0 bg-info py-1 px-3 rounded-4"
            style={{ width: "fit-content" }}
          >
            How We Start Journey
          </h6>
          <h2>Start Your Learing Journey Today! </h2>
          <p className="w-50 m-auto text-black-50">
            Groove’s intuitive shared inbox makesteam members together organize,
            prioritize and.In this episode.
          </p>
          <div className="how mt-4">
            <div className="row gy-3">
              <div className="col-md-6 col-lg-3">
                <div className="box-start-learning">
                  <div className="icon-start m-auto mb-3" style={{width:sizeIcon,height:sizeIcon}}>
                    <img src={imgIconExperts}/>
                  </div>
                  <div className="title-start">
                    <h5>Learn With Experts</h5>
                  </div>
                  <p>
                    Curate anding area share Pluralsight content to reach your
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="box-start-learning">
                  <div className="icon-start m-auto mb-3" style={{width:sizeIcon,height:sizeIcon}}>
                    <img src={imgIconAnything}/>
                  </div>
                  <div className="title-start">
                    <h5>Learn Anything</h5>
                  </div>
                  <p>
                    Curate anding area share Pluralsight content to reach your
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="box-start-learning">
                  <div className="icon-start m-auto mb-3" style={{width:sizeIcon,height:sizeIcon}}>
                    <img src={imgIconCertificate}/>
                  </div>
                  <div className="title-start">
                    <h5>Get Online Certificate</h5>
                  </div>
                  <p>
                    Curate anding area share Pluralsight content to reach your
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="box-start-learning">
                  <div className="icon-start m-auto mb-3" style={{width:sizeIcon,height:sizeIcon}}>
                    <img src={imgIconEmailMarketing}/>
                  </div>
                  <div className="title-start">
                    <h5>E-mail Marketing</h5>
                  </div>
                  <p>
                    Curate anding area share Pluralsight content to reach your
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
