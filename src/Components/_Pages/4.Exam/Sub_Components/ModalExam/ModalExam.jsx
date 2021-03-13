import React from "react";

//BOOTSTRAP IMPORTS
import { Modal, Button } from "react-bootstrap";

//STYLE IMPORTS
import "./ModalExam.scss";

export default function ModalExam({ state, functions }) {
  return (
    <Modal show={state.show} onHide={functions.handleClose}>
      <Modal.Header>
        <Modal.Title>Confirm your email to join the Admission Test</Modal.Title>
        <img
          className="upper-layer"
          src="http://cdn.mcauto-images-production.sendgrid.net/54e79f65f13a4fe3/6f303a33-f59e-4acd-a30b-6f49c0a333be/1369x427.png"
          alt=""
        />
        <img
          className="layer-logo "
          src="http://cdn.mcauto-images-production.sendgrid.net/54e79f65f13a4fe3/be69b44b-4f96-4601-8867-e3382d6cd70a/890x250.png"
          alt=""
        />
      </Modal.Header>
      <Modal.Body>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          onChange={functions.fillModal}
          onKeyDown={functions.fillModal}
          value={state.value}
        />
      </Modal.Body>
      <Modal.Footer>
        <img
          className="lower-layer"
          src="http://cdn.mcauto-images-production.sendgrid.net/54e79f65f13a4fe3/6f303a33-f59e-4acd-a30b-6f49c0a333be/1369x427.png"
          alt=""
        />
        <img
          className="layer-logo"
          src="http://cdn.mcauto-images-production.sendgrid.net/54e79f65f13a4fe3/8c6460dc-b59b-4e94-b208-38d609ea3dd6/200x200.png"
          alt=""
        />
        <Button onClick={functions.handleClose}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}
