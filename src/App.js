import classes from "./App.module.css";
import { Fragment } from "react";

import MainNavigation from "./components/MainNavigation/MainNavigation";
import NavigationButtons from "./components/MainNavigation/NavigationButtons";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.hero}>
        <p className={classes.title}> Adapt. Improvise. Overcome.</p>
        <p className={classes.motto}>
          I can help you gain control over your cognitive resources and
          mastercraft your destiny.
        </p>
      </div>
      <NavigationButtons />
    </Fragment>
  );
}

export default App;
