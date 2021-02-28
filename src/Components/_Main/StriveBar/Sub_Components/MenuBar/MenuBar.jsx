import React from "react";
import { HashLink } from "react-router-hash-link";

//STYLE IMPORTS
import "./MenuBar.scss";

export default function MenuBar() {
  return (
    <ul className="strive-menu-bar">
      <li>
        Info
        <div className="info-sublist">
          <ul>
            <li>
              Stories & Reviews
              <ul className="sublist-list">
                <li>
                  <HashLink to="/#reviews" smooth={true}>
                    Reviews
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#testimonials" smooth={true}>
                    Stories
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              Why Strive
              <ul className="sublist-list">
                <li>
                  <HashLink to="/#why-strive" smooth={true}>
                    Why Strive
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#strive-difference" smooth={true}>
                    Strive vs Other
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink to="/#next-events" smooth={true}>
                Events
              </HashLink>
            </li>
            <li>
              <HashLink to="/#admission-process" smooth={true}>
                Admission Process
              </HashLink>
            </li>
          </ul>
        </div>
      </li>
      <li>
        About
        <div className="about-sublist">
          <ul>
            <li>
              Batches
              <ul className="sublist-list">
                <li>
                  <HashLink to="/#upcomingBatches" smooth={true}>
                    Upcoming Batches
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#daily-schdeule" smooth={true}>
                    Daily Schedule
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              About Us
              <ul className="sublist-list">
                <li>
                  <HashLink to="/about/#about-page" smooth={true}>
                    Our Story
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/about/#our-staff" smooth={true}>
                    Our Staff
                  </HashLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <HashLink to="/#faq" smooth={true}>
          FAQ
        </HashLink>
      </li>
      <li>
        <HashLink to="/#footer" smooth={true}>
          Contacts
        </HashLink>
      </li>
    </ul>
  );
}
