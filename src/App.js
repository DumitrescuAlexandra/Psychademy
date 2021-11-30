import { Route, Switch, Redirect } from "react-router-dom";

import "./App.module.css";
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
import AccountSettings from "./screens/LoggedUser/UserProfile/AccountSettings";
import ConfidentialityPolicy from "./screens/LoggedUser/UserProfile/Confidentiality Policy/ConfidentialityPolicy";
import ChangePassword from "./screens/LoggedUser/UserProfile/Change Password/ChangePassword";
import DeleteAccount from "./screens/LoggedUser/UserProfile/Delete Account/DeleteAccount";
import MoodGraph from "./screens/LoggedUser/Mood Graph/MoodGraph";
import EntryList from "./screens/LoggedUser/My Journal/EntryList";
import NewEntry from "./screens/LoggedUser/My Journal/screens/NewEntry";
import MyAssignments from "./screens/LoggedUser/Assignments/MyAssignments";

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
        <Route path="/services" exact>
          {" "}
          <Redirect to="/services/adults" />
        </Route>
        <Route path="/services/:clientType">
          <ServicesAndFees />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/PatientLogin">
          <PatientLogin />
        </Route>
        <Route path="/UserPage">
          <UserPage />
        </Route>
        <Route path="/UserPage/moodCheck">
          <MoodCheck />
        </Route>
        <Route path="/Account">
          <AccountSettings />
        </Route>
        <Route path="/ConfidentialityPolicy">
          <ConfidentialityPolicy />
        </Route>
        <Route path="/PasswordChange">
          <ChangePassword />
        </Route>
        <Route path="/DeleteAccount">
          <DeleteAccount />
        </Route>
        <Route path="/UserPage/Evolution">
          <MoodGraph />
        </Route>
        <Route path="/Journal">
          <EntryList />
        </Route>

        <Route path="/new-entry">
          <NewEntry />
        </Route>

        <Route path="/Assignments">
          <MyAssignments />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
