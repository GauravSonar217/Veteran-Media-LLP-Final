import React from "react";
import { HashLink } from "react-router-hash-link";

function FAQSec() {
  function faqToggler() {
    document.querySelectorAll(".faq-card").forEach((card) => {
      const question = card.querySelector(".question");
      const answer = card.querySelector(".answer");
      const icon = card.querySelector(".icon");
      const toggle = card.querySelector(".toggle");
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");

      question.addEventListener("click", () => {
        if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.textContent = "+";
          icon.style.color = "white";
          card.style.backgroundColor = "white";
          h3.style.color = "black";
          p.style.color = "black";
          toggle.style.backgroundColor = "black"; // Restore the default toggle color
        } else {
          answer.style.display = "block";
          icon.textContent = "-";
          icon.style.color = "#524FD5";
          toggle.style.backgroundColor = "#fff"; // Change toggle background color to the specified color
          card.style.backgroundColor = "black";
          h3.style.color = "white";
          p.style.color = "white";
        }
      });
    });
  }
  return (
    <React.Fragment>
      <section id="faq" className="sectionPadding">
        <div class="container" id="faqSection">
          <h4>More Information</h4>
          <h2>Frequently asked questions</h2>
          <div class="row my-4" id="faqCont">
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-1">
                <div onClick={faqToggler} class="question">
                  <h3>What services does Veteran Media offer?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Veteran Media provides a comprehensive range of services
                    tailored to meet your specific needs. Our offerings include
                    Services.html designed to empower businesses and individuals
                    in achieving their goals. &nbsp;
                    <HashLink to="/#serviceSec">Check Services</HashLink>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-2">
                <div onClick={faqToggler} class="question">
                  <h3>How can I get started with Veteran Media?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Simply fill this form &nbsp;
                    <HashLink to="/contact/#ContactSec">Contact Us</HashLink>.
                    Our team is ready to guide you through every step.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-3">
                <div onClick={faqToggler} class="question">
                  <h3>
                    What sets Veteran Media apart from other agencies in the
                    industry?
                  </h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    At Veteran, we distinguish ourselves through Veteran Media
                    stands out in the industry through its:
                    <ul>
                      <li>
                        1. Expertise: A team with extensive experience and
                        specialized knowledge.
                      </li>
                      <li>
                        2. Personalized Approach: Tailoring solutions to each
                        client's unique needs. Cutting-edge
                      </li>
                      <li>
                        3. Technology: Utilizing innovative tools and staying
                        current with industry trends.
                      </li>
                      <li>
                        4. Commitment to Excellence: Industry recognition,
                        certifications, and a track record of success.
                      </li>
                      <li>
                        5. Client Satisfaction: Positive testimonials, case
                        studies, and a client-centric approach.
                      </li>
                      <li>
                        6. Innovative Strategies: Creative problem-solving and
                        adaptability to industry changes.
                      </li>
                      <li>
                        7. Proven Track Record: Successful past campaigns and
                        long-term client relationships.
                      </li>
                      <li>
                        8. Collaborative Partnerships: Working closely with
                        clients as trusted, long-term partners..
                      </li>
                    </ul>
                    Our commitment to excellence and client satisfaction sets us
                    apart in the competitive landscape.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-4">
                <div onClick={faqToggler} class="question">
                  <h3>
                    Is Veteran suitable for small Businesses/ Startups or larger
                    enterprises?
                  </h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Veteran Media caters to a diverse clientele, including small
                    businesses, startups, and larger enterprises. Our scalable
                    solutions are adaptable to the unique requirements of
                    businesses of all sizes. Whether you're just starting or
                    looking to expand, we have the expertise to assist you.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-5">
                <div onClick={faqToggler} class="question">
                  <h3>What is the typical timeline for project completion?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Project timelines can vary based on the nature and scope of
                    the work. During the initial consultation, we'll work with
                    you to establish realistic timelines that align with your
                    objectives. Our commitment to efficiency ensures timely
                    delivery without compromising on quality.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-6">
                <div onClick={faqToggler} class="question">
                  <h3>
                    How does Veteran Media LLP ensure client satisfaction?
                  </h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Client satisfaction is at the core of our values. We
                    maintain transparent communication throughout the project,
                    provide regular updates, and actively seek feedback. Our
                    team is dedicated to surpassing your expectations, and we
                    prioritize your satisfaction in every aspect of our
                    partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FAQSec;
