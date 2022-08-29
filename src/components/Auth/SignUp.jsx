import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div className='mt-3 mb-5 pt-3 pb-3 border border-primary border-2 rounded-3 ps-3 px-3'>
        <Container>
            <div className="container__signup">
                <Form>
                    <Row>
                        <Col>
                            <div className='h4 pb-3'>
                                New user registration.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                        <Form.Group className="mb-3" controlId="formBasicInput">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        </Col>

                        <Col sm >
                            <Form.Group className="mb-3" controlId="formBasicInput">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" />
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                        </Col>

                        <Col sm>
                            <Form.Group className="mb-3" controlId="formBasicInput">
                                <Form.Label>Prefered username</Form.Label>
                                <Form.Control type="text" placeholder="E.g, Dave, Tom, John... etc" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>

                        <Col sm>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Repeat password</Form.Label>
                                <Form.Control type="password" placeholder="Repeat password" />
                                <Form.Text className="text-muted">
                                We'll never share your info with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicInput">
                            <Form.Label>Secret token key</Form.Label>
                            <Form.Control type="text" placeholder="Account creation token" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Row>
                </Form>
            </div>
        </Container>
        
    </div>
  )
}

export default SignUp