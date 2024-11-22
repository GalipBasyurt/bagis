"use client";
import React, { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;

    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        $(".testimonials-two__carousel").owlCarousel({
          items: 1,
          margin: 30,
          smartSpeed: 700,
          loop: true,
          autoplay: true,
          autoplayTimeout: 6000,
          nav: false,
          dots: false,
          navText: [
            '<span class="icon-arrow-left"></span>',
            '<span class="icon-arrow-right"></span>',
          ],
          responsive: {
            0: {
              items: 1,
              dots: true,
              loop: true,
              margin: 20,
            },
            575: {
              items: 1,
              dots: true,
              loop: true,
              margin: 30,
            },
            768: {
              items: 1,
              dots: true,
              loop: true,
              margin: 30,
            },
            992: {
              items: 2,
              dots: false,
              loop: false,
              margin: 30,
            },
            1200: {
              items: 2,
              dots: false,
              loop: false,
              margin: 30,
            },
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

    return () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        $(".testimonials-two__carousel").trigger("destroy.owl.carousel");
      }
    };
  }, []);
  return (
    <section className="testimonials-two section-space">
      <div className="container">
        <div className="testimonials-two__top">
          <div className="row gutter-y-30 align-items-center">
            <div className="col-lg-7">
              <div className="sec-title">
                <h6 className="sec-title__tagline @@extraClassName">
                  TESTIMONIALS
                </h6>
                {/* /.sec-title__tagline */}
                <h3 className="sec-title__title">
                  What They’re Talking About Clean
                  <span className="sec-title__title__inner">Heart</span>
                </h3>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
            </div>
            {/* /.col-lg-7 */}
            <div
              className="col-lg-5 wow fadeInRight"
              data-wow-duration="1500ms"
            >
              <p className="testimonials-two__text">
                We help companies develop powerful corporate social
                responsibility, grantmaking, and employee engagement strategies.
              </p>
              {/* /.testimonials-two__text */}
            </div>
            {/* /.col-lg-5 */}
          </div>
          {/* /.row gutter-y-40 */}
        </div>
        {/* /.testimonials-two__top */}
        <div
          className="testimonials-two__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
          data-owl-options='{
"items": 1,
"margin": 30,
"smartSpeed": 700,
"loop":true,
"autoplay": 6000,
"nav":false,
"dots":false,
"navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
"responsive":{
    "0":{
        "items": 1,
        "dots": true,
        "loop":true,
        "margin": 20
    },
    "575":{
        "items": 1,
        "dots": true,
        "loop":true,
        "margin": 30
    },
    "768":{
        "items": 1,
        "dots": true,
        "loop":true,
        "margin": 30
    },
    "992":{
        "items": 2,
        "dots": false,
        "loop": false,
        "margin": 30
    },
    "1200":{
        "items": 2,
        "dots": false,
        "loop": false,
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
            <div className="testimonials-card @@extraClassName">
              <div
                className="testimonials-card__bg"
                style={{
                  backgroundImage:
                    'url("assets/images/backgrounds/testimonial-bg-2.png")',
                }}
              />
              {/* /.testimonials-card__bg */}
              <div className="testimonials-card__top">
                <div className="testimonials-card__quote">
                  <span className="icon-quote-2" />
                </div>
                {/* /.testimonials-card__quote */}
                <a
                  href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                  className="testimonials-card__video video-button video-popup"
                >
                  <span className="icon-play" />
                  <i className="video-button__ripple" />{" "}
                </a>
                {/* /.testimonials-card__video */}
              </div>
              {/* /.testimonials-card__top */}
              <div className="testimonials-card__content">
                <p className="testimonials-card__text">
                  posuere luctus orci. Donec vitae mattis quam, vitae tempor
                  arcu. Aenean non odio porttitor, convallis erat sit amet.
                </p>
                {/* /.testimonials-card__text */}
                <div className="testimonials-card__info">
                  <div className="testimonials-card__info__left">
                    <h4 className="testimonials-card__name">
                      Kenneth S. Fisher
                    </h4>
                    {/* /.testimonials-card__name */}
                    <span className="testimonials-card__designation">
                      marketing manager
                    </span>
                    {/* /.testimonials-card__designation */}
                  </div>
                  {/* /.testimonials-card__info__left */}
                  <div className="cleenhearts-ratings testimonials-card__rattings">
                    <span className="icon-star" />
                    <span className="icon-star" />
                    <span className="icon-star" />
                    <span className="icon-star" />
                    <span className="icon-star" />
                  </div>
                  {/* /.product-ratings */}
                </div>
                {/* /.testimonials-card__info */}
              </div>
              {/* /.testimonials-card__content */}
            </div>
            {/* /.testimonials-card */}
          </div>
          {/* /.item*/}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="testimonials-card @@extraClassName">
              <div
                className="testimonials-card__bg"
                style={{
                  backgroundImage:
                    'url("assets/images/backgrounds/testimonial-bg-2.png")',
                }}
              />
              {/* /.testimonials-card__bg */}
              <div className="testimonials-card__top">
                <div className="testimonials-card__quote">
                  <span className="icon-quote-2" />
                </div>
                {/* /.testimonials-card__quote */}
                <a
                  href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                  className="testimonials-card__video video-button video-popup"
                >
                  <span className="icon-play" />
                  <i className="video-button__ripple" />{" "}
                </a>
                {/* /.testimonials-card__video */}
              </div>
              {/* /.testimonials-card__top */}
              <div className="testimonials-card__content">
                <p className="testimonials-card__text">
                  posuere luctus orci. Donec vitae mattis quam, vitae tempor
                  arcu. Aenean non odio porttitor, convallis erat sit amet.
                </p>
                {/* /.testimonials-card__text */}
                <div className="testimonials-card__info">
                  <div className="testimonials-card__info__left">
                    <h4 className="testimonials-card__name">
                      Cedric J. Coggins
                    </h4>
                    {/* /.testimonials-card__name */}
                    <span className="testimonials-card__designation">
                      Tropical zodiac
                    </span>
                    {/* /.testimonials-card__designation */}
                  </div>
                  {/* /.testimonials-card__info__left */}
                  <div className="cleenhearts-ratings testimonials-card__rattings">
                    <span className="icon-star" />
                    <span className="icon-star" />
                    <span className="icon-star" />
                    <span className="icon-star" />
                    <span className="icon-star" />
                  </div>
                  {/* /.product-ratings */}
                </div>
                {/* /.testimonials-card__info */}
              </div>
              {/* /.testimonials-card__content */}
            </div>
            {/* /.testimonials-card */}
          </div>
          {/* /.item */}
        </div>
        {/* /.testimonials-two__carousel */}
      </div>
      {/* /.container */}
    </section>
  );
};

export default Testimonials;
