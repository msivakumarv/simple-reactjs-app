import React from 'react';
import './App.css';
import Customers from './Customers';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

/**
 * Main application component.
 *
 * @return {JSX.Element} The rendered component.
 */
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple React App</h1>
        </header>
        <Switch>
          {/* Redirect from root to customerlist */}
          <Route
            exact
            path="/"
            render={() => <Redirect to="/customerlist" />}
          />
          {/* Route for the customer list */}
          <Route exact path="/customerlist" component={Customers} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
