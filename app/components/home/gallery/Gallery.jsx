"use client";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;

    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        $(".events-gallery__carousel").owlCarousel({
          loop: true,
          items: 5,
          autoplay: true,
          autoplayTimeout: 7000,
          smartSpeed: 1000,
          nav: false,
          dots: true,
          margin: 0,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
            1500: { items: 5 },
          },
        });
      } else if (retryCount < maxRetries) {
        retryCount += 1;
        setTimeout(initCarousel, 100);
      } else {
        console.error("Failed to load Owl Carousel after maximum retries.");
      }
    };

    initCarousel();
  }, []);

  return (
    <section className="events-gallery">
      <div
        className="events-gallery__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-carousel"
        data-owl-options='{
        "loop": true,
        "items": 5,
        "autoplay": true,
        "autoplayTimeout": 7000,
        "smartSpeed": 1000,
        "nav": false,
        "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
        "dots": true,
        "margin": 0,
        "responsive": {
        	"0": {
        		"items": 1
        	},
        	"768": {
        		"items": 2
        	},
        	"992": {
        		"items": 3
        	},
        	"1200": {
        		"items": 4
        	},
        	"1500": {
        		"items": 5
        	}
        }
        }'
      >
        <div className="item">
          <div className="events-gallery__item">
            <div className="events-gallery__image">
              <img
                src="assets/images/gallery/events-gallery-1-1.jpg"
                alt="clean heart events gallery"
                className="events-gallery__image__img"
              />
              <a
                href="event-details-right.html"
                className="events-gallery__link"
              >
                <img
                  src="assets/images/resources/instagram.png"
                  alt="instagram"
                />
                <span>clean heart events gallery</span>
              </a>
              {/* /.events-gallery__link */}
            </div>
            {/* /.events-gallery__image */}
          </div>
          {/* /.events-gallery__item */}
        </div>
        <div className="item">
          <div className="events-gallery__item">
            <div className="events-gallery__image">
              <img
                src="assets/images/gallery/events-gallery-1-2.jpg"
                alt="clean heart events gallery"
                className="events-gallery__image__img"
              />
              <a
                href="event-details-right.html"
                className="events-gallery__link"
              >
                <img
                  src="assets/images/resources/instagram.png"
                  alt="instagram"
                />
                <span>clean heart events gallery</span>{" "}
              </a>
              {/* /.events-gallery__link */}
            </div>
            {/* /.events-gallery__image */}
          </div>
          {/* /.events-gallery__item */}
        </div>
        <div className="item">
          <div className="events-gallery__item">
            <div className="events-gallery__image">
              <img
                src="assets/images/gallery/events-gallery-1-3.jpg"
                alt="clean heart events gallery"
                className="events-gallery__image__img"
              />
              <a
                href="event-details-right.html"
                className="events-gallery__link"
              >
                <img
                  src="assets/images/resources/instagram.png"
                  alt="instagram"
                />
                <span>clean heart events gallery</span>{" "}
              </a>
              {/* /.events-gallery__link */}
            </div>
            {/* /.events-gallery__image */}
          </div>
          {/* /.events-gallery__item */}
        </div>
        <div className="item">
          <div className="events-gallery__item">
            <div className="events-gallery__image">
              <img
                src="assets/images/gallery/events-gallery-1-4.jpg"
                alt="clean heart events gallery"
                className="events-gallery__image__img"
              />
              <a
                href="event-details-right.html"
                className="events-gallery__link"
              >
                <img
                  src="assets/images/resources/instagram.png"
                  alt="instagram"
                />
                <span>clean heart events gallery</span>{" "}
              </a>
              {/* /.events-gallery__link */}
            </div>
            {/* /.events-gallery__image */}
          </div>
          {/* /.events-gallery__item */}
        </div>
        <div className="item">
          <div className="events-gallery__item">
            <div className="events-gallery__image">
              <img
                src="assets/images/gallery/events-gallery-1-5.jpg"
                alt="clean heart events gallery"
                className="events-gallery__image__img"
              />
              <a
                href="event-details-right.html"
                className="events-gallery__link"
              >
                <img
                  src="assets/images/resources/instagram.png"
                  alt="instagram"
                />
                <span>clean heart events gallery</span>{" "}
              </a>
              {/* /.events-gallery__link */}
            </div>
            {/* /.events-gallery__image */}
          </div>
          {/* /.events-gallery__item */}
        </div>
      </div>
      {/* /.slider */}
    </section>
  );
};

export default Gallery;
