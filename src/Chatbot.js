import React from 'react';
import Chatbotx from 'react-chatbot-kit';
import config from "./Chatbot/config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";


import './App.css';


function Chatbot() {
  return (
    <div class = 'chatbot'>
      <div style ={{ maxWidth: "300px" }}>
        <Chatbotx 
        config = {config}
        actionProvider = {ActionProvider}
        messageParser = {MessageParser}
        
        />
      </div>
    </div>
  );
}

export default Chatbot;