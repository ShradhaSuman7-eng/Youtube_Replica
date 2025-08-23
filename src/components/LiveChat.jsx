import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const[liveMessage,setLiveMessage]=useState("")

  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🎉",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="border w-full h-[600px] bg-slate-100 rounded-lg shadow-sm overflow-y-auto flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

<form
  onSubmit={(e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Shradha",
        message: liveMessage,
      })
    );
    setLiveMessage(""); // optional: clears input after sending
  }}
  className="w-full p-2 border border-black"
>
  <input
    type="text"
    className="w-60 px-2 border border-black"
    value={liveMessage}
    onChange={(e) => setLiveMessage(e.target.value)}
  />
  <button className="px-2 mx-2 bg-green-100">Send</button>
</form>

     
    </>
  ); 
};

export default LiveChat;
