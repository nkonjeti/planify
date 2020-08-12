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
     
     if(lowercase.includes("who are you")){
          //greet in actionprovider
          this.actionProvider.who();

      }  
     else if(lowercase.includes("are you a robot")){
        this.actionProvider.robot();
      }
     else if (lowercase.includes("first") || (lowercase.includes("second")))
     {
        this.actionProvider.earlyInternships();
     }

     //emotions



      //if doesn't match custom messages 


      //this would direct to planned reflection questions
     
        if(response === 1){
          this.actionProvider.greet();
          response++;
         
        }
        //here
        //Anushka Emotion code here


        



        //Gautami Clubs code here 





        //Sana Jobs/Internships here
        
       else if(response ===4)
       {
         this.actionProvider.career();
         response++;
       }



        //Serena Social Life here





        //Neha classes here



      }
      
    }
  }
  
  export default MessageParser;