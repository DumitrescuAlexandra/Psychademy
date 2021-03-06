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
import ForgotPassword from "./screens/PatientLogin/Forgot Password/ForgotPassword";
import NotFound from "./screens/Not found/NotFound";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import MoodCheck from "./screens/LoggedUser/WelcomeScreen/MoodCheck";
import UserPage from "./screens/LoggedUser/UserPage/UserPage";
import AccountSettings from "./screens/LoggedUser/UserProfile/AccountSettings";
import ConfidentialityPolicy from "./screens/LoggedUser/UserProfile/Confidentiality Policy/ConfidentialityPolicy";
import ChangePassword from "./screens/LoggedUser/UserProfile/Change Password/ChangePassword";
import DeleteAccount from "./screens/LoggedUser/UserProfile/Delete Account/DeleteAccount";
import MoodGraph from "./screens/LoggedUser/Mood Graph/MoodGraph";
import Signup from "./screens/Patient signup/Signup";
import EntryList from "./screens/LoggedUser/My Journal copy/EntryListC";
import EntryForm from "./screens/LoggedUser/My Journal copy/EntryFormC";
import Homework from "./screens/LoggedUser/Assignments/Homework";
import MyUploads from "./screens/LoggedUser/Assignments/MyUploads";
import { AuthProvider } from "./contexts/AuthContext";
import Success from "./screens/Success screen/Success";
import EntryDetails from "./screens/LoggedUser/My Journal copy/screens/EntryDetailsC";
import PrivateRoute from "./screens/LoggedUser/Private Route/PrivateRoute";
import AccountInfo from "./screens/LoggedUser/UserProfile/Account Info/AccountInfo";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <AuthProvider>
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

          <Route path="/PatientSignup">
            <Signup />
          </Route>

          <Route path="/AccountCreated">
            <Success
              successMessage={"You have successfully created an account!"}
              path={"/UserPage"}
            />
          </Route>

          <Route path="/PatientLogin" component={PatientLogin} />

          <Route path="/ForgotPassword" component={ForgotPassword} />

          <PrivateRoute path="/UserPage" exact component={UserPage} />

          <PrivateRoute path="/UserPage/moodCheck" component={MoodCheck} />

          <PrivateRoute path="/Account" component={AccountSettings} />

          <PrivateRoute path="/AccountInfo" component={AccountInfo} />

          <Route path="/SuccessfullyUpdated">
            <Success
              successMessage={"Your profile has successfully been updated!"}
              path={"/AccountInfo"}
            />
          </Route>

          <PrivateRoute
            path="/ConfidentialityPolicy"
            component={ConfidentialityPolicy}
          />

          <PrivateRoute path="/PasswordChange" component={ChangePassword} />

          <Route path="/SuccessfullyChanged">
            <Success
              successMessage={"You have successfully updated your login info!"}
              path={"/Account"}
            />
          </Route>

          <PrivateRoute path="/DeleteAccount" component={DeleteAccount} />

          <Route path="/SuccessfullyDeleted">
            <Success
              successMessage={"You have successfully deleted your account!"}
              path={"/welcome"}
            />
          </Route>

          <PrivateRoute path="/Evolution" component={MoodGraph} />

          <PrivateRoute path="/MoodCheck" component={MoodCheck} />

          <PrivateRoute path="/Journal" exact component={EntryList} />

          <PrivateRoute path="/Journal/:entryId" component={EntryDetails} />

          <PrivateRoute path="/new-entry" component={EntryForm} />

          <PrivateRoute path="/Assignments" exact>
            <Redirect to="/Assignments/homework"></Redirect>
          </PrivateRoute>
          <PrivateRoute path="/Assignments/homework" component={Homework} />

          <PrivateRoute path="/Assignments/my-uploads" component={MyUploads} />
        </AuthProvider>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
