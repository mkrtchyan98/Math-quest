import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Quiz from './components/Quiz'
import Categories from './components/Categories'
import './App.css'

function App() {
  return (
    <div className="App">
    <header className="App-header">
<Router>
            <Switch>
              <Route path="/" exact component={Categories} />
              <Route
                path="/add"
                render={props => <Quiz {...props} operator="+" />}
              />
              <Route
                path="/sub"
                render={props => <Quiz {...props} operator="-" />}
              />
              <Route
                path="/multiply"
                render={props => <Quiz {...props} operator="x" />}
              />

              <Redirect to="/" />
            </Switch>
          </Router>
          </header>
    </div>
  );
}

export default App;
