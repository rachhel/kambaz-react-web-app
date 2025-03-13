import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap styles are applied
import React, { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");

  return (
    <div>
      <h2>String State Variables</h2>
      <Form.Control
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr />
    </div>
  );
}
