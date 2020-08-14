import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { gapi } from 'gapi-script';

function Calendar() {

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
              'dateTime': '2020-08-28T17:00:00-14:00',
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


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click to add HackIllinois event to Google Calendar</p>
        <p style={{ fontSize: 18 }}>Uncomment the get events code to get events</p>
        <p style={{ fontSize: 18 }}>Don't forget to add your Client Id and Api key</p>
        <button style={{ width: 100, height: 50 }} onClick={handleClick}>Add HackIllinois</button>
      </header>
    </div>
  );

}


export default Calendar;
