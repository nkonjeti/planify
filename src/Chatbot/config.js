import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
   botName: "Bliss",
  initialMessages: [createChatBotMessage(`Hello World`)],
};

export default config;