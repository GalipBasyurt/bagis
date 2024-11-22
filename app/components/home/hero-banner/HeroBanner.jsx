import React from "react";

const HeroBanner = () => {
  return (
    <div>
      <section className="hero-banner">
        <div className="hero-banner__shape wow fadeInUp">
          <img
            src="assets/images/shapes/hero-banner-shape.png"
            alt="Decorative shape for hero banner"
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-7 col-xl-8 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <h3 className="hero-banner__title">
                <span className="hero-banner__title__purple">
                  Empowering young
                </span>{" "}
                people
                <br /> to be lead the change
              </h3>
            </div>
            <div
              className="col-lg-5 col-xl-4 wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="hero-banner__content">
                <p className="hero-banner__content__text">
                  We help companies develop powerful corporate social
                  responsibility, grantmaking, and employee engagement
                  strategies.
                </p>
                <div className="hero-banner__content__btn">
                  <a href="become-a-volunteer.html" className="cleenhearts-btn">
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow" />
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">join with us</span>
                  </a>
                  {/* slider-btn */}
                  <div className="volunteer-group">
                    <a
                      href="volunteer-details.html"
                      className="volunteer-group__link"
                    >
                      <img
                        src="assets/images/volunteer/volunteer-image-1.png"
                        alt="Volunteer 1"
                        className="volunteer-group__image"
                      />
                    </a>
                    {/* /.volunteer-group__link */}
                    <a
                      href="volunteer-details.html"
                      className="volunteer-group__link"
                    >
                      <img
                        src="assets/images/volunteer/volunteer-image-2.png"
                        alt="Volunteer 2"
                        className="volunteer-group__image"
                      />
                    </a>
                    {/* /.volunteer-group__link */}
                    <a
                      href="volunteer-details.html"
                      className="volunteer-group__link"
                    >
                      <img
                        src="assets/images/volunteer/volunteer-image-3.png"
                        alt="Volunteer 3"
                        className="volunteer-group__image"
                      />
                    </a>
                    {/* /.volunteer-group__link */}
                  </div>
                  {/* /.volunteer-group */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
