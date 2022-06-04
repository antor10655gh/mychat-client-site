import React, { useEffect, useState } from "react";
import "./Chat.css";
import { user } from "../Join/Join";
import socketIo from "socket.io-client";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import logo from "../../images/logo-orange.png";
import closeIcon from "../../images/closeIcon.png";

let socket;

const ENDPOINT = "http://localhost:5000/";

const Chat = () => {
  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("Connected");
      setId(socket.id);
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    // socket.on("leave", (data) => {
    //   console.log(data.user, data.message);
    // });

    return () => {
      //   socket.emit("disconnect");
      //   socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header d-flex justify-content-between align-items-center p-3">
          <div className="d-flex">
            <img src={logo} alt="" />
            <h3 className="px-2 text-white">MyChat</h3>
          </div>
          <a href="/">
            {" "}
            <img width="15px" height="15px" src={closeIcon} alt="" />
          </a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((message) => (
            <Message
              user={message.id === id ? "" : message.user}
              message={message.message}
              className={message.id === id ? "right" : "left"}
            ></Message>
          ))}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input type="text" id="chatInput" placeholder="Message" />
          <button
            onClick={send}
            className="sendBtn btn btn-warning border-0 rounded-0 text-white"
          >
            <span className="px-2 fw-bold">Send</span>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
