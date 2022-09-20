import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalConatiner">
        <div className="titleCloseBtn">
          <button onClick={() => props.closemodal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className="body">
          <p>
            The next page is awesome! You should move forward, youy will enjoy
          </p>
        </div>
        <div className="footer">
          <button onClick={() => props.closemodal(false)}>cancel </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
