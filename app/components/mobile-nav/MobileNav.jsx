import React from "react";

const MobileNav = () => {
  return (
    <div>
      div class="mobile-nav__wrapper"&gt;
      <div className="mobile-nav__overlay mobile-nav__toggler" />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times" />
        </span>
        <div className="logo-box">
          <a href="index.html" aria-label="logo image">
            <img src="assets/images/logo-light.png" width={155} alt />
          </a>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container" />
        {/* /.mobile-nav__container */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" />
            <a href="mailto:needhelp@cleenhearts.com">
              needhelp@cleenhearts.com
            </a>
          </li>
          <li>
            <i className="fa fa-phone-alt" />
            <a href="tel:(406)555-0120">(406) 555-0120</a>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__social">
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
        {/* /.mobile-nav__social */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
  );
};

export default MobileNav;
