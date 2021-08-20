import React from 'react';
import ReactDOM from 'react-dom';

import "typeface-lato";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


