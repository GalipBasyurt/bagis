import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer-two main-footer"
      style={{
        backgroundImage: 'url("assets/images/backgrounds/footer-bg-2-1.png")',
      }}
    >
      <div className="main-footer__top">
        <div className="container">
          <div className="row gutter-y-30">
            <div
              className="col-md-12 col-xl-3 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="footer-widget footer-widget--about">
                <h2 className="footer-widget__title">about clean heart</h2>
                {/* /.footer-widget__title */}
                <p className="footer-widget__about-text">
                  Wimply dummy text of the priatype industry orem Ipsum has
                  Maecenas quis eros at ante
                </p>
              </div>
              {/* /.footer-widget */}
              <a
                href="https://www.google.com/maps/@23.506657,90.3443647,7z?entry=ttu"
                className="footer-widget__map"
              >
                <span className="footer-widget__map__text">View Map</span>
                <span className="footer-widget__map__icon icon-paper-plane" />
              </a>
            </div>
            {/* /.col-md-12 col-xl-3 */}
            <div
              className="col-xl-3 col-md-7 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="footer-widget footer-widget--contact">
                <h2 className="footer-widget__title">Get in touch!</h2>
                {/* /.footer-widget__title */}
                <ul className="list-unstyled footer-widget__info">
                  <li>
                    {" "}
                    <span className="icon-location" />
                    <address>
                      901 N Pitt Str., Suite 170 Alexandria, USA
                    </address>
                  </li>
                  <li>
                    {" "}
                    <span className="icon-phone" />
                    <a href="tel:(406)555-0120">(406) 555-0120</a>
                  </li>
                  <li>
                    {" "}
                    <span className="icon-envelope" />
                    <a href="mailto:needhelp@company.com">
                      needhelp@company.com
                    </a>
                  </li>
                </ul>
                {/* /.list-unstyled */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-xl-3 col-md-7 */}
            <div
              className="col-xl-3 col-md-5 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Quick Links</h2>
                {/* /.footer-widget__title */}
                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="donate-right.html">Give Donation</a>
                  </li>
                  <li>
                    <a href="donate.html">Education Support</a>
                  </li>
                  <li>
                    <a href="events-list.html">Our Campaign</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
                {/* /.list-unstyled footer-widget__links */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-xl-3 col-md-5 */}
            <div
              className="col-md-7 col-xl-3 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="footer-widget footer-widget--subscribe">
                <h2 className="footer-widget__title">Subscribe now</h2>
                {/* /.footer-widget__title */}
                <div className="footer-widget__subscribe">
                  <p className="footer-widget__subscribe__text">
                    Don’t miss our future updates. Get Subscribe today!
                  </p>
                  {/* /.footer-widget__subscribe__text */}
                  <form
                    action="#"
                    className="footer-widget__subscribe__form mc-form"
                    data-url="MAILCHIMP_FORM_URL"
                  >
                    <div className="footer-widget__subscribe__form__inner">
                      <input
                        type="email"
                        name="EMAIL"
                        id="subscribe"
                        placeholder="Enter mail"
                      />
                      <button type="submit">
                        <span className="icon-paper-plane" />
                      </button>
                    </div>
                    {/* /.footer-widget__subscribe__form__inner */}
                    <div className="footer-widget__subscribe__checkbox">
                      <input type="checkbox" id="terms_condition" />
                      <label htmlFor="terms_condition">
                        I accept terms &amp; conditions
                      </label>
                    </div>
                  </form>
                  {/* /.ffooter-widget__subscribe__form__inner */}
                  <div className="mc-form__response" />
                  {/* /.mc-form__response */}
                </div>
                {/* /.footer-widget__subscribe */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-md-7 col-xl-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.main-footer__top */}
      <div className="main-footer__bottom">
        <div
          className="main-footer__bottom__bg"
          style={{
            background:
              'url("assets/images/backgrounds/footer-bottom-bg-1-2.png")',
          }}
        />
        {/* /.main-footer__bottom-bg */}
        <div className="container">
          <div className="main-footer__bottom__inner">
            <div className="footer-two__logo">
              <a href="index.html">
                <img src="assets/images/logo-dark.png" alt={true} width={159} />
              </a>
            </div>
            {/* /.footer-two__logo */}
            <p className="main-footer__copyright">
              © Copyright <span className="dynamic-year" /> CleenHearts All
              Rights Reserved.
            </p>
            <div className="social-link-two">
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
            {/* /.footer-two__social */}
          </div>
          {/* /.main-footer__inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.main-footer__bottom */}
    </footer>
  );
};

export default Footer;
