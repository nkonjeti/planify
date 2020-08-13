import React from 'react';
import './App.css';
import Nav from './Nav';
import Timer from './Timer';
import Calendar from './Calendar';
import Chatbot from './Chatbot';
import Music from './Music';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
      <Route path = "/" exact component = {Home} />
      <Route path = "/timer" component = {Timer} />
      <Route path = "/calendar" component = {Calendar} />
      <Route path = "/chatbot" component = {Chatbot} />
      <Route path = '/music' component = {Music} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>
      Home Page
    </h1>
  </div>

);
export default App;
