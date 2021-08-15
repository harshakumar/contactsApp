import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactsApp from "./ContactsApp";
const Welcome = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacts">
            <ContactsApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Welcome;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
