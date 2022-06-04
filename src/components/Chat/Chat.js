import React from "react";
import socketIO from "socket.io-client";
import "./Chat.css";

const ENDPOINT = "http://localhost:5000/";
const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

const Chat = () => {
  socket.on("connect", () => {});

  return <div></div>;
};

export default Chat;
