import React from 'react';

//import './App.css';
import './Timer.css';

function Timer() {
  return (
  <section>
    <section className = "timer">
      <div>
        
        <h2>Break Time!</h2>
        <p>Countdown for your break. You deserve it.</p>
      </div>
      <div>
        <section>
          <p>87</p>
          <p><small>Minutes</small></p>

        </section>
        <span>:</span>
        <section>
          <p>87</p>
          <p><small>Seconds</small></p>

        </section>
      </div>

    </section>
    </section>
  );
};

export default Timer;
