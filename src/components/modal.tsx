import React from "react";
import "../assets/scss/modal.scss";
import { Button, Container } from "@mui/material";
import ReactModal from "react-modal";

type Props = {
  emailMessage: string;
  isModalOpen: boolean;
  closeFunc: () => void;
};

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
  },
};

ReactModal.setAppElement("#root");

export const modal = ({ emailMessage, isModalOpen, closeFunc }: Props) => {
  return (
    <Container maxWidth="sm">
      <ReactModal isOpen={isModalOpen} style={customStyles}>
        {emailMessage}
        <Button
          variant="contained"
          color="primary"
          onClick={closeFunc}
        >
          モーダル閉じる
        </Button>
      </ReactModal>
    </Container>
  );
};

export default modal;
