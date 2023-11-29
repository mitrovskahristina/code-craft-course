import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import "./index.css";
import Button from "../../UI/Button";

const ApplicationForm = ({ name, callback }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCancel = () => {
    const modalCancel = false;
    callback(modalCancel);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^07\d{7}$/;

    const errors = {};

    if (!firstName.match(nameRegex)) {
      errors.firstName = "First name can only contain alphabetic characters.";
    }

    if (!lastName.match(nameRegex)) {
      errors.lastName = "Last name can only contain alphabetic characters.";
    }

    if (!email.match(emailRegex)) {
      errors.email = "Invalid email address.";
    }

    if (!phoneNumber.match(phoneRegex)) {
      errors.phoneNumber =
        "Invalid phone number. It should be in the format 07*******.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Reset form values and errors
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setValidationErrors([]);

    setIsSuccess(true);

    handleCancel();
  };

  return (
    <form className="application_form">
      <p>Please fill in your information to apply for the course.</p>
      {isSuccess && <p className="success_message" style={{padding: "10px"}}>Successfully Applied for the course.</p>}
      <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-4 first_name_input"
      >
        <Form.Control
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {validationErrors.firstName && (
          <p className="error_message">{validationErrors.firstName}</p>
        )}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-4"
      >
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {validationErrors.lastName && (
          <p className="error_message">{validationErrors.lastName}</p>
        )}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email Address"
        className="mb-4"
      >
        <Form.Control
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {validationErrors.email && (
          <p className="error_message">{validationErrors.email}</p>
        )}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-4"
      >
        <Form.Control
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {!validationErrors.phoneNumber && (
          <p>Please enter a phone number in the format 07*******.</p>
        )}
        {validationErrors.phoneNumber && (
          <p className="error_message">{validationErrors.phoneNumber}</p>
        )}
      </FloatingLabel>
      <div className="form_buttons">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Apply</Button>
      </div>
    </form>
  );
};

export default ApplicationForm;
