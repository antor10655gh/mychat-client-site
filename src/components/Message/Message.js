import React from "react";
import "./Message.css";
import audioFile from "../../audio/notification_sound.mp3";

const audio = new Audio(`${audioFile}`);

const Message = ({ user, message, className }) => {
  if (className === "left") {
    audio.play();
  }
  if (user) {
    return (
      <div className={`messageBox ${className}`}>
        <span className="text-start">{`${user}: ${message}`}</span>
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
