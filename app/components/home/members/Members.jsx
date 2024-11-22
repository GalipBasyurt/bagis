"use client";
import React, { useEffect } from "react";

const Members = () => {
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;

    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        $(".board-member__carousel").owlCarousel({
          loop: true,
          items: 3,
          autoplay: true,
          autoplayTimeout: 6000,
          smartSpeed: 700,
          nav: false,
          dots: true,
          margin: 30,
          responsive: {
            0: { items: 1, margin: 20 },
            576: { items: 1, margin: 30 },
            768: { items: 1, margin: 30 },
            992: { items: 2, margin: 30 },
            1200: { items: 3, margin: 30 },
            1400: { items: 3, margin: 30 },
          },
        });
      } else if (retryCount < maxRetries) {
        retryCount += 1;
        setTimeout(initCarousel, 100);
      } else {
        console.error("hata");
      }
    };

    initCarousel();
  }, []);
  return (
    <section
      className="board-member section-space"
      style={{
        backgroundImage:
          "url(assets/images/backgrounds/board-member-bg-1-1.png)",
      }}
    >
      <div className="board-member__shape--one" />
      <div className="board-member__shape--two" />
      <div className="container-fluid">
        <div className="sec-title">
          <h6 className="sec-title__tagline sec-title__tagline--center">
            OUR BOARD MEMBERS
          </h6>
          {/* /.sec-title__tagline */}
          <h3 className="sec-title__title">
            Clean Heart
            <span className="sec-title__title__inner">Board</span> Member’s
          </h3>
          {/* /.sec-title__title */}
        </div>
        {/* /.sec-title */}
        <div
          className="board-member__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
          data-owl-options='{
"items": 3,
"margin": 30,
"smartSpeed": 700,
"loop":true,
"autoplay": 6000,
"stagePadding": 372,
"nav":false,
"dots":false,
"navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
"responsive":{
    "0":{
        "items": 1,
        "stagePadding": 0,
        "dots":true,
        "margin": 20
    },
    "500":{
        "items": 1,
        "stagePadding": 70,
        "margin": 30
    },
    "576":{
        "items": 1,
        "stagePadding": 80,
        "margin": 30
    },
    "768":{
        "items": 1,
        "stagePadding": 100,
        "margin": 30
    },
    "992":{
        "items": 1,
        "stagePadding": 130,
        "margin": 30
    },
    "1200":{
        "items": 2,
        "stagePadding": 60,
        "margin": 30
    },
    "1400":{
        "items": 2,
        "stagePadding": 90,
        "margin": 30
    },
    "1600":{
        "items": 2,
        "stagePadding": 150,
        "margin": 30
    },
    "1800":{
        "items": 2,
        "stagePadding": 340,
        "margin": 30
    },
    "1905":{
        "items": 2,
        "stagePadding": 372,
        "margin": 30
    }
}
}'
        >
          <div className="item">
            <div className="board-member__item">
              <a href="volunteer-details.html" className="board-member__image">
                <img
                  src="assets/images/board-member/board-member-1-1.jpg"
                  alt="@@title"
                />{" "}
              </a>
              {/* /.board-member__image */}
              <div className="board-member__info">
                <div className="board-member__info__inner">
                  <h3 className="board-member__name">
                    <a href="volunteer-details.html">Joseph L. Moore</a>
                  </h3>
                  {/* /.board-member__name */}
                  <span className="board-member__designation">
                    Country manager
                  </span>
                  {/* /.board-member__designation */}
                </div>
                {/* /.board-member__info__inner */}
                <div className="board-member__social">
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com">
                    <i className="fab fa-twitter" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://linkedin.com" aria-hidden="true">
                    <i className="fab fa-linkedin-in" />
                    <span className="sr-only">Linkedin</span>
                  </a>
                  <a href="https://youtube.com" aria-hidden="true">
                    <i className="fab fa-youtube" />
                    <span className="sr-only">Youtube</span>
                  </a>
                </div>
                {/* /.board-member__social */}
              </div>
              {/* /.board-member__info */}
            </div>
            {/* /.board-member__item */}
          </div>
          {/* /.item */}
          <div className="item">
            <div className="board-member__item">
              <a href="volunteer-details.html" className="board-member__image">
                <img
                  src="assets/images/board-member/board-member-1-2.jpg"
                  alt="@@title"
                />{" "}
              </a>
              {/* /.board-member__image */}
              <div className="board-member__info">
                <div className="board-member__info__inner">
                  <h3 className="board-member__name">
                    <a href="volunteer-details.html">Kenneth S. Fisher</a>
                  </h3>
                  {/* /.board-member__name */}
                  <span className="board-member__designation">
                    Founder &amp; chairman
                  </span>
                  {/* /.board-member__designation */}
                </div>
                {/* /.board-member__info__inner */}
                <div className="board-member__social">
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com">
                    <i className="fab fa-twitter" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://linkedin.com" aria-hidden="true">
                    <i className="fab fa-linkedin-in" />
                    <span className="sr-only">Linkedin</span>
                  </a>
                  <a href="https://youtube.com" aria-hidden="true">
                    <i className="fab fa-youtube" />
                    <span className="sr-only">Youtube</span>
                  </a>
                </div>
                {/* /.board-member__social */}
              </div>
              {/* /.board-member__info */}
            </div>
            {/* /.board-member__item */}
          </div>
          {/* /.item */}
          <div className="item">
            <div className="board-member__item">
              <a href="volunteer-details.html" className="board-member__image">
                <img
                  src="assets/images/board-member/board-member-1-3.jpg"
                  alt="@@title"
                />{" "}
              </a>
              {/* /.board-member__image */}
              <div className="board-member__info">
                <div className="board-member__info__inner">
                  <h3 className="board-member__name">
                    <a href="volunteer-details.html">Patricia E. Wall</a>
                  </h3>
                  {/* /.board-member__name */}
                  <span className="board-member__designation">
                    Co-Founder &amp; CEO
                  </span>
                  {/* /.board-member__designation */}
                </div>
                {/* /.board-member__info__inner */}
                <div className="board-member__social">
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com">
                    <i className="fab fa-twitter" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://linkedin.com" aria-hidden="true">
                    <i className="fab fa-linkedin-in" />
                    <span className="sr-only">Linkedin</span>
                  </a>
                  <a href="https://youtube.com" aria-hidden="true">
                    <i className="fab fa-youtube" />
                    <span className="sr-only">Youtube</span>
                  </a>
                </div>
                {/* /.board-member__social */}
              </div>
              {/* /.board-member__info */}
            </div>
            {/* /.board-member__item */}
          </div>
          {/* /.item */}
          <div className="item">
            <div className="board-member__item">
              <a href="volunteer-details.html" className="board-member__image">
                <img
                  src="assets/images/board-member/board-member-1-4.jpg"
                  alt="@@title"
                />{" "}
              </a>
              {/* /.board-member__image */}
              <div className="board-member__info">
                <div className="board-member__info__inner">
                  <h3 className="board-member__name">
                    <a href="volunteer-details.html">Joanie B. Craig</a>
                  </h3>
                  {/* /.board-member__name */}
                  <span className="board-member__designation">NGO lawyer</span>
                  {/* /.board-member__designation */}
                </div>
                {/* /.board-member__info__inner */}
                <div className="board-member__social">
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com">
                    <i className="fab fa-twitter" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://linkedin.com" aria-hidden="true">
                    <i className="fab fa-linkedin-in" />
                    <span className="sr-only">Linkedin</span>
                  </a>
                  <a href="https://youtube.com" aria-hidden="true">
                    <i className="fab fa-youtube" />
                    <span className="sr-only">Youtube</span>
                  </a>
                </div>
                {/* /.board-member__social */}
              </div>
              {/* /.board-member__info */}
            </div>
            {/* /.board-member__item */}
          </div>
          {/* /.item */}
        </div>
        {/* /.board-member__carousel */}
      </div>
      {/* /.container-fluid */}
    </section>
  );
};

export default Members;
