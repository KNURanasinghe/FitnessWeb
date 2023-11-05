import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SignUp from './Components/signUp';
import Login from './Components/login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Login />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
