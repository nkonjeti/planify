var response = 1;
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      
     
    }
  
     parse(message) {
      
     
     
  
      console.log(response);
      const lowercase = message.toLowerCase()

      //custom messages
     //easter eggs
     if(lowercase.includes("who are you")){
          //greet in actionprovider
          this.actionProvider.who();

      }  
     else if(lowercase.includes("are you a robot") || lowercase.includes("who made you")){
        this.actionProvider.robot();
      }
      else if(lowercase.includes("Peer") || lowercase.includes("1")) {
        this.actionProvider.peerPressure();
      }
      else if(lowercase.includes("Exclusion") || lowercase.includes("2")) {
        this.actionProvider.exclusion();
      }
      else if (lowercase.includes("5")){
        this.actionProvider.doIt();
      }
      else if (lowercase.includes("thumbs up")) {
        this.actionProvider.maximize();
      }
      else if (lowercase.includes("thumbs down")) {
        this.actionProvider.maximization();
      }
      else if (lowercase.includes("6")) {
        this.actionProvider.friends();
      }
      else if (lowercase.includes("sure") && response == 3) {
        this.actionProvider.sure();
      }
      else if (lowercase.includes("unsure")) {
        this.actionProvider.unsure();
      }
      else if (lowercase.includes("7")) {
        this.actionProvider.work();
      }
      else if (lowercase.includes("work") && response === 6) {
        this.actionProvider.work2();
      }
      else if (lowercase.includes("colleagues")) {
        this.actionProvider.work3();
      }
     else if (lowercase.includes("first") || (lowercase.includes("second")))
     {
        this.actionProvider.earlyInternships();
     }
     else if (lowercase.includes("third") || (lowercase.includes("fourth")))
     {
       this.actionProvider.laterJobs();
     }
      //classes
      

     else if(response === 4 && lowercase.includes("yes")) {
      this.actionProvider.tips3();
     }
      //classes
      else if(response === 8 && lowercase.includes("yes")) {
        this.actionProvider.struggle();
      }
         
        
     

     //emotions
     else if(lowercase.includes("sad")){
      
      this.actionProvider.sad();
    }

    else if(lowercase.includes("happy")){
      this.actionProvider.askHappy();
    
    }

    else if(lowercase.includes("lone")){
      this.actionProvider.exclude();
    }



      //if doesn't match custom messages 

      //empty message 
      else if(lowercase === "" || lowercase === " ") {
        this.actionProvider.emptyMessage();
      }
      


      //this would direct to planned reflection questions
     else {
        if(response === 1){
          this.actionProvider.greet();
          response++;
         
        }
        else if (response === 2) {
          this.actionProvider.emotionIntro();
          response++;
        }
        //here
        //Anushka Emotion code here
        

        



        //Gautami Clubs code here 

        else if(response ===3)
       {
         this.actionProvider.clubs();
         response++;
       }


        //Sana Jobs/Internships here
        
       else if(response ===4)
       {
         this.actionProvider.career();
         response++;
       }



        //Serena Social Life here
        else if (response === 5) {
          this.actionProvider.socialIntro();
          response++;


        }




        //Neha classes here
        //Neha classes here (we can change these response numbers one we know everyone else's)
        else if (response === 6) {
          this.actionProvider.class1();
          response++
        }
        else if(response === 7) {
          this.actionProvider.class2();
          response++;
        }
        else if(response === 8) {
          this.actionProvider.class3();
          response++;
        }
        else if (response === 9) {
          this.actionProvider.class4();
          
        }




      }
      
    }
}
  
  export default MessageParser;