import React from "react";

//PERSONAL COMPONENTS IMPORTS
import Banner from "./Sub_Components/0.Banner/Banner";
import UpcomingBatches from "./Sub_Components/1.Upcoming_Batches/UpcomingBatches";
import JoinBanner from "./Sub_Components/2.Join_Banner/JoinBanner";
import Reviews from "./Sub_Components/3.Reviews/Reviews";
import WhyStrive from "./Sub_Components/4.WhyStrive/WhyStrive";
import NextEvents from "./Sub_Components/5.Next_Events/NextEvents";
import Testimonials from "./Sub_Components/6.Testimonials/Testimonials";
import DailySchdeule from "./Sub_Components/7.Daily_Schedule/DailySchdeule";

//STYLE
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div id="landing-page">
      <Banner />
      <UpcomingBatches />
      <JoinBanner />
      <Reviews />
      <WhyStrive />
      <NextEvents />
      <Testimonials />
      <DailySchdeule />
    </div>
  );
}
