import React from "react";

//BOOTSTRAP IMPORTS
import { Container } from "react-bootstrap";

//STYLE IMPORTS
import "./JoinDiscord.scss";

export default function JoinDiscord() {
  return (
    <section id="join-discord">
      <Container>
        <h2>
          Join our Discord channel and meet our teachers, students, and alumni
        </h2>
        <button>Join our Discord</button>
      </Container>
    </section>
  );
}
