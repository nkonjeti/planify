
import React from 'react';
//import './App.css';
import './Timer.css';

 function Timer() {
  var time = 17 * 60;
  
  const updateCountdown = () => {
   const minutes = Math.floor(time/60);
   let seconds = time % 60;
   seconds = seconds < 10 ? '0' + seconds: seconds;

   document.getElementById('countdown').innerHTML = `${minutes}`;
   document.getElementById('updateseconds').innerHTML = `${seconds}`;
 
   time--;
  };
  setInterval(updateCountdown, 1000);
  
   return (
  
 <section>
   <section className = "timer">
      <div>
       
      <h2>Break Time!</h2>
       <p>Countdown for your break. You deserve it.</p>
      </div>
     <div>
       <section>
         <p id ="countdown">17</p>
         <p><small>Minutes</small></p>

       </section>
       
       <span>:</span>
      
      
       <section>
         <p id = "updateseconds">00</p>
         <p><small>Seconds</small></p>

       </section>
     </div>

   </section>
   </section>
   );
};
 
 export default Timer;