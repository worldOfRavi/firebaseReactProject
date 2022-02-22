import React, { useState } from 'react';
// import "../node_module/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// // import {Button, Alert, Breadcrumb, Card,Container, Form, Row, Col} from 'react-bootstrap'
// import { Button } from 'react-bootstrap';
// import News from './News';
// import axios from 'axios';
import Home from './Home';
import Service from './Service';
import ContactUs from './ContactUs';
import About from './About';
import {Routes, Route} from 'react-router-dom';
import Error from './Error';

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/service' element={<Service />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='*' element={<Error />} />
    </Routes>
     </>
  );
}

export default App;
