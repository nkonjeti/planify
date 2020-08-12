import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Bliss",
  initialMessages: [createChatBotMessage("Hi, I'm Bliss! I'm here to be your mentor!")],
};

export default config;