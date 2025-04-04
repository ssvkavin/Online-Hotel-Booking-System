import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

//ReactDOM.render(<App></App>,document.getElementById("root"))
const rootElement=document.getElementById("root")
if(rootElement){
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}
else{
  console.error("root Element not found");
  
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
