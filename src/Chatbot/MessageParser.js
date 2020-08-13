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
      else if(lowercase.includes("Peer") || lowercase.includes("1")) {
        this.actionProvider.peerPressure();
      }
      else if(lowercase.includes("Exclusion") || lowercase.includes("2")) {
        this.actionProvider.exclusion();
      }
      else if (lowercase.includes("5")){
        this.actionProvider.doIt();
      }
      else if (lowercase.includes("yes")) {
        this.actionProvider.maximize();
      }
      else if (lowercase.includes("no")) {
        this.actionProvider.maximization();
      }
      else if (lowercase.includes("6")) {
        this.actionProvider.friends();
      }
      else if (lowercase.includes("sure")) {
        this.actionProvider.sure();
      }
      else if (lowercase.includes("unsure")) {
        this.actionProvider.unsure();
      }
      else if (lowercase.includes("7")) {
        this.actionProvider.work();
      }
      else if (lowercase.includes("work")) {
        this.actionProvider.work2();
      }
      else if (lowercase.includes("colleagues")) {
        this.actionProvider.work3();
      }

     //emotions



      //if doesn't match custom messages 


      //this would direct to planned reflection questions
      else{
        if(response === 1){
          this.actionProvider.socialIntro();
          response++;
         
        }
        //here
        //Anushka Emotion code here





        //Gautami Clubs code here 





        //Sana Jobs/Internships here





        //Serena Social Life here
        /*else if (response === 5) {
          this.actionProvider.socialIntro();
          response++;


        }*/




        //Neha classes here



      }
      
    }
  }
  
  export default MessageParser;