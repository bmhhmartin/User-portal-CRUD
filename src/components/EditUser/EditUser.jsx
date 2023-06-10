import React, {useState, useEffect} from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
const axios = require("axios").default;

const EditUser = () => {
    
    return (
        <div>
                <Form>
                    <Form.Group>
                        <h4 className='bg-info p-2 text-center mb-3'>User ID: 1</h4>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <input type="file" name="image"/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>

                        <Button variant="success" className='btnGap' type='submit'>
                            Update
                        </Button>
                </Form>
            
        </div>
    );
};

export default EditUser;