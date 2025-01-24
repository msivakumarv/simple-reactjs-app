import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
   @returns {JSX.Element}

function App() {
  return (
    <Router>
      <Switch>
        {/* Route for the home page */}
        <Route exact path="/" component={Home} />

        {/* Route for the about page */}
        <Route path="/about" component={About} />

        {/* Redirect all other paths to home */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
