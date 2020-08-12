class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      //array
      this.greetings = ["buddy", "pal", "awesome friend", "amazing friend", "friend", "best friend", "bestie"];
      
    }
    //custom responses

    who = () => {
      const message = this.createChatBotMessage("I'm Bliss! Here to help you reflect. What's your name?");
      this.addMessageToState(message);


    }

    robot =() => {
      const message = this.createChatBotMessage("I'm a robot created by Sana, Gautami, Anushka, Serena, and Neha. Are you from the human species?");
      this.addMessageToState(message);
    }
   

    //actual reflection conversation

    greet = () => {
      //generates random num from 0 to this.greetings.length-1
        const randomnum = Math.random() * (this.greetings.length - 1);
        const pick = Math.floor(randomnum);
      //generates random message for greeting 
        const randommessage = this.greetings[pick];
        const message = this.createChatBotMessage(`Hello ${randommessage}.`);
        //prints the message
        this.addMessageToState(message);

    };
    

  career = () => {
    //generates random num from 0 to this.greetings.length-1
    const message = this.createChatBotMessage("Are you a first or a second year student?");
    //prints the message
    this.addMessageToState(message);

  };

  earlyInternships = () => {
    const message = this.createChatBotMessage("You might want to look into the early careers or apprentenceship section of companies you are interested in. But first send your resume to your college career center for review. Internship apps typically open in the fall/winter, so be prepared by then! Research is also a viable way to get experience if you don't land the internship of your dreams right away!")
    this.addMessageToState(message);
  }

    
  

    addMessageToState = (message) => {
        this.setState((prevState) => ({
           ...prevState, 
           messages: [...prevState.messages,message],


        }));

    };
  }
  
  export default ActionProvider;