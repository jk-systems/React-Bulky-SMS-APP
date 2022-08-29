import {React, useState, useEffect} from 'react';
import { Col, Form, Button, Row, Container } from 'react-bootstrap';

import '../assets/styles/LogIn.css';


const LogIn = () => {
  return (
    <div className='mt-3 mb-5 pt-3 pb-3 border border-primary border-2 rounded-3 ps-3 px-3'>
        <div className="container__login">
            <Row>
                <Col>
                    <div className='h4 pb-3'>
                        User log-in.
                    </div>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Col>
                        <Row>
                            <Form.Group className="mb-3 text-dark" controlId="formBasicInput">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Text className="text-muted">
                                We'll never share your info with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="mb-3 text-dark" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember my info?" />
                        </Form.Group>
                        </Row>
                        
                        <Container><Row>
                            <Button variant="primary" type="submit">
                                LogIn
                            </Button></Row>
                        </Container>
                        
                    </Col>
                </Form>
            </Row>
        </div>
        
    </div>
  )
}

export default LogIn
