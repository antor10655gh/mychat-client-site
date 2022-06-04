import React from "react";
import "./Chat.css";
import { user } from "../Join/Join";

const Chat = () => {
  return (
    <div>
      <h1>Hi {user}</h1>
    </div>
  );
};

export default Chat;
