import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { gapi } from 'gapi-script';

  
function Calendar() {
  var summary;
  var location;
  var description;
  var starttime;
  var endtime;
  var date;
  var email;
  var email2;

  var gapi = window.gapi
  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID = "235434181278-hefe3t1m7vsv7imjfgcss096r88l3ldl.apps.googleusercontent.com"
  var API_KEY = "AIzaSyD2KCEXG1eukZyiMaOA1q7kEqszAZR0e64"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
        .then(() => {

          var event = {
            'summary': 'HackIllinois Demo Day!',
            'location': '201 N Goodwin Ave, Urbana, IL 61801',
            'description': 'We hope for victory!<3',
            'start': {
              'dateTime': '2020-08-14T09:00:00-12:00',
              'timeZone': 'America/Chicago'
            },
            'end': {
              'dateTime': '2020-08-14T17:00:00-14:00',
              'timeZone': 'America/Chicago'
            },
            'recurrence': [
              'RRULE:FREQ=DAILY;COUNT=2'
            ],
            'attendees': [
              {'email': 'sana.madhavan20@gmail.com'},
              {'email': 'nkonjeti@gmail.com'},
              {'email': 'serenabehera@gmail.com'},
              {'email': 'bliss@example.com'},
              {'email': 'kankipatigautami@gmail.com'},
              {'email': 'anushka.pachaury@gmail.com'},
             
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                { 'method': 'email', 'minutes': 24 * 60 },
                { 'method': 'popup', 'minutes': 10 }
              ]
            }
          }

          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
          })

          request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
          })


          /*
              Uncomment the following block to get events
          */
          
          // get events
          gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
          }).then(response => {
            const events = response.result.items
            console.log('EVENTS: ', events)
          })
          


        })
    })
  }
  const addClass = () => {
    
   
    gapi.load('client:auth2', () => {
      console.log('loaded client')
     summary = document.getElementById('summary').value;
     location = document.getElementById('location').value;
     description = document.getElementById('description').value;
     starttime = document.getElementById('starttime').value;
     endtime = document.getElementById('endtime').value;
     date = document.getElementById('date').value;
     email = document.getElementById('email').value;
     email2 = document.getElementById('email2').value;
     
    var startdate = `${date}T${starttime}:00-05:00`;
    var enddate = `${date}T${endtime}:00-05:00`
    if(email == "") {
      email = 'planify@example.com';
      email2 = 'bliss@example.com';

    }
    
     

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
        .then(() => {

          var event = {
            'summary': summary,
            'location': location,
            'description':description,
            'start': {
              'dateTime': startdate,
              'timeZone': 'America/Chicago'
            },
            'end': {
              'dateTime': enddate,
              'timeZone': 'America/Chicago'
            },
            'recurrence': [
              'RRULE:FREQ=WEEKLY;UNTIL=20201220T170000Z'
            ],
            'attendees': [
              {'email': email},
              {'email': email2}
             
             
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                { 'method': 'email', 'minutes': 24 * 60 },
                { 'method': 'popup', 'minutes': 10 }
              ]
            }
          }

          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
          })

          request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
          })


          /*
              Uncomment the following block to get events
          */
          
          // get events
          gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
          }).then(response => {
            const events = response.result.items
            console.log('EVENTS: ', events)
          })
          


        })
    })

  }


  return (
    <div className="App">
      <header className="App-header">
         
        <p>Click to add the HackIllinois event to Google Calendar</p>
        <p style={{ fontSize: 18 }}>Enter your class information to get it added to your google calendar as a weekly event!</p>
        <p style={{ fontSize: 18 }}>Answer all the * required questions and follow the examples! Allow the popup for you calendar to open in the next page.</p>
        <button style={{ width: 100, height: 50 }} onClick={handleClick}>Add HackIllinois</button>
       

      </header>
      <form>
  <label>
    *Class Name:
    <input id = 'summary' value = {summary} type="text" name="name" />
  </label>
  <label>
    Location:
    <input id = 'location' value = {location}  type="text" name="name" />
  </label>
  <label>
    Type(lecture/discussion):
    <input id = 'description' value = {description}  type="text" name="name" />
  </label>
  <label>
    *Date (ex: 2020-08-14):
    <input id = 'date' value = {date}  type="text" name="name" />
  </label>
  <label>
    *Start Time: (ex: 14:00 or 09:00)
    <input id = 'starttime' value = {starttime}  type="text" name="name" />
  </label>
  <label>
    *End Time: (ex: 15:00 or 15:30) 
    <input id = 'endtime' value = {endtime}  type="text" name="name" />
  </label>
  
  <label>
    *Email of peer: 
    <input id = 'email' value = {email}   type="text" name="name" />
  </label>
  <label>
    *Email of another peer:
    <input id = 'email2' value = {email2}   type="text" name="name" />
  </label>
  
</form>
<button style={{ width: 100, height: 50 }} onClick={addClass}>Add Class</button>
    </div>
  );

}


export default Calendar;
