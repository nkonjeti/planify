var response = 1;
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      
     
    }
  
     parse(message) {
      
      else if(response == 3 && lowercase.includes("yes")) {
        this.actionProvider.tips3();
     }
  

     //emotions



      //if doesn't match custom messages 


      //this would direct to planned reflection questions
      else{
        if(response == 1){
          this.actionProvider.greet();
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





        //Serena Social Life here





        //Neha classes here



      }
      
    }
  }
  
  export default MessageParser;