import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setName] = useState("");
  return (
    <div className="joinPage">
      <div className="joinContainer mx-auto px-5 py-3">
        <div className="d-flex flex-column  align-items-center ">
          <img width="100px" src={logo} alt="logo.png" />
          <h1 className="text-white">
            Welcome to <span style={{ color: "orange" }}>MyChat</span>
          </h1>
        </div>
        <div className="d-flex justify-content-center align-items-center p-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="joinInput"
            placeholder="Enter your name"
          />
          <Link onClick={(e) => (!name ? e.preventDefault() : null)} to="/chat">
            <button
              onClick={sendUser}
              className="btn btn-sm btn-warning border-0 rounded-0"
            >
              Join
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
export { user };
