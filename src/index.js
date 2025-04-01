import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import UM from './UserModule/UM';
import LM from './UserModule/LM';
import LOM from './LocationMaster/locationMaster';
import ServiceMasterClient from './ServiceMaster/ServiceMasterClient';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentMaster from './PaymentIntegration/PaymentMaster';
import UMEdit from './UserModule/UMEdit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
        <Routes>
          {/* <App /> */}
          <Route path='/' element={<LM />} />
          <Route path='/usermanagement' element={<UM />} />
          <Route path='/locationmaster' element={<LOM />} />
          <Route path='/servicemaster' element={<ServiceMasterClient/>}/>
          <Route path='/paymentmaster' element={<PaymentMaster/>}/>
          <Route path='/usermasteredit' element={<UMEdit/>}/>
        </Routes>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
