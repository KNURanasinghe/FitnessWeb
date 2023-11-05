import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SignUp from './Components/signUp';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SignUp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
