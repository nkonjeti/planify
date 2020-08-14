class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      //array
      this.greetings = ["buddy", "pal", "awesome friend", "amazing friend", "friend", "best friend", "bestie"];
      this.timeManagement=["Try to use a planner and the calendar app here on Planify to break down your day into chunks.", "Remember that mental health is a priority, and don't fill up your entire schedule.","Schedule breaks in between for productivity.","It's ok to say no to opportunities","Try to prioritize your time on 2-3 clubs and the rest of your time on mental health and classes.","Keep your prioritizes in check and always complete the things that will be due soon first."]
      this.nicePhrases = ["I like being your friend!", "ooh I want to share a joke to make you laugh: I like to sit on my robot-tom. Let's pretend you liked that joke", "Fun fact: I like to do the robot. It comes naturally to me.","my phone number is: 1010101010 just FYI", "I already think that you are an awesome person!"]
      this.usnews = ["Break up larger projects, such as research papers, field studies, and cumulative finals, into manageable chunks. And spread the stages over a reasonable number of days.", "Schedule your studying for times when you can seriously engage with the work. This can be very different, depending on your biochronology. Some students find 11 p.m. the perfect time to focus, others 7 a.m. Just because your roommate or partner studies at a particular time doesn't mean it will work for you.","Especially at the beginning of the semester, you should track how long it takes you to do the homework in each of your classes, prepare for quizzes and tests, and write short papers. Knowing this can help you plan the time frame for future course assignments.", " Even though there's no parent or teacher to stand over you, be sure you're doing the outside-of-class work when it's assigned. Doing the reading in advance of the lecture, studying for each quiz as it comes along, and memorizing what needs to be memorized on a week-by-week basis are all strategies that will increase your efficiency and cut down on overall study time."]
      this.classresources = ["I recommend attending office hours for the classes you are struggling with. You can ask questions about anything you are struggling with and if you are in a CS class you can even share your screen!", "I recommend to try joining a study group for your class. You could ask the peers in your class and you could form a study group! If you are at home, you could do virtual calls with your study group!", "Piazza is a great platform to attend a q & a for your classes!", "Ask any of your peers or TAs in your classes! They will be glad to help!", "Even if your classes are virtual, office hours are super helpful and you can ask questions about the topics you are struggling with!"]
      
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
        const message = this.createChatBotMessage(`Hello ${randommessage}. What's up?`);
        //prints the message
        this.addMessageToState(message);

    };

    emotionIntro = () => {
      const message = this.createChatBotMessage("How are you feeling right now? Please let me know if you are feeling sad or lone!");
      this.addMessageToState(message);
    }

    socialIntro = () => {
      const message = this.createChatBotMessage("So, what about your social life would you like to reflect on? Choose from these options that fits you most: 1. Peer Pressure, 2. Exclusion (Type a number)");
      this.addMessageToState(message);
    }
    peerPressure = () => {
      const message = this.createChatBotMessage("What does your situation involve? 5. Drugs? (Type a number)");
      this.addMessageToState(message);
    }
    
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
    }
    doIt = () => {
      const message = this.createChatBotMessage("If a simple no isn't doing the trick, come up with a few excuses. Are you on a team of any kind? (Gimme a thumbs up or thumbs down to go on)");
      this.addMessageToState(message);
    }

    maximize = () => {
      const message = this.createChatBotMessage("Then maybe say you're trying to stay healthy, whether its mentally or physically! Nobody would argue that a hangover would help you perform your best. Understand?");
      this.addMessageToState(message);
    }
  //neha's class questions
  class1 = () =>{
    //generates random num from 0 to this.greetings.length-1
        const randomnum = Math.random() * (this.nicePhrases.length - 1);
        const pick = Math.floor(randomnum);
      //generates random message for tips  
        const randommessage = this.timeManagement[pick];
        const message = this.createChatBotMessage(`${randommessage} I hope this tip will help you manage your time better. `);
        this.addMessageToState(message);
    }

   
  
  class2 = () => {
     //generates random num from 0 to this.greetings.length-1
     const randomnum = Math.random() * (this.usnews.length - 1);
     const pick = Math.floor(randomnum);
   //generates random message for greeting 
     const randommessage = this.usnews[pick];
     const message = this.createChatBotMessage(`Here's a tip I got from a US News article: ${randommessage} You got this! Are you struggling with any of your classes? Yes or No?`);
     this.addMessageToState(message);
  }
  class3 = () => {
       const message = this.createChatBotMessage('Pat yourself on the back! You are putting in effort! Short brain breaks are a great idea! You can use this app to take breaks! And if you ever struggle with class work, remember you are not the only one! Just take some time to reflect! What can you do today to do better in your college classes?');
       this.addMessageToState(message);
     }
     class4 = () => {
       const message = this.createChatBotMessage("Good job reflecting! Let's talk again tomorrow!");
       this.addMessageToState(message);
     }
     struggle = () => {
         //generates random num from 0 to this.greetings.length-1
         const randomnum = Math.random() * (this.classresources.length - 1);
         const pick = Math.floor(randomnum);
       //generates random message for greeting 
         const randommessage = this.classresources[pick];
         const message = this.createChatBotMessage(`${randommessage} College classes can be tough! There are resources out there to help you and I believe you can beat these challenges! Text me a "proud moment" from class today or maybe something positive from college today.`);
         this.addMessageToState(message);
      
      }
      
  career = () => {
    //generates random num from 0 to this.greetings.length-1
    const message = this.createChatBotMessage("Are you a first or a second year student?");
    //prints the message
    this.addMessageToState(message);

  };

  earlyInternships = () => {
    const message = this.createChatBotMessage("You might want to look into the early careers or apprentenceship section of companies you are interested in. But first send your resume to your college career center for review. Internship apps typically open in the fall/winter, so be prepared by then! Research is also a viable way to get experience if you don't land the internship of your dreams right away! Share an experience with me that you might want to put on your resume!")
    this.addMessageToState(message);
  }

  laterJobs = () => {
    const message = this.createChatBotMessage("You should consider applying for part time or full time jobs, especially since you're almost done with your college journey! Here are some common interview questions so you can start preparing: 1. Tell me about yourself (think about what makes you uniquely qualified) 2. What are your long-term goals? 3. What is your greatest accomplishment? 4. How has your education/degree prepared you for your career? 5. What are your strenghts? 6. Have you ever had a conflict with a boss or professor? How did you resolve it? 7. What is your greatest weakness? 8. If I were to ask one of your professors to describe you, what would they say? 9. How would you describe your ideal job? 10. How do you personally define success? 11. What accomplishments have given you the most satisfaction in life? 12. What goals do you have for your career? 13. What were your favorite college classes and why? 14. Do you have any plans for higher education? 15. What do you know about our company? 16. Why are you interested in our company? 17. Do you have any location preferences?");
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
      const message = this.createChatBotMessage("Maybe try sharpening your skills so you become indispensable! Or you could focus on finding office allies rather than friends who will complement your skills in the workplace. If all fails, maybe your current workplace culture doesn't suit you and it maybe time to explore other options. Understand? ");
      this.addMessageToState(message);
    }

    work3 = () => {
      const message = this.createChatBotMessage("If you feel out of the loop, maybe plan your own outing and invite your colleagues. Taking the lead will automatically become a crucial part of the gathering. Also, maybe tap in to the preferred communication methods of your workplace!");
      this.addMessageToState(message);
    }

    emptyMessage = () => {
      const message = this.createChatBotMessage("Sorry, I didn't quite get you! Could you type out your response again?")
      this.addMessageToState(message);
    }
    
    askHappy = () => {
      const message = this.createChatBotMessage("That's awesome! What made you happy today?");
      this.addMessageToState(message);
    }
   
    sad = () => {
  
      const message = this.createChatBotMessage("Do not be too hard on yourself. Try to be happy with what you achieved today. You can make a list of all the events or tasks that you weren't happy with and work on them. What is causing your sadness? Choose one of these: Peer Pressure");
      this.addMessageToState(message);
  
    }
   
    happy = () => {
  
      const message = this.createChatBotMessage("Good Job! I'm so proud of you. Keep up the good work:)");
      this.addMessageToState(message);
  
    }
  
    exclude = () => {
  
      const message = this.createChatBotMessage("Try to study in study groups and surround yourself with people who you like to talk to and make you feel special!)");
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