import React, {useState} from 'react';
// import "../node_module/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Button, Alert, Breadcrumb, Card,Container, Form, Row, Col} from 'react-bootstrap'

function App() {
  
  return (
    <>
     <h1 className=" text-center ">Welcome To Ravi's World</h1>
     <Form className='mb-3 '>
     <Container>
     <Row>
       <Col>
       <Form.Label>Email</Form.Label>
       <Form.Control type='email' placeholder='example@gmail.com' />
       <Form.Text className='text-muted'>
         We'll not share your email. Trust us...
       </Form.Text>
       </Col>

       <Col>
       <Form.Label>Password</Form.Label>
       <Form.Control type='password' placeholder='password' />
      
       </Col>
       <div className="container text-center">
       <Button variant="secondary" type='submit' >Submit</Button>
       </div>
       
     </Row>
     </Container>
     </Form>
     
       
     <Container>
     <Card className="mb-3" style={{color:"#000"}}>
       <Card.Img src="https://picsum.photos/300/300" />
       <Card.Body>
         <Card.Title>
           Card Example
         </Card.Title>
         <Card.Text>
           This is an example of a card using bootstrap
         </Card.Text>
         <Card.Text>
         <Button variant="success" >Read More</Button>
         </Card.Text>
       </Card.Body>
     </Card>

     </Container>
     
     <Breadcrumb>
       <Breadcrumb.Item>Test1</Breadcrumb.Item>
       <Breadcrumb.Item>Test2</Breadcrumb.Item>
       <Breadcrumb.Item active >Test3</Breadcrumb.Item>
     </Breadcrumb>
     <Alert variant="primary">
    This is just a button
     </Alert>
     <Button >Learn More</Button>
     
    </>
  );
}

export default App;
