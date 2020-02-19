import React from "react";

const modalBackground: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.8)"
};

const modalContainer: React.CSSProperties = {
  width: "25vw",
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

const modalHeading: React.CSSProperties = {
  width: "90%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalClose: React.CSSProperties = {
  width: "10%",
  height: "100%",
  cursor: "pointer",
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

interface OwnProps {
  modalProps: {
    title: string;
    content: string | any;
    onClick?: () => void;
    onClose?: () => void;
  };
}

const Modal: React.FC<OwnProps> = props => {
  const { title, content, onClick, onClose } = props.modalProps;
  return (
    <div style={modalBackground}>
      <div style={modalContainer}>
        <div style={modalTitle}>
          <div style={modalHeading}>{title}</div>
          <div style={modalClose} onClick={onClose}>
            X
          </div>
        </div>
        <div style={modalContent} onClick={onClick}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
