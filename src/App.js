import React from 'react'; // Importing React for JSX usage
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home'; // Adjust the path if needed
import About from './components/About'; // Adjust the path if needed

/**
 * App component serves as the main entry point for the application.
 * It handles routing between different pages using React Router.
 */
function App() {
  return (
    <Router>
      <Switch>
        {/* Route for the home page */}
        <Route exact path="/" component={Home} />
        
        {/* Route for the about page */}
        <Route path="/about" component={About} />
        
        {/* Redirect all other routes to the home page */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
