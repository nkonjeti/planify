class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      //array
      this.greetings = ["buddy", "pal", "awesome friend", "amazing friend", "friend", "best friend", "bestie"];
      this.nicePhrases = ["I like being your friend!", "ooh I want to share a joke to make you laugh: I like to sit on my robot-tom. Let's pretend you liked that joke", "my phone number is: 1010101010 just FYI", "I already think that you are an awesome person!"]
      this.usnews = ["Break up larger projects, such as research papers, field studies, and cumulative finals, into manageable chunks. And spread the stages over a reasonable number of days.", "Schedule your studying for times when you can seriously engage with the work. This can be very different, depending on your biochronology. Some students find 11 p.m. the perfect time to focus, others 7 a.m. Just because your roommate or partner studies at a particular time doesn't mean it will work for you.","Especially at the beginning of the semester, you should track how long it takes you to do the homework in each of your classes, prepare for quizzes and tests, and write short papers. Knowing this can help you plan the time frame for future course assignments.", " Even though there's no parent or teacher to stand over you, be sure you're doing the outside-of-class work when it's assigned. Doing the reading in advance of the lecture, studying for each quiz as it comes along, and memorizing what needs to be memorized on a week-by-week basis are all strategies that will increase your efficiency and cut down on overall study time."]
      this.classresources = ["I recommend attending office hours for the classes you are struggling with. You can ask questions about anything you are struggling with and if you are in a CS class you can even share your screen!", "I recommend to try joining a study group for your class. You could ask the peers in your class and you could form a study group! If you are at home, you could do virtual calls with you study group!", "Piazza is a great platform to attend a q & a for your classes!", "Ask any of your peers or TAs in your classes! They will be glad to help!", "Even if your classes are virtual, office hours are super helpful and you can ask questions about the topics you are struggling with!"]
      
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
        const message = this.createChatBotMessage(`Hello ${randommessage}. How is college?`);
        //prints the message
        this.addMessageToState(message);

    };
    
  //neha's class questions
  class1(){
    //generates random num from 0 to this.greetings.length-1
        const randomnum = Math.random() * (this.nicePhrases.length - 1);
        const pick = Math.floor(randomnum);
      //generates random message for greeting 
        const randommessage = this.nicePhrases[pick];
        const message = this.createChatBotMessage(`${randommessage}. Are you able to keep up with college work?`);
        this.addMessageToState(message);
  }
  class2() {
     //generates random num from 0 to this.greetings.length-1
     const randomnum = Math.random() * (this.usnews.length - 1);
     const pick = Math.floor(randomnum);
   //generates random message for greeting 
     const randommessage = this.usnews[pick];
     const message = this.createChatBotMessage(`Here's a tip I got from a US News article: ${randommessage} You got this! Are you struggling with any of your classes? Yes or No?`);
     this.addMessageToState(message);

  }
  struggle() {
     //generates random num from 0 to this.greetings.length-1
     const randomnum = Math.random() * (this.classresources.length - 1);
     const pick = Math.floor(randomnum);
   //generates random message for greeting 
     const randommessage = this.classresources[pick];
     const message = this.createChatBotMessage(`${randommessage} College classes can be tough! There are resources out there to help you and I believe you can beat these challenges! Text me a "proud moment" from class today or maybe something positive from college today.`);
     this.addMessageToState(message);

  }
  class3() {
    const message = this.createChatBotMessage('Pat yourself on the back! You are putting in effort! Short brain breaks are a great idea! You can use this app to take breaks! And if you ever struggle with class work, remember you are not the only one! Just take some time to reflect! What can you do today to do better in your college classes?');
    this.addMessageToState(message);
  }
  class4() {
    const message = this.createChatBotMessage("Good job reflecting! Let's talk again tomorrow!");
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