import React from "react";

const Header = () => {
  return (
    <header className="main-header-two main-header sticky-header sticky-header--two sticky-header--normal">
      <div
        className="main-header-two__bg"
        style={{
          backgroundImage: 'url("assets/images/backgrounds/header-bg.png")',
        }}
      />
      {/* /.main-header-two__bg */}
      <div className="container-fluid">
        <div className="main-header__inner">
          <div className="main-header-two__left">
            <div className="main-header-two__logo">
              <a href="index.html">
                <img
                  src="assets/images/logo-dark.png"
                  alt="demo image"
                  width={159}
                />
              </a>
            </div>
            {/* /.main-header-two__logo */}
            <button
              type="button"
              className="main-header-two__sidebar-btn sidebar-btn__toggler"
            >
              <span className="main-header-two__sidebar-btn__line" />
              <span className="main-header-two__sidebar-btn__line" />
              <span className="main-header-two__sidebar-btn__line" />
            </button>
            {/* /.main-header-two__sidebar-btn */}
          </div>
          {/* /.main-header-two__left */}
          <nav className="main-header__nav main-menu main-menu--two">
            <ul className="main-menu__list">
              <li className="megamenu megamenu-clickable megamenu-clickable--toggler">
                <a href="index.html">Demos</a>
                <ul>
                  <li>
                    <div className="megamenu-popup">
                      <a href="#" className="megamenu-clickable--close">
                        <span className="icon-close" />
                      </a>
                      {/* /.megamenu-clickable--close */}
                      <div className="megamenu-popup__content">
                        <div className="demo-one">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-4.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-4.html"
                                        className="cleenhearts-btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          Multi Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-4-one-page.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          One Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-4.html">Home Page 04</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-5.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-5.html"
                                        className="cleenhearts-btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          Multi Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-5-one-page.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          One Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-5.html">Home Page 05</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-1.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          Multi Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-one-page.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          One Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index.html">Home Page 01</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-2.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-2.html"
                                        className="cleenhearts-btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          Multi Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-2-one-page.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          One Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-2.html">Home Page 02</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-3.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-3.html"
                                        className="cleenhearts-btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          Multi Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-3-one-page.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          One Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-3.html">Home Page 03</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-dark.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-dark.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          View Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-dark.html">Home Dark</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-boxed.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-boxed.html"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          View Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-boxed.html">Home Boxed</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-4">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="assets/images/landing/home-rtl.jpg"
                                      alt="demo image"
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-rtl.html#googtrans(en%7car)"
                                        className="cleenhearts-btn demo-one__btn"
                                      >
                                        <div className="cleenhearts-btn__icon-box">
                                          <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow" />
                                          </div>
                                        </div>
                                        <span className="cleenhearts-btn__text">
                                          View Page
                                        </span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-rtl.html#googtrans(en%7car)">
                                        Home RTL
                                      </a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                            </div>
                            {/* /.row */}
                          </div>
                          {/* /.container */}
                        </div>
                        {/* /.demos-one */}
                      </div>
                      {/* /.megamenu-popup__content */}
                    </div>
                    {/* /.megamenu-popup */}
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li className="dropdown">
                <a href="#">Donations</a>
                <ul>
                  <li>
                    <a href="donations-grid.html">Donations Grid</a>
                  </li>
                  <li>
                    <a href="donations-list.html">Donations List</a>
                  </li>
                  <li>
                    <a href="donations-carousel.html">Donations Carousel 01</a>
                  </li>
                  <li>
                    <a href="donations-carousel-2.html">
                      Donations Carousel 02
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Donation Details</a>
                    <ul>
                      <li>
                        <a href="donation-details.html">No sidebar</a>
                      </li>
                      <li>
                        <a href="donation-details-left.html">Left sidebar</a>
                      </li>
                      <li>
                        <a href="donation-details-right.html">Right sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Donate Now</a>
                    <ul>
                      <li>
                        <a href="donate.html">No sidebar</a>
                      </li>
                      <li>
                        <a href="donate-left.html">Left sidebar</a>
                      </li>
                      <li>
                        <a href="donate-right.html">Right sidebar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="volunteer.html">Our Volunteer</a>
                  </li>
                  <li>
                    <a href="volunteer-carousel.html">Our Volunteer Carousel</a>
                  </li>
                  <li>
                    <a href="volunteer-details.html">Volunteer Details</a>
                  </li>
                  <li>
                    <a href="become-a-volunteer.html">Become a Volunteer</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing Tables</a>
                  </li>
                  <li>
                    <a href="pricing-carousel.html">Pricing Tables Carousel</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                    <ul>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="gallery-grid.html">Gallery Grid</a>
                      </li>
                      <li>
                        <a href="gallery-filter.html">Gallery filter</a>
                      </li>
                      <li>
                        <a href="gallery-carousel.html">Gallery Carousel</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="faq.html">FAQS</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="404.html">404 Error</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">events</a>
                <ul>
                  <li>
                    <a href="events-grid.html">Events Grid</a>
                  </li>
                  <li>
                    <a href="events-list.html">Events List</a>
                  </li>
                  <li>
                    <a href="events-carousel.html">Events Carousel 01</a>
                  </li>
                  <li>
                    <a href="events-carousel-2.html">Events Carousel 02</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Event Details</a>
                    <ul>
                      <li>
                        <a href="event-details.html">No sidebar</a>
                      </li>
                      <li>
                        <a href="event-details-left.html">Left sidebar</a>
                      </li>
                      <li>
                        <a href="event-details-right.html">Right sidebar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Shop</a>
                <ul>
                  <li className="dropdown">
                    <a href="#">Products</a>
                    <ul>
                      <li>
                        <a href="products.html">No sidebar</a>
                      </li>
                      <li>
                        <a href="products-left.html">Left sidebar</a>
                      </li>
                      <li>
                        <a href="products-right.html">Right sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="products-carousel.html">Products carousel</a>
                  </li>
                  <li>
                    <a href="product-details.html">Product details</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">News</a>
                <ul>
                  <li className="dropdown">
                    <a href="#">News grid</a>
                    <ul>
                      <li>
                        <a href="blog-grid.html">No sidebar</a>
                      </li>
                      <li>
                        <a href="blog-grid-left.html">Left sidebar</a>
                      </li>
                      <li>
                        <a href="blog-grid-right.html">Right sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">News list</a>
                    <ul>
                      <li>
                        <a href="blog-list.html">No sidebar</a>
                      </li>
                      <li>
                        <a href="blog-list-left.html">Left sidebar</a>
                      </li>
                      <li>
                        <a href="blog-list-right.html">Right sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-carousel.html">News carousel 01</a>
                  </li>
                  <li>
                    <a href="blog-carousel-2.html">News carousel 02</a>
                  </li>
                  <li>
                    <a href="blog-carousel-3.html">News carousel 03</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">News details</a>
                    <ul>
                      <li>
                        <a href="blog-details.html">No sidebar</a>
                      </li>
                      <li>
                        <a href="blog-details-left.html">Left sidebar</a>
                      </li>
                      <li>
                        <a href="blog-details-right.html">Right sidebar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* /.main-header__nav */}
          <div className="main-header__right">
            <button
              type="button"
              className="main-header-two__sidebar-btn sidebar-btn__toggler"
            >
              <span className="main-header-two__sidebar-btn__line" />
              <span className="main-header-two__sidebar-btn__line" />
              <span className="main-header-two__sidebar-btn__line" />
            </button>
            {/* /.main-header-two__sidebar-btn */}
            <div className="mobile-nav__btn mobile-nav__toggler">
              <span />
              <span />
              <span />
            </div>
            {/* /.mobile-nav__toggler */}
            <a
              href="donate.html"
              className="cleenhearts-btn cleenhearts-btn--border-base main-header__btn"
            >
              <div className="cleenhearts-btn__icon-box">
                <div className="cleenhearts-btn__icon-box__inner">
                  <span className="icon-donate" />
                </div>
              </div>
              <span className="cleenhearts-btn__text">donate now</span>
            </a>
            {/* /.thm-btn main-header__btn */}
          </div>
          {/* /.main-header__right */}
        </div>
        {/* /.main-header__inner */}
      </div>
      {/* /.container-fluid */}
    </header>
  );
};

export default Header;
