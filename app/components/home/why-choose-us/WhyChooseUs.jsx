import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-one section-space">
      <div className="container">
        <div className="row gutter-y-50">
          <div className="col-lg-6">
            <div className="why-choose-one__image">
              <div className="why-choose-one__image__inner">
                <img
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  src="assets/images/why-choose/why-choose-1-1.jpg"
                  alt="Why Choose Us image 1"
                />
                <img
                  className="wow fadeInUp"
                  data-wow-delay="300ms"
                  src="assets/images/why-choose/why-choose-1-2.jpg"
                  alt="Why Choose Us image 2"
                />
              </div>
              <div className="why-choose-one__image__inner">
                <img
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  src="assets/images/why-choose/why-choose-1-3.jpg"
                  alt="Why Choose Us image 3"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-one__content">
              <div className="sec-title">
                <h6 className="sec-title__tagline">WHY CHOOSE US</h6>
                <h3 className="sec-title__title">
                  We Are Popular For Providing The Best{" "}
                  <span className="sec-title__title__inner">Projects</span>
                </h3>
              </div>
              <p className="why-choose-one__text">
                We help companies develop powerful corporate social
                responsibility, grantmaking, and employee engagement strategies.
              </p>
              <div
                className="cleenhearts-accordion wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
                data-grp-name="cleenhearts-accordion"
              >
                <div className="accordion">
                  <div className="accordion-title">
                    <h4>
                      How can I donate to people?
                      <span className="accordion-title__icon" />
                    </h4>
                  </div>
                  <div className="accordion-content">
                    <div className="inner">
                      <p>
                        We help companies develop powerful corporate social
                        responsibility, grantmaking, and employee engagement
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion active">
                  <div className="accordion-title">
                    <h4>
                      IT service for business network?
                      <span className="accordion-title__icon" />
                    </h4>
                  </div>
                  <div className="accordion-content">
                    <div className="inner">
                      <p>
                        We help companies develop powerful corporate social
                        responsibility, grantmaking, and employee engagement
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-title">
                    <h4>
                      Is this a non-profit organization?
                      <span className="accordion-title__icon" />
                    </h4>
                  </div>
                  <div className="accordion-content">
                    <div className="inner">
                      <p>
                        We help companies develop powerful corporate social
                        responsibility, grantmaking, and employee engagement
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-one__hand">
        <img
          src="assets/images/shapes/why-choose-shape-1-1.png"
          alt="Hand shape 1"
          className="why-choose-one__hand__one"
        />
        <img
          src="assets/images/shapes/about-shape-1-2.png"
          alt="Hand shape 2"
          className="why-choose-one__hand__two"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
