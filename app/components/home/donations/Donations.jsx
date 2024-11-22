"use client";
import React, { useEffect } from "react";

const Donations = () => {
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;

    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        $(".donations-two__carousel").owlCarousel({
          items: 3,
          margin: 30,
          smartSpeed: 700,
          loop: true,
          stagePadding: 370,
          autoplay: true,
          autoplayTimeout: 6000,
          nav: true,
          dots: false,
          navText: [
            '<span class="icon-arrow-left"></span>',
            '<span class="icon-arrow-right"></span>',
          ],
          responsive: {
            0: { items: 1, stagePadding: 0, margin: 20 },
            530: { items: 1, stagePadding: 100, margin: 30 },
            768: { items: 2, stagePadding: 50, margin: 30 },
            992: { items: 2, stagePadding: 110, margin: 30 },
            1200: { items: 2, stagePadding: 200, margin: 30 },
            1400: { items: 3, stagePadding: 130, margin: 30 },
            1600: { items: 3, stagePadding: 260, margin: 30 },
            1830: { items: 3, stagePadding: 371, margin: 30 },
          },
        });
        console.log("Owl Carousel initialized successfully for Donations!");
      } else if (retryCount < maxRetries) {
        retryCount += 1;
        console.log("Owl Carousel or jQuery is not loaded. Retrying...");
        setTimeout(initCarousel, 100);
      } else {
        console.error("Failed to load Owl Carousel after maximum retries.");
      }
    };

    initCarousel();
  }, []);

  return (
    <section className="donations-two donations-carousel section-space">
      <div
        className="donations-two__bg"
        style={{
          backgroundImage:
            'url("assets/images/backgrounds/donation-bg-2-2.png")',
        }}
      />
      {/* /.donations-two__bg */}
      <div className="container">
        <div className="sec-title">
          <h6 className="sec-title__tagline sec-title__tagline--center">
            HELP AND DONATE US
          </h6>
          {/* /.sec-title__tagline */}
          <h3 className="sec-title__title">
            We Gools Popular
            <span className="sec-title__title__inner">Causes</span>
          </h3>
          {/* /.sec-title__title */}
        </div>
        {/* /.sec-title */}
      </div>
      {/* /.container */}
      <div className="container-fluid">
        <div
          className="donations-two__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
          data-owl-options='{
      "items": 3,
      "margin": 30,
      "smartSpeed": 700,
      "loop":true,
      "stagePadding": 370,
      "autoplay": 6000,
      "nav":true,
      "dots":false,
      "navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
      "responsive":{
          "0":{
              "items": 1,
              "stagePadding": 0,
              "margin": 20
          },
          "530":{
              "items": 1,
              "stagePadding": 100,
              "margin": 30
          },
          "768":{
              "items": 2,
              "stagePadding": 50,
              "margin": 30
          },
          "992":{
              "items": 2,
              "stagePadding": 110,
              "margin": 30
          },
          "1200":{
              "items": 2,
              "stagePadding": 200,
              "margin": 30
          },
          "1400":{
              "items": 3,
              "stagePadding": 130,
              "margin": 30
          },
          "1600":{
              "items": 3,
              "stagePadding": 260,
              "margin": 30
          },
          "1830":{
              "items": 3,
              "stagePadding": 371,
              "margin": 30
          }
      }
      }'
        >
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="donation-card @@extraClassName">
              <div
                className="donation-card__bg"
                style={{
                  backgroundImage:
                    'url("assets/images/backgrounds/donation-bg-1-1.png")',
                }}
              />
              {/* /.donation-card__bg */}
              <a
                href="donation-details-right.html"
                className="donation-card__image"
              >
                <img
                  src="assets/images/donations/donation-1-1.jpg"
                  alt="Give African Children's Good medical support"
                />
                <div className="donation-card__category">Medical</div>
                {/* /.donation-card__category */}{" "}
              </a>
              {/* /.donation-card__image */}
              <div className="donation-card__content">
                <div className="donation-card__progress">
                  <div className="progress-box">
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar--noappear"
                        data-percent="90%"
                      >
                        <div className="progress-box__number count-text">
                          90%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                  <div className="donation-card__progress__bottom">
                    <h5 className="donation-card__progress__title">
                      Raised $<span>80,050</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                    <h5 className="donation-card__progress__title">
                      goal $<span>90,000</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                  </div>
                  {/* /.donation-card__progress__bottom */}
                </div>
                {/* /.donation-card__progress */}
                <h3 className="donation-card__title">
                  <a href="donation-details-right.html">
                    Give African Children's Good medical support
                  </a>
                </h3>
                {/* /.donation-card__title */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                >
                  <div className="cleenhearts-btn__icon-box">
                    <div className="cleenhearts-btn__icon-box__inner">
                      <span className="icon-duble-arrow" />
                    </div>
                  </div>
                  <span className="cleenhearts-btn__text">
                    donation details
                  </span>{" "}
                </a>
                {/* /.donation-card__btn */}
              </div>
              {/* /.donation-card__content */}
            </div>
            {/* /.donation-card */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="donation-card @@extraClassName">
              <div
                className="donation-card__bg"
                style={{
                  backgroundImage:
                    'url("assets/images/backgrounds/donation-bg-1-1.png")',
                }}
              />
              {/* /.donation-card__bg */}
              <a
                href="donation-details-right.html"
                className="donation-card__image"
              >
                <img
                  src="assets/images/donations/donation-1-7.jpg"
                  alt="Help homeless people settle down support"
                />
                <div className="donation-card__category">Sports</div>
                {/* /.donation-card__category */}{" "}
              </a>
              {/* /.donation-card__image */}
              <div className="donation-card__content">
                <div className="donation-card__progress">
                  <div className="progress-box">
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar--noappear"
                        data-percent="90%"
                      >
                        <div className="progress-box__number count-text">
                          90%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                  <div className="donation-card__progress__bottom">
                    <h5 className="donation-card__progress__title">
                      Raised $<span>80,050</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                    <h5 className="donation-card__progress__title">
                      goal $<span>90,000</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                  </div>
                  {/* /.donation-card__progress__bottom */}
                </div>
                {/* /.donation-card__progress */}
                <h3 className="donation-card__title">
                  <a href="donation-details-right.html">
                    Help homeless people settle down support
                  </a>
                </h3>
                {/* /.donation-card__title */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                >
                  <div className="cleenhearts-btn__icon-box">
                    <div className="cleenhearts-btn__icon-box__inner">
                      <span className="icon-duble-arrow" />
                    </div>
                  </div>
                  <span className="cleenhearts-btn__text">
                    donation details
                  </span>{" "}
                </a>
                {/* /.donation-card__btn */}
              </div>
              {/* /.donation-card__content */}
            </div>
            {/* /.donation-card */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="donation-card @@extraClassName">
              <div
                className="donation-card__bg"
                style={{
                  backgroundImage:
                    'url("assets/images/backgrounds/donation-bg-1-1.png")',
                }}
              />
              {/* /.donation-card__bg */}
              <a
                href="donation-details-right.html"
                className="donation-card__image"
              >
                <img
                  src="assets/images/donations/donation-1-2.jpg"
                  alt="Let’s education for children get good life"
                />
                <div className="donation-card__category">Education</div>
                {/* /.donation-card__category */}{" "}
              </a>
              {/* /.donation-card__image */}
              <div className="donation-card__content">
                <div className="donation-card__progress">
                  <div className="progress-box">
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar--noappear"
                        data-percent="65%"
                      >
                        <div className="progress-box__number count-text">
                          65%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                  <div className="donation-card__progress__bottom">
                    <h5 className="donation-card__progress__title">
                      Raised $<span>80,050</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                    <h5 className="donation-card__progress__title">
                      goal $<span>90,000</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                  </div>
                  {/* /.donation-card__progress__bottom */}
                </div>
                {/* /.donation-card__progress */}
                <h3 className="donation-card__title">
                  <a href="donation-details-right.html">
                    Let’s education for children get good life
                  </a>
                </h3>
                {/* /.donation-card__title */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                >
                  <div className="cleenhearts-btn__icon-box">
                    <div className="cleenhearts-btn__icon-box__inner">
                      <span className="icon-duble-arrow" />
                    </div>
                  </div>
                  <span className="cleenhearts-btn__text">
                    donation details
                  </span>{" "}
                </a>
                {/* /.donation-card__btn */}
              </div>
              {/* /.donation-card__content */}
            </div>
            {/* /.donation-card */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="donation-card @@extraClassName">
              <div
                className="donation-card__bg"
                style={{
                  backgroundImage:
                    'url("assets/images/backgrounds/donation-bg-1-1.png")',
                }}
              />
              {/* /.donation-card__bg */}
              <a
                href="donation-details-right.html"
                className="donation-card__image"
              >
                <img
                  src="assets/images/donations/donation-1-8.jpg"
                  alt="Adopt a orphan child with our volunteer community"
                />
                <div className="donation-card__category">Evast</div>
                {/* /.donation-card__category */}{" "}
              </a>
              {/* /.donation-card__image */}
              <div className="donation-card__content">
                <div className="donation-card__progress">
                  <div className="progress-box">
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar--noappear"
                        data-percent="65%"
                      >
                        <div className="progress-box__number count-text">
                          65%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                  <div className="donation-card__progress__bottom">
                    <h5 className="donation-card__progress__title">
                      Raised $<span>80,050</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                    <h5 className="donation-card__progress__title">
                      goal $<span>90,000</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                  </div>
                  {/* /.donation-card__progress__bottom */}
                </div>
                {/* /.donation-card__progress */}
                <h3 className="donation-card__title">
                  <a href="donation-details-right.html">
                    Adopt a orphan child with our volunteer community
                  </a>
                </h3>
                {/* /.donation-card__title */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                >
                  <div className="cleenhearts-btn__icon-box">
                    <div className="cleenhearts-btn__icon-box__inner">
                      <span className="icon-duble-arrow" />
                    </div>
                  </div>
                  <span className="cleenhearts-btn__text">
                    donation details
                  </span>{" "}
                </a>
                {/* /.donation-card__btn */}
              </div>
              {/* /.donation-card__content */}
            </div>
            {/* /.donation-card */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <div className="donation-card @@extraClassName">
              <div
                className="donation-card__bg"
                style={{
                  backgroundImage:
                    'url("assets/images/backgrounds/donation-bg-1-1.png")',
                }}
              />
              {/* /.donation-card__bg */}
              <a
                href="donation-details-right.html"
                className="donation-card__image"
              >
                <img
                  src="assets/images/donations/donation-1-3.jpg"
                  alt="Raise Funds For Clean & Healthy Food"
                />
                <div className="donation-card__category">Foods</div>
                {/* /.donation-card__category */}{" "}
              </a>
              {/* /.donation-card__image */}
              <div className="donation-card__content">
                <div className="donation-card__progress">
                  <div className="progress-box">
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar--noappear"
                        data-percent="75%"
                      >
                        <div className="progress-box__number count-text">
                          75%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                  <div className="donation-card__progress__bottom">
                    <h5 className="donation-card__progress__title">
                      Raised $<span>80,050</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                    <h5 className="donation-card__progress__title">
                      goal $<span>90,000</span>
                    </h5>
                    {/* /.donation-card__progress__title */}
                  </div>
                  {/* /.donation-card__progress__bottom */}
                </div>
                {/* /.donation-card__progress */}
                <h3 className="donation-card__title">
                  <a href="donation-details-right.html">
                    Raise Funds For Clean &amp; Healthy Food
                  </a>
                </h3>
                {/* /.donation-card__title */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                >
                  <div className="cleenhearts-btn__icon-box">
                    <div className="cleenhearts-btn__icon-box__inner">
                      <span className="icon-duble-arrow" />
                    </div>
                  </div>
                  <span className="cleenhearts-btn__text">
                    donation details
                  </span>{" "}
                </a>
                {/* /.donation-card__btn */}
              </div>
              {/* /.donation-card__content */}
            </div>
            {/* /.donation-card */}
          </div>
          {/* /.item */}
        </div>
        {/* /.donations-two__carousel */}
      </div>
      {/* /.container-fluid */}
      <div className="donations-two__shapes">
        <div className="donations-two__shape donations-two__shape--one" />
        {/* /.donations-two__shape__one */}
        <div className="donations-two__shape donations-two__shape--two" />
        {/* /.donations-two__shape__one */}
      </div>
      {/* /.inspiring-one__shape */}
    </section>
  );
};

export default Donations;
