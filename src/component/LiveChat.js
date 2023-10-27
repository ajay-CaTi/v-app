import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "./utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);
  //   console.log(chatMessage);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <div className=" h-[300px] ml-2 p-2 border border-black bg-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="ml-2 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "random", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black w-64 "
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button className="px-2 mx-1 bg-green-200 hover:bg-green-100 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
