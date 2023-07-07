import { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Toast } from 'react-bootstrap';
import Button from '../UI/Button/index'

import './index.css'

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        //validation check
        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const errors = {};

        if (!firstName.match(nameRegex)) {
            errors.firstName = 'First name can only contain alphabetic characters.';
        }

        if (!lastName.match(nameRegex)) {
            errors.lastName = 'Last name can only contain alphabetic characters.';
        }

        if (!email.match(emailRegex)) {
            errors.email = 'Invalid email address.';
        }

        if (message.trim() === '') {
            errors.message = 'Please write a message.';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setValidationErrors([]);

        setShowToast(true);
    }


    return (
        <form className="contact_form" onSubmit={handleSubmit}>
            <div className='full_name_input'>
                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-4 first_name_input" >
                    <Form.Control
                        type="text"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {validationErrors.firstName && <p className="error_message">{validationErrors.firstName}</p>}
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-4" >
                    <Form.Control
                        type="text"
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {validationErrors.lastName && <p className="error_message">{validationErrors.lastName}</p>}
                </FloatingLabel>
            </div>
            <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-4" >
                <Form.Control
                    type="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {validationErrors.email && <p className="error_message">{validationErrors.email}</p>}
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Your Message" className="mb-4" >
                <Form.Control 
                    as="textarea" 
                    placeholder='Your Message' 
                    value={message}
                    style={{ height: '150px' }} 
                    onChange={(e) => setMessage(e.target.value)}
                />
                {validationErrors.message && <p className="error_message">{validationErrors.message}</p>}
            </FloatingLabel>
            <Button type='submit'>Submit</Button>

            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                style={{
                    position: 'fixed',
                    top: 20,
                    right: '35%',
                    zIndex: 1,
                }}
            >
                <Toast.Header>
                    <strong className="me-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>Message sent successfully!</Toast.Body>
            </Toast>
        </form>
    )
}

export default ContactForm;