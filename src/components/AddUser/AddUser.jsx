import React, {useState} from 'react';
import { Container,Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const axios = require("axios").default;

const AddUser = () => {

    return (
        <>
            <Container>
                <h1 className="title">Add User</h1>
                     <Form>
                        <Form.Group className="mb-3">
                            <input type="file" name="uImage"/>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" name="fName" placeholder='First Name'/>
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" name="lName" placeholder='Last Name'/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="uEmail" placeholder='Email'/>
                            </Form.Group>
                        </Row>
                        <Button variant="success" type="submit">Create User</Button>
                    </Form>
            </Container>
            <ToastContainer />
        </>
    );
}

export default AddUser;
