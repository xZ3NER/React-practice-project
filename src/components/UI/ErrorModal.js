import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Buttom from "./Button";
import Wrapper from "../Helpers/Wrapper";

import styles from "./ErrorModal.module.css";

/* 5.- Portals */
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ErrorDisplay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Buttom onClick={props.onConfirm}>Okay</Buttom>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorDisplay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("error-modal-root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
