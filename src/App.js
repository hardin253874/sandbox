import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HelloMessage from './hello/HelloMessage';
import Timer from './hello/Timer';
import ToDoApp from './hello/ToDoApp';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/helloMessage">Hello Message</Link>
                        </li>
                        <li>
                            <Link to="/timer">Timer</Link>
                        </li>
                        <li>
                            <Link to="/todo">TODO</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/helloMessage">
                        <HelloMessagePage />
                    </Route>
                    <Route path="/timer">
                        <TimerPage />
                    </Route>
                    <Route path="/todo">
                        <ToDoPage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo"  />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

function HelloMessagePage() {
    return (
        <HelloMessage name="smart corp" />
    );
}

function TimerPage(){
    return (
        <Timer />
    );
}

function ToDoPage(){
    return (
        <div>
            To Do: <br />
            <ToDoApp />
        </div>
    )
}

export default App;
