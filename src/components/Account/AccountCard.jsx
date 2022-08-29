import React from 'react';
import { Container, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

import '../assets/styles/AccountCard.css';

const AccountCard = () => {
  return (
    <div className='bodymain pt-2 pb-2'>
        <Container>
            <div className="mt-4 mb-4 border border-primary border-2 rounded-3 ps-4 px-4 pt-4 pb-4 bg-secondary ">
                <Form>
                    <Row>
                        <Col>
                            <div className='h4 pb-3'>
                                Update your account.
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
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Generate key for new user"
                          aria-label="Generate key for new user"
                          aria-describedby="token component"
                        />
                        <Button variant="primary outline-secondary" id="button-addon2">
                          Generate secret key
                        </Button>
                      </InputGroup>
                    </Row>
                    <Row>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Row>
                </Form>
            </div>
        </Container>
      </div>
  )
}

export default AccountCard