import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <Container className="w-25 mx-auto">
        <h2>Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
       
        <Button variant="secondary" type="submit" className="w-full">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
           Don't Have An Account? 
           <Link to="/register">Register</Link>
          </Form.Text>
        <Form.Text className="">
           
          </Form.Text>
      </Form>

    </Container>
  );
};

export default Login;
