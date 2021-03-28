import React from "react";

//BOOTSTRAP IMPORTS
import { Modal, Button } from "react-bootstrap";
import {
  LowerTemplate,
  UpperTemplate,
} from "../../../../_Main/Templates/Strive01/Strive01";

//STYLE IMPORTS
import "./ModalExam.scss";

export default function ModalExam({ state, functions, content, children }) {
  return (
    <Modal show={state.show} onHide={functions.handleClose}>
      <Modal.Header>
        <Modal.Title>{content.title}</Modal.Title>
        <UpperTemplate />
      </Modal.Header>
      <Modal.Body style={content.style}>{children}</Modal.Body>
      <Modal.Footer>
        <LowerTemplate />
        <Button onClick={functions.handleClose}>{content.button}</Button>
      </Modal.Footer>
    </Modal>
  );
}
