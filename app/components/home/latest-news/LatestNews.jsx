"use client";
import React, { useEffect } from "react";

const LatestNews = () => {
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;

    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        $(".blog-two__carousel").owlCarousel({
          items: 3,
          margin: 30,
          smartSpeed: 700,
          loop: true,
          autoplay: 6000,
          nav: false,
          dots: true,
          navText: [
            '<span class="icon-arrow-left"></span>',
            '<span class="icon-arrow-right"></span>',
          ],
          responsive: {
            0: {
              items: 1,
              margin: 20,
            },
            575: {
              items: 1,
              margin: 30,
            },
            768: {
              items: 1,
              margin: 30,
            },
            992: {
              items: 2,
              margin: 30,
            },
            1200: {
              items: 2,
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
  }, []);
  return (
    <div className="blog-two section-space-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="sec-title">
              <h6 className="sec-title__tagline @@extraClassName">
                Our latest news
              </h6>
              {/* /.sec-title__tagline */}
              <h3 className="sec-title__title">
                Latest News &amp;
                <span className="sec-title__title__inner">Articles</span> From
                Clean Heart
              </h3>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
          </div>
          {/* /.col-xl-6 col-lg-7 col-md-9 */}
        </div>
        {/* /.row */}
        <div
          className="blog-two__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
          data-owl-options='{
"items": 3,
"margin": 30,
"smartSpeed": 700,
"loop":true,
"autoplay": 6000,
"nav":false,
"dots":true,
"navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
"responsive":{
    "0":{
        "items": 1,
        "margin": 20
    },
    "575":{
        "items": 1,
        "margin": 30
    },
    "768":{
        "items": 1,
        "margin": 30
    },
    "992":{
        "items": 2,
        "margin": 30
    },
    "1200":{
        "items": 2,
        "margin": 30
    }
}
}'
        >
          <div className="item">
            <div
              className="blog-card-two"
              style={{
                backgroundImage: 'url("assets/images/blog/blog-bg-2-1.png")',
              }}
            >
              <div className="blog-card-two__image">
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__image__link"
                >
                  <img
                    src="assets/images/blog/blog-2-1.jpg"
                    alt="Promoting The Rights of Child with there lifestyle One morning, when Gregor"
                  />
                  <span className="blog-card-two__image__icon" />{" "}
                </a>
                {/* /.blog-card-two__image__link */}
                <div className="blog-card-two__date">
                  <h4 className="blog-card-two__date__day blog-card-two__date__text">
                    15
                  </h4>
                  {/* /.blog-card-two__date__day */}
                  <h4 className="blog-card-two__date__month blog-card-two__date__text">
                    SEPTEMBER
                  </h4>
                  {/* /.blog-card-two__date__month */}
                </div>
                {/* /.blog-card-two__date */}
              </div>
              {/* /.blog-card-two__image */}
              <div className="blog-card-two__content">
                <h3 className="blog-card-two__title">
                  <a href="blog-details-right.html">
                    Promoting The Rights of Child with there lifestyle One
                    morning, when Gregor
                  </a>
                </h3>
                {/* /.blog-card-two__title */}
                <p className="blog-card-two__text">
                  We help companies develop powerful corporate social
                  responsibie grantmaking, and employee engagement strategies.
                </p>
                {/* /.blog-card-two__text */}
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__link"
                >
                  <i className="icon-duble-arrow" />
                  <span>Read More</span>{" "}
                </a>
                {/* /.blog-card-tow__link */}
              </div>
              {/* /.blog-card-two__content */}
            </div>
            {/* /.blog-card-two */}
          </div>
          {/* /.item */}
          <div className="item">
            <div
              className="blog-card-two"
              style={{
                backgroundImage: 'url("assets/images/blog/blog-bg-2-1.png")',
              }}
            >
              <div className="blog-card-two__image">
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__image__link"
                >
                  <img
                    src="assets/images/blog/blog-2-2.jpg"
                    alt="Trusted by the biggest nonprofits, events & companies in the world"
                  />
                  <span className="blog-card-two__image__icon" />{" "}
                </a>
                {/* /.blog-card-two__image__link */}
                <div className="blog-card-two__date">
                  <h4 className="blog-card-two__date__day blog-card-two__date__text">
                    20
                  </h4>
                  {/* /.blog-card-two__date__day */}
                  <h4 className="blog-card-two__date__month blog-card-two__date__text">
                    OCTOBER
                  </h4>
                  {/* /.blog-card-two__date__month */}
                </div>
                {/* /.blog-card-two__date */}
              </div>
              {/* /.blog-card-two__image */}
              <div className="blog-card-two__content">
                <h3 className="blog-card-two__title">
                  <a href="blog-details-right.html">
                    Trusted by the biggest nonprofits, events &amp; companies in
                    the world
                  </a>
                </h3>
                {/* /.blog-card-two__title */}
                <p className="blog-card-two__text">
                  We help companies develop powerful corporate social
                  responsibie grantmaking, and employee engagement strategies.
                </p>
                {/* /.blog-card-two__text */}
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__link"
                >
                  <i className="icon-duble-arrow" />
                  <span>Read More</span>{" "}
                </a>
                {/* /.blog-card-tow__link */}
              </div>
              {/* /.blog-card-two__content */}
            </div>
            {/* /.blog-card-two */}
          </div>
          {/* /.item */}
          <div className="item">
            <div
              className="blog-card-two"
              style={{
                backgroundImage: 'url("assets/images/blog/blog-bg-2-1.png")',
              }}
            >
              <div className="blog-card-two__image">
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__image__link"
                >
                  <img
                    src="assets/images/blog/blog-2-1.jpg"
                    alt="Promoting The Rights of Child with there lifestyle One morning, when Gregor"
                  />
                  <span className="blog-card-two__image__icon" />{" "}
                </a>
                {/* /.blog-card-two__image__link */}
                <div className="blog-card-two__date">
                  <h4 className="blog-card-two__date__day blog-card-two__date__text">
                    15
                  </h4>
                  {/* /.blog-card-two__date__day */}
                  <h4 className="blog-card-two__date__month blog-card-two__date__text">
                    SEPTEMBER
                  </h4>
                  {/* /.blog-card-two__date__month */}
                </div>
                {/* /.blog-card-two__date */}
              </div>
              {/* /.blog-card-two__image */}
              <div className="blog-card-two__content">
                <h3 className="blog-card-two__title">
                  <a href="blog-details-right.html">
                    Promoting The Rights of Child with there lifestyle One
                    morning, when Gregor
                  </a>
                </h3>
                {/* /.blog-card-two__title */}
                <p className="blog-card-two__text">
                  We help companies develop powerful corporate social
                  responsibie grantmaking, and employee engagement strategies.
                </p>
                {/* /.blog-card-two__text */}
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__link"
                >
                  <i className="icon-duble-arrow" />
                  <span>Read More</span>{" "}
                </a>
                {/* /.blog-card-tow__link */}
              </div>
              {/* /.blog-card-two__content */}
            </div>
            {/* /.blog-card-two */}
          </div>
          {/* /.item */}
          <div className="item">
            <div
              className="blog-card-two"
              style={{
                backgroundImage: 'url("assets/images/blog/blog-bg-2-1.png")',
              }}
            >
              <div className="blog-card-two__image">
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__image__link"
                >
                  <img
                    src="assets/images/blog/blog-2-2.jpg"
                    alt="Trusted by the biggest nonprofits, events & companies in the world"
                  />
                  <span className="blog-card-two__image__icon" />{" "}
                </a>
                {/* /.blog-card-two__image__link */}
                <div className="blog-card-two__date">
                  <h4 className="blog-card-two__date__day blog-card-two__date__text">
                    20
                  </h4>
                  {/* /.blog-card-two__date__day */}
                  <h4 className="blog-card-two__date__month blog-card-two__date__text">
                    OCTOBER
                  </h4>
                  {/* /.blog-card-two__date__month */}
                </div>
                {/* /.blog-card-two__date */}
              </div>
              {/* /.blog-card-two__image */}
              <div className="blog-card-two__content">
                <h3 className="blog-card-two__title">
                  <a href="blog-details-right.html">
                    Trusted by the biggest nonprofits, events &amp; companies in
                    the world
                  </a>
                </h3>
                {/* /.blog-card-two__title */}
                <p className="blog-card-two__text">
                  We help companies develop powerful corporate social
                  responsibie grantmaking, and employee engagement strategies.
                </p>
                {/* /.blog-card-two__text */}
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__link"
                >
                  <i className="icon-duble-arrow" />
                  <span>Read More</span>{" "}
                </a>
                {/* /.blog-card-tow__link */}
              </div>
              {/* /.blog-card-two__content */}
            </div>
            {/* /.blog-card-two */}
          </div>
          {/* /.item */}
          <div className="item">
            <div
              className="blog-card-two"
              style={{
                backgroundImage: 'url("assets/images/blog/blog-bg-2-1.png")',
              }}
            >
              <div className="blog-card-two__image">
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__image__link"
                >
                  <img
                    src="assets/images/blog/blog-2-1.jpg"
                    alt="Promoting The Rights of Child with there lifestyle One morning, when Gregor"
                  />
                  <span className="blog-card-two__image__icon" />{" "}
                </a>
                {/* /.blog-card-two__image__link */}
                <div className="blog-card-two__date">
                  <h4 className="blog-card-two__date__day blog-card-two__date__text">
                    15
                  </h4>
                  {/* /.blog-card-two__date__day */}
                  <h4 className="blog-card-two__date__month blog-card-two__date__text">
                    SEPTEMBER
                  </h4>
                  {/* /.blog-card-two__date__month */}
                </div>
                {/* /.blog-card-two__date */}
              </div>
              {/* /.blog-card-two__image */}
              <div className="blog-card-two__content">
                <h3 className="blog-card-two__title">
                  <a href="blog-details-right.html">
                    Promoting The Rights of Child with there lifestyle One
                    morning, when Gregor
                  </a>
                </h3>
                {/* /.blog-card-two__title */}
                <p className="blog-card-two__text">
                  We help companies develop powerful corporate social
                  responsibie grantmaking, and employee engagement strategies.
                </p>
                {/* /.blog-card-two__text */}
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__link"
                >
                  <i className="icon-duble-arrow" />
                  <span>Read More</span>{" "}
                </a>
                {/* /.blog-card-tow__link */}
              </div>
              {/* /.blog-card-two__content */}
            </div>
            {/* /.blog-card-two */}
          </div>
          {/* /.item */}
          <div className="item">
            <div
              className="blog-card-two"
              style={{
                backgroundImage: 'url("assets/images/blog/blog-bg-2-1.png")',
              }}
            >
              <div className="blog-card-two__image">
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__image__link"
                >
                  <img
                    src="assets/images/blog/blog-2-2.jpg"
                    alt="Trusted by the biggest nonprofits, events & companies in the world"
                  />
                  <span className="blog-card-two__image__icon" />{" "}
                </a>
                {/* /.blog-card-two__image__link */}
                <div className="blog-card-two__date">
                  <h4 className="blog-card-two__date__day blog-card-two__date__text">
                    20
                  </h4>
                  {/* /.blog-card-two__date__day */}
                  <h4 className="blog-card-two__date__month blog-card-two__date__text">
                    OCTOBER
                  </h4>
                  {/* /.blog-card-two__date__month */}
                </div>
                {/* /.blog-card-two__date */}
              </div>
              {/* /.blog-card-two__image */}
              <div className="blog-card-two__content">
                <h3 className="blog-card-two__title">
                  <a href="blog-details-right.html">
                    Trusted by the biggest nonprofits, events &amp; companies in
                    the world
                  </a>
                </h3>
                {/* /.blog-card-two__title */}
                <p className="blog-card-two__text">
                  We help companies develop powerful corporate social
                  responsibie grantmaking, and employee engagement strategies.
                </p>
                {/* /.blog-card-two__text */}
                <a
                  href="blog-details-right.html"
                  className="blog-card-two__link"
                >
                  <i className="icon-duble-arrow" />
                  <span>Read More</span>{" "}
                </a>
                {/* /.blog-card-tow__link */}
              </div>
              {/* /.blog-card-two__content */}
            </div>
            {/* /.blog-card-two */}
          </div>
          {/* /.item */}
        </div>
        {/* /.blog-two__carousel */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default LatestNews;
