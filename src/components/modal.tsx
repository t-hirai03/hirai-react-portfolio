import React from "react";
import "../assets/scss/components/modal.scss";
import { Button, Container } from "@mui/material";
import ReactModal from "react-modal";
import modalCloseIcon from "../assets/image/components/modal/modal-close.svg";

type Props = {
  emailMessage: string;
  isModalOpen: boolean;
  closeFunc: () => void;
};

const modalStyle = {
  overlay: {
    zIndex: 99999,
    backgroundColor: "rgba(0,0,0,0.49)",
  },
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    minWidth: "40%",
    maxWidth: "600px",
    padding: "0",
    inset: "40% auto auto 50%",
  },
};

ReactModal.setAppElement("#root");

export const modal = ({ emailMessage, isModalOpen, closeFunc }: Props) => {
  return (
    <Container maxWidth="sm">
      <ReactModal isOpen={isModalOpen} style={modalStyle}>
        <div className="modal-header">
          <img src={modalCloseIcon} onClick={closeFunc} alt="modalCloseIcon" />
        </div>
        <div className="modal-contents">{emailMessage}</div>
      </ReactModal>
    </Container>
  );
};

export default modal;
