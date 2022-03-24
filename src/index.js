import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Appointments from './component/Appointments';
import Login from './component/Login';
import Register from './component/Register';
import Host from './component/Host';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='appointments' element={<Appointments />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='host' element={<Host />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);

reportWebVitals();