import React from "react";
import "../assets/scss/components/modal.scss";
import { Container } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  emailMessage: string;
  isModalOpen: boolean;
  closeFunc: () => void;
};

export const modal = ({ emailMessage, isModalOpen, closeFunc }: Props) => {
  return (
    <Container maxWidth="sm">
      <Modal show={isModalOpen} onHide={closeFunc} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact me</Modal.Title>
        </Modal.Header>
        <Modal.Body>{emailMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFunc}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default modal;
