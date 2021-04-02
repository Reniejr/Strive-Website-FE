import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//UTILITIES IMPORTS

//BOOTSTRAP IMPORTS
import { ProgressBar } from "react-bootstrap";

//STYLE IMPORTS
import "./LinkedInOpt.scss";

export default function LinkedInOpt() {
  const linkedInInfo = useSelector(
    (state) => state.user.user.studentInfo.linkedInStatus
  );

  const [linkedInStatus, setLinkedInStatus] = useState({
    connections: 0,
    posts: 0,
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLinkedInStatus({
  //       connections: 65,
  //       posts: 10,
  //     });
  //   }, 2000);
  // }, []);

  const onMouseEnter = () => {
    setTimeout(() => {
      setLinkedInStatus({
        connections: 65,
        posts: 10,
      });
    }, 500);
  };

  const onMouseLeave = () => {
    setTimeout(() => {
      setLinkedInStatus({
        connections: 0,
        posts: 0,
      });
    }, 500);
  };

  return (
    <div
      className="linkedIn-opt student-menu-opt"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-opt"></div>
      <i className="fab fa-linkedin"></i>
      <p className="student-menu-opt-title">LinkedIn Status</p>
      <div className="linkedIn-status">
        <div className="profile-linkedin">
          <div className="basic-info">
            <p>
              First Name: <span>{linkedInInfo.firstName}</span>{" "}
            </p>
            <p>
              Last Name: <span>{linkedInInfo.lastName}</span>{" "}
            </p>
            <p>
              Address: <span></span>{" "}
            </p>
            <p>
              Birth Date: <span></span>{" "}
            </p>
          </div>
          <div className="profile-img">
            <img src={linkedInInfo.linkedInPic} alt="" />
          </div>
        </div>
      </div>
      <div className="connection-status">
        <h2>Are You Active?</h2>
        <p>{linkedInStatus.connections} Connections</p>
        <ProgressBar
          now={linkedInStatus.connections}
          className="connections"
          variant={linkedInStatus.connections > 50 ? "info" : "danger"}
        />
        <p>{linkedInStatus.posts / 10} Posts</p>
        <ProgressBar
          now={linkedInStatus.posts}
          className="posts"
          variant={linkedInStatus.posts < 100 ? "danger" : "success"}
        />
        <h6
          onClick={() =>
            window.location.assign("https://www.linkedin.com/feed/")
          }
        >
          Visit your linkedIn account
        </h6>
      </div>
    </div>
  );
}
