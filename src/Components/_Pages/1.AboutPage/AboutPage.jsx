import React from "react";

//PERSONAL COMPONENTS IMPORTS
import OurStory from "./Sub_Components/Our_Story/OurStory";
import OurStaff from "./Sub_Components/Our_Staff/OurStaff";

//STYLE IMPORTS
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div id="about-page">
      <OurStory />
      <OurStaff />
    </div>
  );
}
