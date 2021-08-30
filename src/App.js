import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { Fragment } from "react";

import Welcome from "./screens/Welcome/Welcome";
import About from "./screens/About/About";
import AboutMe from "./screens/About/AboutMe";
import AboutCBT from "./screens/About/AboutCBT";
import Services from "./screens/Services/Services";
import Contact from "./screens/Contact/Contact";
import PatientLogin from "./screens/PatientLogin/PatientLogin";
import NotFound from "./screens/Not found/NotFound";

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
        <Route path="/about">
          <About />
          <Route path="/about/aboutMe" exact>
            <AboutMe />
          </Route>
          <Route path="/about/aboutCBT" exact>
            <AboutCBT />
          </Route>
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/patient-login">
          <PatientLogin />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
