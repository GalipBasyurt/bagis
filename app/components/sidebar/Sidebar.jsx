import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar-one">
      <div className="sidebar-one__overlay sidebar-btn__toggler" />
      {/* /.siderbar-ovarlay */}
      <div className="sidebar-one__content">
        <span className="sidebar-one__close sidebar-btn__toggler">
          <i className="fa fa-times" />
        </span>
        <div className="sidebar-one__logo sidebar-one__item">
          <a href="index.html" aria-label="logo image">
            <img
              src="assets/images/logo-light.png"
              width={155}
              alt="logo-dark"
            />
          </a>
        </div>
        {/* /.sidebar-one__logo */}
        <div className="sidebar-one__about sidebar-one__item">
          <p className="sidebar-one__about__text">
            Wimply dummy text of the priatype industry orem Ipsum has Maecenas
            quis eros at ante
          </p>
        </div>
        {/* /.sidebar-one__about */}
        <div className="sidebar-one__information sidebar-one__item">
          <h4 className="sidebar-one__title">Information</h4>
          <ul className="sidebar-one__information__list">
            <li>
              <span className="sidebar-one__information__icon icon-location" />
              <address className="sidebar-one__information__address">
                <p className="sidebar-one__information__text">
                  85 Ketch Harbour RoadBensalem, PA 19020
                </p>
              </address>
            </li>
            <li>
              <i className="sidebar-one__information__icon icon-envelope" />
              <p className="sidebar-one__information__text">
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
              </p>
            </li>
            <li>
              <span className="sidebar-one__information__icon icon-phone" />
              <p className="sidebar-one__information__text">
                <a href="tel:(406)555-0120">(406) 555-0120</a>
              </p>
            </li>
          </ul>
        </div>
        {/* /.sidebar-one__information */}
        <div className="sidebar-one__socila social-link sidebar-one__item">
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
        {/* /sidebar-one__socila */}
        <div className="sidebar-one__newsletter sidebar-one__item">
          <label className="sidebar-one__title" htmlFor="sidebar-email">
            Newsletter Subscribe
          </label>
          <form
            action="#"
            className="sidebar-one__newsletter__inner mc-form"
            data-url="MAILCHIMP_FORM_URL"
          >
            <input
              type="email"
              name="sidebar-email"
              id="sidebar-email"
              className="sidebar-one__newsletter__input"
              placeholder="Email Address"
            />
            <button type="submit" className="sidebar-one__newsletter__btn">
              <i className="fa fa-paper-plane" aria-hidden="true" />
            </button>
          </form>
          <div className="mc-form__response" />
          {/* /.mc-form__response */}
        </div>
        {/* /.sidebar-one__form */}
      </div>
      {/* /.sidebar__content */}
    </aside>
  );
};

export default Sidebar;
