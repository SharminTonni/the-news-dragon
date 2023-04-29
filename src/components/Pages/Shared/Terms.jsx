import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Our Terms And Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        voluptatum expedita vitae animi? Quisquam quos quas ab aspernatur
        voluptatum. Omnis aut nobis modi sequi quos, nulla minus unde fugit
        accusamus.
      </p>
      <p>
        Go Back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
