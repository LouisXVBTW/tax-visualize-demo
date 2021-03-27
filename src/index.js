import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './pages/calendar';
import RouterFile from './RouterFile';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { NavLink } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterFile/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
