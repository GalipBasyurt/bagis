"use client";
import { useEffect } from "react";

const MainSlider = () => {
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;

    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        $(".main-slider-two__carousel").owlCarousel({
          loop: true,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          items: 1,
          autoplay: true,
          autoplayTimeout: 7000,
          smartSpeed: 1000,
          nav: false,
          dots: true,
          margin: 0,
        });
        console.log("Owl Carousel initialized successfully!");
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
    <section className="main-slider-two">
      <div className="main-slider-two__wrapper">
        <div
          className="main-slider-two__carousel cleenhearts-owl__carousel owl-carousel"
          data-owl-options='{
            "loop": true,
            "animateOut": "fadeOut",
            "animateIn": "fadeIn",
            "items": 1,
            "autoplay": true,
            "autoplayTimeout": 7000,
            "smartSpeed": 1000,
            "nav": false,
            "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
            "dots": true,
            "margin": 0
          }'
        >
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.jpg)",
                }}
              />
              <div className="main-slider-two__content">
                <a
                  href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                  className="main-slider-two__btn video-button video-popup"
                  aria-label="Watch video on YouTube"
                >
                  <span className="icon-play" />
                  <i className="video-button__ripple" />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-2.jpg)",
                }}
              />
              <div className="main-slider-two__content">
                <a
                  href="https://www.youtube.com/watch?v=81YE36obkk0"
                  className="main-slider-two__btn video-button video-popup"
                  aria-label="Watch video on YouTube"
                >
                  <span className="icon-play" />
                  <i className="video-button__ripple" />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-3.jpg)",
                }}
              />
              <div className="main-slider-two__content">
                <a
                  href="https://www.youtube.com/watch?v=0MuL8fd3pb8"
                  className="main-slider-two__btn video-button video-popup"
                  aria-label="Watch video on YouTube"
                >
                  <span className="icon-play" />
                  <i className="video-button__ripple" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
