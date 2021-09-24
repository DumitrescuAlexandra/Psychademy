import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { Fragment } from "react";

import Welcome from "./screens/Welcome/Welcome";
import About from "./screens/About/About";
import AboutMe from "./screens/About/AboutMe";
import AboutCBT from "./screens/About/AboutCBT";
import ServicesAndFees from "./screens/Services/ServicesAndFees";
import Contact from "./screens/Contact/Contact";
import PatientLogin from "./screens/PatientLogin/PatientLogin";
import NotFound from "./screens/Not found/NotFound";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import MoodCheck from "./screens/LoggedUser/WelcomeScreen/MoodCheck";
import UserPage from "./screens/LoggedUser/UserPage/UserPage";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
          <Redirect to="/about/aboutMe" />
          <Route path="/about/aboutMe">
            <AboutMe />
          </Route>
          <Route path="/about/aboutCBT">
            <AboutCBT />
          </Route>
        </Route>
        <Route path="/services">
          <Redirect to="/services/adults" />
          <ServicesAndFees />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/patientLogin">
          <PatientLogin>
            <Route path="/PatientLogin/UserPage">
              <UserPage>
                <Route path="/patientLogin/moodCheck">
                  <MoodCheck />
                </Route>
              </UserPage>
            </Route>
          </PatientLogin>
        </Route>
        <Route path="/patientLogin/moodCheck">
          <MoodCheck />
        </Route>
        <Route path="/PatientLogin/UserPage"></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
