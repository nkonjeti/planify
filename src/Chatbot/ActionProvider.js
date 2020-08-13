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

    socialIntro = () => {
      const message = this.createChatBotMessage("So, what about your social life would you like to reflect on? Choose from these options that fits you most: 1. Peer Pressure, 2. Exclusion (Type a number)");
      this.addMessageToState(message);
    }
    peerPressure = () => {
      const message = this.createChatBotMessage("What does your situation involve? 5. Drugs? (Type a number)");
      this.addMessageToState(message);
    }
    
    doIt = () => {
      const message = this.createChatBotMessage("If a simple no isn't doing the trick, come up with a few excuses. Are you on a team of any kind?");
      this.addMessageToState(message);
    }

    maximize = () => {
      const message = this.createChatBotMessage("Then maybe say you're trying to stay healthy, whether its mentally or physically! Nobody would argue that a hangover would help you perform your best.");
      this.addMessageToState(message);
    }

    maximization = () => {
      const message = this.createChatBotMessage("Thats okay! You could simply offer to be the designated driver or keep a bottled drink like a soda or iced tea to drink at parties to avoid being offered. All else fails, blame your parents!");
      this.addMessageToState(message);
    }

    exclusion = () => {
      const message = this.createChatBotMessage("What does this situation of exclusion involve? 6. Friends, 7. Workplace (Type a number)");
      this.addMessageToState(message);
    }

    friends = () => {
      const message = this.createChatBotMessage("Aww I'm sorry you feel this way ;( Are you sure or unsure about your friends intentions? ");
      this.addMessageToState(message);
    }

    sure = () => {
      const message = this.createChatBotMessage("Just know that it's not your fault. Don't go changing yourself to fit in! Instead, work on building your self confidence and maybe re-evaluating your friendships to see if it was actually worth it.");
      this.addMessageToState(message);
    }

    unsure = () => {
      const message = this.createChatBotMessage("It's possible that you're overthinking it! Maybe reach out to your friends about these feelings since it's better than letting these assumptions eat you alive.");
      this.addMessageToState(message);
    }

    work = () => {
      const message = this.createChatBotMessage("Aww I'm sorry you feel this way ;( Does this involve work or colleagues?");
      this.addMessageToState(message);
    }

    work2 = () => {
      const message = this.createChatBotMessage("Maybe try sharpening your skills so you become indispensable! Or you could focus on finding office allies rather than friends who will complement your skills in the workplace. If all fails, maybe your current workplace culture doesn't suit you and it maybe time to explore other options. ");
      this.addMessageToState(message);
    }

    work3 = () => {
      const message = this.createChatBotMessage("If you feel out of the loop, maybe plan your own outing and invite your colleagues. Taking the lead will automatically become a crucial part of the gathering. Also, maybe tap in to the preferred communication methods of your workplace!");
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