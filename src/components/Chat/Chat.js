import React, { useEffect } from "react";
import "./Chat.css";
import { user } from "../Join/Join";
import socketIo from "socket.io-client";

const ENDPOINT = "http://localhost:5000/";

const Chat = () => {
  const socket = socketIo(ENDPOINT, { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      alert("Connected");
    });

    return () => {};
  }, [socket]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <div className="chatBox"></div>
        <div className="inputBox">
          <input type="text" id="chatInput" />
          <button className="sendBtn btn btn-warning border-0 rounded-0">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
