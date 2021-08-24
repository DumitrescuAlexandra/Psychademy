import "./App.css";
import { Fragment } from "react";

import MainNavigation from "./components/MainNavigation/MainNavigation";
import NavigationButtons from "./components/MainNavigation/NavigationButtons";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <p className={".motto"}> Adapt. Improvise. Overcome.</p>
      <h2>
        I can help you gain control over your cognitive resources and
        mastercraft your destiny.
      </h2>
      <NavigationButtons />
    </Fragment>
  );
}

export default App;
