import React from "react";
import "./Message.css";

const Message = ({ user, message, className }) => {
  if (user) {
    return (
      <div className={`messageBox ${className}`}>
        <span>{`${user}: ${message}`}</span>
      </div>
    );
  } else {
    return (
      <div className={`messageBox ${className}`}>
        <span>{`You: ${message}`}</span>
      </div>
    );
  }
};

export default Message;
