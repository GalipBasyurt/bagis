import React from "react";

const MissionStatement = () => {
  return (
    <section className="about-two section-space">
      <div className="container">
        <div className="row gutter-y-50">
          <div className="col-lg-6">
            <div className="about-two__image">
              <div className="about-two__image__inner">
                <img
                  src="assets/images/about/about-2-1.png"
                  alt="About Image 1"
                  className="about-two__image__one"
                />
                <img
                  src="assets/images/about/about-2-2.png"
                  alt="About Image 2"
                  className="about-two__image__two"
                />
              </div>
              {/* /.about-two__image__inner */}
            </div>
            {/* /.about-two__image */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-lg-6">
            <div className="about-two__content">
              <div className="sec-title">
                <h6 className="sec-title__tagline @@extraClassName">
                  ABOUT CLEAN HEART NGO
                </h6>
                {/* /.sec-title__tagline */}
                <h3 className="sec-title__title">
                  Worldwide, Our
                  <br /> Community{" "}
                  <span className="sec-title__title__inner">Adopted</span>
                  <br /> One Mission
                </h3>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
              <p className="about-two__text">
                We help companies develop powerful corporate social
                responsibility, grantmaking, and employee engagement strategies.
              </p>
              {/* /.about-two__text */}
              <div className="contact-information">
                <a
                  href="about.html"
                  className="contact-information__btn cleenhearts-btn"
                >
                  <div className="cleenhearts-btn__icon-box">
                    <div className="cleenhearts-btn__icon-box__inner">
                      <span className="icon-duble-arrow" />
                    </div>
                  </div>
                  <span className="cleenhearts-btn__text">more about us</span>
                </a>
                {/* /.contact-information__btn */}
                <div className="contact-information__phone">
                  <div className="contact-information__phone__icon">
                    <span className="icon-phone" />
                  </div>
                  {/* /.contact-information__phone__icon */}
                  <div className="contact-information__phone__text">
                    <span>call any time</span>
                    <h5>
                      <a href="tel:+912659302003">+91 2659 302 003</a>
                    </h5>
                  </div>
                  {/* /.contact-information__phone__text */}
                </div>
                {/* /.contact-information__phone */}
              </div>
              {/* /.contact-information */}
            </div>
            {/* /.about-two__content */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="about-two__shape">
        <div className="about-two__shape__shape about-two__shape__shape--one" />
        {/* /.about-two__shape__shape */}
        <div className="about-two__shape__shape about-two__shape__shape--two" />
        {/* /.about-two__shape__shape */}
      </div>
      {/* /.about-two__shape */}
    </section>
  );
};

export default MissionStatement;
