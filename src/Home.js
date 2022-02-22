import React, { useState } from 'react';
// import "../node_module/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// // import {Button, Alert, Breadcrumb, Card,Container, Form, Row, Col} from 'react-bootstrap'
// import { Button } from 'react-bootstrap';
// import News from './News';
// import axios from 'axios';
import Navbar from "./Navbar"
import Header from "./Header"
import HowItWorks from "./HowItWorks"
import Aboutus from './Aboutus';
import Services from './Services'
import Contact from "./Contact"
import Footer from "./Footer"

function Home() {
 

  return (
    <>
      <Navbar />
     <Header />
     <HowItWorks />
     <Aboutus />
     <Services />
     <Contact />
     <Footer />
     </>
  );
}

export default Home;
