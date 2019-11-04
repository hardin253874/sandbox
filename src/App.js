import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './hello/HelloMessage';
import Timer from './hello/Timer';
import ToDoApp from './hello/ToDoApp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo"  />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      <body>
      <p>
        <HelloMessage name="smart corp" />
        And Show the Timer
        <Timer />
      </p>
      <p>
        To Do: <br />
        <ToDoApp />
      </p>

      </body>
    </div>
  );
}

export default App;
