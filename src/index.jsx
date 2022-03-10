import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line import/extensions,import/no-unresolved
import App from './App';
// eslint-disable-next-line import/extensions,import/no-unresolved
import reportWebVitals from './reportWebVitals';

// Create WebSocket connection
const socket = new WebSocket('wss://test2022-frontend-rostyslav-m.abzdev2.com:3000/ws');

// Listen for possible errors
socket.addEventListener('error', function (event) {
    console.log('WebSocket error: ', event);
    socket.close();
});

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
    <App />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
