import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { Fragment } from "react";

import Welcome from "./screens/Welcome/Welcome";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
