import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonAppBar from './AppBar';
import App from './App';
import Toolbar from '@material-ui/core/Toolbar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ButtonAppBar />
    <Toolbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
