import React, { useState } from "react";

//PERSONAL COMPONENTS IMPORTS
import Banner from "./Sub_Components/0.Banner/Banner";
import UpcomingBatches from "./Sub_Components/1.Upcoming_Batches/UpcomingBatches";
import JoinBanner from "./Sub_Components/2.Join_Banner/JoinBanner";
import Reviews from "./Sub_Components/3.Reviews/Reviews";
import WhyStrive from "./Sub_Components/4.WhyStrive/WhyStrive";
import NextEvents from "./Sub_Components/5.Next_Events/NextEvents";
import Testimonials from "./Sub_Components/6.Testimonials/Testimonials";
import DailySchdeule from "./Sub_Components/7.Daily_Schedule/DailySchdeule";
import StriveDifference from "./Sub_Components/8.Strive_Difference/StriveDifference";
import AdmissionProcess from "./Sub_Components/9.Admission_Process/AdmissionProcess";
import JoinDiscord from "./Sub_Components/10.JoinDiscord/JoinDiscord";
import Faq from "./Sub_Components/11.Faq/Faq";
import Footer from "./Sub_Components/12.Footer/Footer";
import JoinStriveModal from "./Sub_Components/13.JoinStriveModal/JoinStriveModal";

//STYLE
import "./LandingPage.scss";

export default function LandingPage() {
  const [show, setShow] = useState(false);

  return (
    <div id="landing-page">
      <JoinStriveModal
        state={{ show }}
        functions={{ handleClose: () => setShow(false) }}
      />
      <Banner functions={{ setShow: () => setShow(true) }} />
      <UpcomingBatches />
      <JoinBanner functions={{ setShow: () => setShow(true) }} />
      <Reviews />
      <WhyStrive functions={{ setShow: () => setShow(true) }} />
      <NextEvents />
      <Testimonials />
      <DailySchdeule />
      <StriveDifference functions={{ setShow: () => setShow(true) }} />
      <AdmissionProcess />
      <JoinDiscord />
      <Faq />
      <Footer />
    </div>
  );
}
