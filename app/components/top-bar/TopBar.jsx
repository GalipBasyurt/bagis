import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-two topbar-one">
      <div className="container-fluid">
        <div className="topbar-one__inner">
          <ul className="list-unstyled topbar-one__info">
            <li className="topbar-one__info__item">
              <span className="topbar-one__info__icon icon-paper-plane" />
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </li>
          </ul>
          {/* /.list-unstyled topbar-one__info */}
          <div className="topbar-two__logo">
            <a href="index.html">
              <img
                src="assets/images/logo-dark.png"
                alt="Cleenhearts HTML"
                width={159}
              />
            </a>
          </div>
          {/* /.topbar-two__logo */}
          <div className="topbar-one__right">
            <div className="main-header__cart">
              <a href="cart.html" className="main-header__cart__link">
                <span className="icon-trolley" />
              </a>
              <span className="main-header__cart__quantity">0</span>
            </div>
            {/* /.main-header__cart */}
            <div className="social-link topbar-one__social">
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
            {/* /.topbar-one__social */}
          </div>
          {/* /.topbar-one__right */}
        </div>
        {/* /.topbar-one__inner */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default TopBar;
