import './App.css';
import { Fragment } from 'react';

import MainNavigation from './components/MainNavigation/MainNavigation';
import NavigationButtons from './components/MainNavigation/NavigationButtons';


function App() {
  return (<Fragment>
    <MainNavigation />
    <div ><p className={".motto"}> Adapt. Improvise. Overcome.</p></div>
    <NavigationButtons>dsadsadsadsa</NavigationButtons>
    
    </Fragment>
  );
}

export default App;
