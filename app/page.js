import React from "react";
import HeroBanner from "./components/home/hero-banner/HeroBanner";
import MainSlider from "./components/home/main-slider/MainSlider";
import AboutInfo from "./components/home/about-info/AboutInfo";
import MissionStatement from "./components/home/mission-statement/MissionStatement";
import BestService from "./components/home/best-service/BestService";
import Donations from "./components/home/donations/Donations";
import WhyChooseUs from "./components/home/why-choose-us/WhyChooseUs";
import GlobalReact from "./components/home/global-react/GlobalReact";
import UpcomingEvents from "./components/home/upcoming-events/UpcomingEvents";
import Gallery from "./components/home/gallery/Gallery";
import Testimonials from "./components/home/testimonials/Testimonials";
import Members from "./components/home/members/Members";
import LatestNews from "./components/home/latest-news/LatestNews";

const page = () => {
  return (
    <div className="page-wrapper">
      <HeroBanner />
      <MainSlider />
      <AboutInfo />
      <MissionStatement />
      <BestService />
      <Donations />
      <WhyChooseUs />
      <GlobalReact />
      <UpcomingEvents />
      <Gallery />
      <Testimonials />
      <Members />
      <LatestNews />
    </div>
  );
};

export default page;
