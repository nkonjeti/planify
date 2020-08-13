import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Bliss",
  initialMessages: [createChatBotMessage(`Hi, I'm Bliss! I'm here to be your mentor and friend!`)],


    customStyles: {
      // Overrides the chatbot message styles
      botMessageBox: {
        backgroundColor: "#db904f",
      },
      // Overrides the chat button styles
      chatButton: {
        backgroundColor: "#0345fc",
      }
    },

  };

export default config;