import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL ='http://dev.professoryapp.com:5000/api/'
axios.defaults.headers= 
{'x-auth-token': localStorage.getItem('x-auth-token'),
'Content-Type': 'application/json'}


ReactDOM.render(
  <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </>
, document.getElementById('root'));
