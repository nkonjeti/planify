class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      //array
      this.greetings = ["buddy", "pal", "awesome friend", "amazing friend", "friend", "best friend", "bestie"];
      this.timeManagement=["Try to use a planner and the calendar app here on Planify to break down your day into chunks.", "Remember that mental health is a priority, and don't fill up your entire schedule.","Schedule breaks in between for productivity.","It's ok to say no to opportunities","Try to prioritize your time on 2-3 clubs and the rest of your time on mental health and classes.","Keep your prioritizes in check and always complete the things that will be due soon first."]
      
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
    
    clubs = () => {
      const message = this.createChatBotMessage("What clubs are you involved in?");
      //prints the message
      this.addMessageToState(message);
  
    };

    tips1 = () => {
      const message = this.createChatBotMessage("Are you able to manage your time well with clubs?");
      this.addMessageToState(message);
    }

    tips2 = () => {
      const message = this.createChatBotMessage("Do you want any time management tips?");
      this.addMessageToState(message);
    }

    tips3= () => {
        //generates random num from 0 to this.timeManagement.length-1
        const randomnum = Math.random() * (this.timeManagement.length - 1);
        const pick = Math.floor(randomnum);
      //generates random message for tips  
        const randommessage = this.timeManagement[pick];
        const message = this.createChatBotMessage(`${randommessage} I hope this tip will help you manage your time better. `);
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