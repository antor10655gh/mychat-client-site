import React from "react";
import "./Join.css";
import logo from "../../images/logo.png";

const Join = () => {
  return (
    <div className="chattingPage">
      <div className="chattingContainer mx-auto px-5 py-3">
        <img src={logo} alt="logo.png" />
        <h1 className="text-white">
          Welcome to <span style={{ color: "orange" }}>MyChat</span>
        </h1>
        <div className="d-flex justify-content-center align-items-center p-3">
          <input type="text" id="joinInput" />
          <button className="btn btn-sm btn-warning border-0 rounded-0">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
