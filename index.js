import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


setInterval(() => {
var	d = new Date(); //object of date()
var	hr = d.getHours();
var	min = d.getMinutes();
var	sec = d.getSeconds();
var	hr_rotation = 30 * hr + min / 2; //converting current time
var	min_rotation = 6 * min;
var	sec_rotation = 6 * sec;

var hour,minute,second;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
