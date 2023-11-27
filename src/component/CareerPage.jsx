import React, { useState, useEffect } from "react";
import careerImg from "../media/png/Group 96.png";
import bar from "../media/png/career.png";
import Feedback from "./Feedback";
import { HashLink } from "react-router-hash-link";

  function CareerPage() {
    const [toggle, setToggle] = useState(false);

    function checkToggle() {
      const checker = document.querySelector(".checker");
      const sliderbtn = document.querySelector(".slider-button");
      checker.addEventListener("click", function () {
        if (toggle) {
          checker.classList.remove("active");
          sliderbtn.innerHTML = "x";
          setToggle(!toggle);
          console.log("unchecked")
        } else {
          checker.classList.add("active");
          sliderbtn.innerHTML = "&#10003;";
          setToggle(!toggle);
          console.log("checked")
        }
      });
    }

  return (
    <React.Fragment>
      <section className="careerTop" id="careerPage">
        <section className="careerHead">
          <div className="container" id="careerHead">
            <div className="careerText">
              <h1>
                Join Our Dynamic Team <br /> At Veteran Media
              </h1>
            </div>
            <div className="careerImg">
              <img src={careerImg} alt="vector image" />
            </div>
            <div className="searchBar">
              <input type="text" placeholder="Search..." />
              <button id="searchBtn">Looking for</button>
            </div>
          </div>
        </section>
        <p>
          Are you passionate about creativity, innovation, and making a
          significant impact in advertising and branding? At Veteran Media
          Solutions LLP, We're looking for dynamic individuals to join our
          dedicated team of professionals.
        </p>
        <img id="bar" src={bar} alt="bar" />
      </section>

      <section className="careerSec sectionPadding">
        <div className="container" id="careerSec">
          <h3>Apply Now to be part of the Veteran Team</h3>
          <p>
            As a rapidly growing agency with a proven track record, we offer a
            collaborative and inspiring work environment where your skills and
            ideas can thrive. We are giving you the moment to explore exciting
            career opportunities with us and be part of a journey that shapes
            our clients and our team's success stories.
          </p>
          <div className="careerCont">
            <div className="feedbackCont">
              <div className="feedSliderCont">
                <Feedback></Feedback>
              </div>
              <div class="container_left">
                <h1>Read what our customers love about us</h1>
                <p>
                  Over 100 companies from diverse sectors consult us to enhance
                  the user experience of their products and services.
                </p>
                <button>Read our success stories</button>
              </div>
            </div>
            <div className="contactCont">
              <div className="inputCont">
                <input type="text" name="fullname" placeholder="Full Name*" />
                <input type="email" name="email" placeholder="Email*" />
                <input type="tel" name="contact no" placeholder="Contact No*" />
                <input type="text" name="vacancy" placeholder="Job Vacancy*" />
              </div>
              <input
                type="file"
                name="upload"
                placeholder="Upload CV/ Portfolio*"
                id="file"
              />
              <textarea
                name="coverletter"
                id="cover"
                cols="30"
                rows="6"
                placeholder="Write your cover letter*"
              ></textarea>
              <div className="formfooter">
                <div className="left">
                  <div class="checker" onClick={checkToggle}>
                    <div class="slider-button">x</div>
                  </div>
                  <p>
                    I agree with <HashLink>privacy policy</HashLink>
                  </p>
                </div>
                <button id="applybtn">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CareerPage;
