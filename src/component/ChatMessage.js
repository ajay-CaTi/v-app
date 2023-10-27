import React from "react";
import iconImg from "./image/userIcon.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <img className="m-1 h-4" src={iconImg} alt="" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
