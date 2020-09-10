import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

function Home() {
    return (
        <p>We are at home</p>
    );
}

function Dashboard() {
    return (
        <p>We are at Dashboard</p>
    );
}
function About() {
    return (
        <p>We are at about</p>
    );
}
function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));