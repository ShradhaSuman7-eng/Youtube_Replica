import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-1 items-center text-center p-4 shadow-sm ">
      <div>
          <i class="fa-solid fa-circle-user"></i>
      </div>
        <div className="flex gap-4">
          <span className="font-extrabold">{name}</span>
          <span className="text-[12px]">{message}</span>
        </div>
      </div>
  );
};

export default ChatMessage;
