import React from "react";

//BOOTSTRAP IMPORTS
import { Modal, Button } from "react-bootstrap";

//STYLE IMPORTS
import "./ResultModal.scss";

export default function ResultModal({ state, functions }) {
  return (
    <Modal show={state.show} onHide={functions.handleClose}>
      <Modal.Header>
        <Modal.Title>Strive School</Modal.Title>
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
        {state.success ? (
          <>
            <h4>Congratulations!</h4>
            <p>
              Welcome on Strive School. <br /> You will receive an email with
              instructions to follow in order to start your journey with us.
            </p>
          </>
        ) : (
          <>
            <p>
              We are sorry, you did not pass the admission test. We advice you
              to try to learn the basic stuff of the IT sector and try again to
              join us. <br /> Strive and do not let this exam stop you
            </p>
          </>
        )}
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
        <Button onClick={functions.handleClose}>Check Results</Button>
      </Modal.Footer>
    </Modal>
  );
}
