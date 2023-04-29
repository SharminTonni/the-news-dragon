import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        updateUser(createdUser, name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("name updated");
      })
      .catch((err) => console.log(err));
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <Container className="w-25 mx-auto">
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo Url"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms"> Terms and Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button
          disabled={!accepted}
          variant="secondary"
          type="submit"
          className="w-full"
        >
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have An Account?
          <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className=""></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
