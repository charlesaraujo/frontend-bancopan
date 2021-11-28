import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/user';
import reportWebVitals from './reportWebVitals';
require('typeface-montserrat')

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
