import React from "react";

//STYLE IMPORTS
import "./JoinBanner.scss";

export default function JoinBanner({ functions }) {
  return (
    <section id="join-banner">
      <div>
        <span>
          <h2>Join the next batch</h2>
          <p>Kick off your career in tech with our AI or Web programs</p>
        </span>
        <button onClick={functions.setShow}>Apply Now</button>
      </div>
    </section>
  );
}
