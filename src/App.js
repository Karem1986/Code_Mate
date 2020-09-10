import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom"; //gives a website for each web page
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Homepage}></Route>

            <Route path="/code_session" component={Homepage}></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
