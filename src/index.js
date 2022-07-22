import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import storage from './Redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));


function renderApp(state){

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={ storage.dispatch.bind(storage) } />
      </BrowserRouter>
    </React.StrictMode>
  );
  
}

storage.subscribe(renderApp)
renderApp(storage.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();