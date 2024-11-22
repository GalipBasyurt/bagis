import React from "react";

const AboutInfo = () => {
  return (
    <div>
      <section className="about-info @@extraClassName section-space">
        <div className="container">
          <div className="row gutter-y-30 justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="about-info__item">
                <div className="about-info__icon" aria-label="Local branches">
                  <span className="icon-location-2" />
                </div>
                {/* /.about-info__icon */}
                <div className="about-info__content">
                  <div className="about-info__counter count-box">
                    <h3
                      className="about-info__counter__text count-text"
                      data-stop={1200}
                      data-speed={1500}
                    >
                      00
                    </h3>
                    <h3 className="about-info__counter__text ">+</h3>
                  </div>
                  {/* /.about-info__counter */}
                  <h5 className="about-info__title">
                    local clean heart branches
                  </h5>
                </div>
                {/* /.about-info__content */}
              </div>
              {/* /.about-info__item */}
            </div>
            {/* /.col-xl-3 col-lg-4 col-md-6 */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="about-info__item">
                <div
                  className="about-info__icon"
                  aria-label="Clean heart staff"
                >
                  <span className="icon-teamwork" />
                </div>
                {/* /.about-info__icon */}
                <div className="about-info__content">
                  <div className="about-info__counter count-box">
                    <h3
                      className="about-info__counter__text count-text"
                      data-stop={7200}
                      data-speed={1500}
                    >
                      00
                    </h3>
                    <h3 className="about-info__counter__text ">+</h3>
                  </div>
                  {/* /.about-info__counter */}
                  <h5 className="about-info__title">Total clean heart Staff</h5>
                </div>
                {/* /.about-info__content */}
              </div>
              {/* /.about-info__item */}
            </div>
            {/* /.col-xl-3 col-lg-4 col-md-6 */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="about-info__item">
                <div
                  className="about-info__icon"
                  aria-label="Clean heart volunteers"
                >
                  <span className="icon-team" />
                </div>
                {/* /.about-info__icon */}
                <div className="about-info__content">
                  <div className="about-info__counter count-box">
                    <h3
                      className="about-info__counter__text count-text"
                      data-stop={15900}
                      data-speed={1500}
                    >
                      00
                    </h3>
                    <h3 className="about-info__counter__text ">+</h3>
                  </div>
                  {/* /.about-info__counter */}
                  <h5 className="about-info__title">
                    clean heart total volunteers
                  </h5>
                </div>
                {/* /.about-info__content */}
              </div>
              {/* /.about-info__item */}
            </div>
            {/* /.col-xl-3 col-lg-4 col-md-6 */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="about-info__item">
                <div
                  className="about-info__icon"
                  aria-label="People reached annually"
                >
                  <span className="icon-people" />
                </div>
                {/* /.about-info__icon */}
                <div className="about-info__content">
                  <div className="about-info__counter count-box">
                    <h3
                      className="about-info__counter__text count-text"
                      data-stop="6.9"
                      data-speed={1500}
                    >
                      00
                    </h3>
                    <h3 className="about-info__counter__text ">M+</h3>
                  </div>
                  {/* /.about-info__counter */}
                  <h5 className="about-info__title">
                    reached peoples every year
                  </h5>
                </div>
                {/* /.about-info__content */}
              </div>
              {/* /.about-info__item */}
            </div>
            {/* /.col-xl-3 col-lg-4 col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </div>
  );
};

export default AboutInfo;
