import React from "react";
import "./VisionsAndMissions.css";
import iconVision1 from "../../../assets/imgs/vision/one.gif";
import iconVision2 from "../../../assets/imgs/vision/two.gif";
import iconVision3 from "../../../assets/imgs/vision/three.gif";
import iconVision4 from "../../../assets/imgs/vision/four.gif";
import iconVision5 from "../../../assets/imgs/vision/five.gif";
import iconVision6 from "../../../assets/imgs/vision/six.gif";
import iconVision7 from "../../../assets/imgs/vision/seven.gif";
import iconVision8 from "../../../assets/imgs/vision/eight.gif";
import iconVision9 from "../../../assets/imgs/vision/nine.gif";
import iconReading from "../../../assets/imgs/vision/open-book.png";
import iconWriting from "../../../assets/imgs/vision/letter.png";
import iconListening from "../../../assets/imgs/vision/social-listening.png";
import iconConversation from "../../../assets/imgs/vision/meeting.png";
import iconCorrect from "../../../assets/imgs/vision/communication.png";

import Arrow1 from "../../../assets/imgs/Arrow1.png";
import chart from "../../../assets/imgs/chart.png";
import { Link } from "react-router-dom";

export default function VisionsAndMissions() {
  return (
    <section className="visions-and-missions" id="vision">
      <div className="container position-relative">
        <h2 className="text-black text-center">Why choose Vamos?</h2>
        <p className=" text-center">Because not every place that teaches languages ​​knows how to convey the information correctly.</p>
        <div className="content1 p-4 my-bg mt-5">
          
          <div className="row py-4">
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision1} alt="vision" />
                </div>
                <h5 className="mt-3">Live Learning, Not Recordings</h5>
                <p>
                  Live online courses via Zoom,
                  accessible from anywhere in the world, 
                  with the option to record lectures for later review.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision2} alt="vision" />
                </div>
                <h5 className="mt-3">Small Groups with Higher Focus</h5>
                <p>
                  Our groups are limited to 5-8 students, 
                  ensuring each student receives ample opportunity to speak, 
                  participate, and interact with the instructor.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision3} alt="vision" />
                </div>
                <h5 className="mt-3">Instructors who understand the student before the language</h5>
                <p>
                  Our teaching team consists of language students and specialists, 
                  some with experience studying or teaching outside of Egypt. 
                  This guarantees you a strong language level and accurate pronunciation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision4} alt="vision" />
                </div>
                <h5 className="mt-3">Comprehensive language learning, not just one skill</h5>
                <p>
                  We develop all language skills: reading, writing, listening, 
                  and speaking, so you can use the language practically.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision5} alt="vision" />
                </div>
                <h5 className="mt-3">A primary focus on conversation</h5>
                <p>
                  Our goal is for you to speak confidently, not just memorize grammar. 
                  That's why communication and conversation are essential parts of every course.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision6} alt="vision" />
                </div>
                <h5 className="mt-3">Strong preparation for international exams</h5>
                <p>
                  We prepare you for exams like IELTS, TOEFL, DELF, Goethe, ÖSD, 
                  and DELE using a practical and focused approach that emphasizes the exam format.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision7} alt="vision" />
                </div>
                <h5 className="mt-3">Job market readiness</h5>
                <p>
                  We help you prepare for job interviews in fields such as call centers, 
                  international companies, teaching, translation, and tourism.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision8} alt="vision" />
                </div>
                <h5 className="mt-3">Real opportunities after advanced levels</h5>
                <p>
                  At the advanced levels, we open up real opportunities 
                  for professional development based on your level and specialization.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconVision9} alt="vision" />
                </div>
                <h5 className="mt-3">Career Opportunities (Guidance & Support)</h5>
                <p>
                  Support and guidance for the job market
                  After the advanced levels, we offer guidance and support to 
                  help students prepare for the job market, such as:
                  Job interview preparation
                  Career guidance based on language and field
                </p>
              </div>
            </div>
          </div>
          <div className={`text-center `}>
                      
                      <Link
                        type="button"
                        className="btn sec-btn position-relative z-3 mt-4"
                        to="/auth/sign-up"
                      >
                        We understand that your time is important, 
                        and that's why every course is designed to deliver real results
                      </Link>
          </div>
        </div>
        <div className="row py-4">
          <h2 className="text-black text-center mt-5 mb-5" >What skills will you gain?</h2>
            <div className="col-md-3">
              
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconReading} alt="vision" />
                </div>
                <h5 className="mt-3">Reading</h5>
                
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconWriting} alt="vision" />
                </div>
                <h5 className="mt-3">Writing</h5>
                
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconListening} alt="vision" />
                </div>
                <h5 className="mt-3">Listening</h5>
                
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconConversation} alt="vision" />
                </div>
                <h5 className="mt-3">Conversation</h5>
                
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="box-vision text-center">
                <div className="icon-vision m-auto">
                  <img src={iconCorrect} alt="vision" />
                </div>
                <h5 className="mt-3">Correct pronunciation</h5>
                
              </div>
            </div>
            
            
            
            
          </div>
        
        <div className="bg-arrow">
          <img src={Arrow1} alt="chart vision" />
        </div>
        <div className="bg-chart">
          <img src={chart} alt="chart vision" />
        </div>
      </div>
    </section>
  );
}
