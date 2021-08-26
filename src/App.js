import "./App.css";
import { Fragment } from "react";

import MainNavigation from "./components/MainNavigation/MainNavigation";
import NavigationButtons from "./components/MainNavigation/NavigationButtons";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <div className={".hero"}>
        <p className={".title"}> Adapt. Improvise. Overcome.</p>
        <p className={".motto"}>
          I can help you gain control over your cognitive resources and
          mastercraft your destiny.
        </p>
      </div>
      <NavigationButtons />
    </Fragment>
  );
}

export default App;
