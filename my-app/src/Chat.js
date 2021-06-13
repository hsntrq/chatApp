import "./styles/chat.css";
import Conversation from "./components/Conversation";
import Message from "./components/Message";
import ChatOnline from "./components/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./components/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export default function Messenger() {
  // const [conversations, setConversations] = useState([]);
  // const [currentChat, setCurrentChat] = useState(null);
  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState("");
  // const [arrivalMessage, setArrivalMessage] = useState(null);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  // const socket = useRef();
  const { user } = useContext(AuthContext);
  console.log(user);
  // const scrollRef = useRef();

  // useEffect(() => {
  //   socket.current = io("https://localhost:8000");
  //   socket.current.on("getMessage", (data) => {
  //     setArrivalMessage({
  //       sender: data.senderId,
  //       text: data.text,
  //       createdAt: Date.now(),
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   arrivalMessage &&
  //     currentChat?.members.includes(arrivalMessage.sender) &&
  //     setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage, currentChat]);

  // useEffect(() => {
  //   socket.current.emit("addUser", user._id);
  //   socket.current.on("getUsers", (users) => {
  //     setOnlineUsers(
  //       user.followings.filter((f) => users.some((u) => u.userId === f))
  //     );
  //   });
  // }, [user]);

  // useEffect(() => {
  //   const getConversations = async () => {
  //     try {
  //       const res = await axios.get("/api/messages/" + user._id);
  //       setConversations(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getConversations();
  // }, []);

  // useEffect(() => {
  //   const getMessages = async () => {
  //     try {
  //       const res = await axios.get("/api/messages/" + currentChat?._id);
  //       setMessages(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMessages();
  // }, [currentChat]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const message = {
  //     sender: user._id,
  //     text: newMessage,
  //     conversationId: currentChat._id,
  //   };

  //   const receiverId = currentChat.members.find(
  //     (member) => member !== user._id
  //   );

  //   socket.current.emit("sendMessage", {
  //     senderId: user._id,
  //     receiverId,
  //     text: newMessage,
  //   });

  //   try {
  //     const res = await axios.post("/messages", message);
  //     setMessages([...messages, res.data]);
  //     setNewMessage("");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper chatMenuTop">
            <label for="">
              <i
                className="fa fa-search"
                style={{ color: "white" }}
                aria-hidden="true"
              ></i>
            </label>
            <input placeholder="Search for friends" className="chatMenuInput" />
            {/* {conversations.map((c) => ( */}
            <div>
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
            {/* // ))} */}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {/* {currentChat ? ( */}
            <>
              <div className="chatBoxTop">
                <div className="contact-profile">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>Friend</p>
                  <div className="social-media">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </div>
                {/* {messages.map((m) => ( */}
                <div>
                  <Message />
                  <Message own />
                  <Message own />
                  <Message />
                  <Message />
                  <Message own />
                  <Message />
                  <Message own />
                  <Message />
                  <Message own/>
                  <Message own/>
                  <Message />
                  <Message own/>
                </div>
                {/* // ))} */}
              </div>
              <div className="chatBoxBottom">
                <input
                  className="chatMessageInput"
                  placeholder="write something..."
                  // onChange={(e) => setNewMessage(e.target.value)}
                  // value={newMessage}
                />
                <i
                  className="fa fa-paperclip attachment"
                  aria-hidden="true"
                ></i>
                <button className="submit">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </>
            {/* ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            ) */}
          </div>
        </div>
        {/* <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              // onlineUsers={onlineUsers}
              // currentId={user._id}
              // setCurrentChat={setCurrentChat}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
