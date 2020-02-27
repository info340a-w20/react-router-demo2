import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <div>I am on the users div</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>Hey, I'm a footer</footer>
      </div>
    </Router>
  );
}

class Home extends React.Component {
  render() {
    return <div>
    <img src="https://snworksceo.imgix.net/dtc/10ec0a64-8f9d-46d9-acee-5ef9094d229d.sized-1000x1000.jpg?w=1000"/>
    </div>
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}