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





        //Sana Jobs/Internships here





        //Serena Social Life here





        //Neha classes here



      }
      
    }
  }
  
  export default MessageParser;