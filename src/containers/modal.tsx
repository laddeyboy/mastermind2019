import React from "react";

const modalContainerStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.8)"
};

const modalWindow: React.CSSProperties = {
  width: "50vw",
  height: "50vh",
  backgroundColor: "gray",
  position: "absolute",
  top: "calc(50vh / 2)",
  left: "calc(50vw / 2)",
  display: "flex",
  flexDirection: "column"
};

const modalTitle: React.CSSProperties = {
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  color: "white",
  backgroundColor: "black"
};

const modalContent: React.CSSProperties = {
  width: "100%",
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

interface OwnProps {
  modalProps: {
    title: string;
    content: string;
    onClick: () => void;
  };
}

const Modal: React.FC<OwnProps> = props => {
  return (
    <div style={modalContainerStyle}>
      <div style={modalWindow}>
        <div style={modalTitle}>{props.modalProps.title}</div>
        <div style={modalContent} onClick={props.modalProps.onClick}>
          {props.modalProps.content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
