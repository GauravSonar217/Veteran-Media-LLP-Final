import React from "react";
import ContactHead from "../media/png/contact.png"
import bar from "../media/png/career.png";


function Contact() {
  return (
    <React.Fragment>
      <section className="projectSec">
        <section className="portHead" id="ContactSec">
          <div className="container" id="projectCont">
            <div className="contactText">
              <h1>
              Let's Shape Your Vision
              </h1>
              <p>Ready to take the next step in transforming your brand?</p>
              <p>Whether you have questions, Ideas bubbling, or are ready to embark on a creative journey with us, we're here for you. Contacting us at Veteran Media Solutions LLP is more than a transaction; it's the beginning of a collaboration that will shape your brand's narrative.</p>
            </div>
            <div className="contactImg">
              <img src={ContactHead} alt="vector image" />
            </div>
          </div>
        </section>
        <div className="container" id="textSec">
          <p>
            Welcome to the Portfolio Showcase at Veteran Media Solutions LLP,
            where new ideas and hard work come together. This carefully chosen
            group of projects shows an assortment of wins, with each story
            featuring problems that were solved, challenges that were overcome,
            and hopes that were turned into reality. Our showcase shows how
            creative people can do anything, from redefining brands in a
            fast-paced world to making immersive digital experiences and using
            smart packaging to turn goods into iconic stories.
          </p>
          <img id="bar" src={bar} alt="bar" />

        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
