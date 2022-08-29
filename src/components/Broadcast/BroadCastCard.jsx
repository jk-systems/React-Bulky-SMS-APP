import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const BroadCastCard = () => {
  return (
    <div className='bodymain'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={6}>
            <div className='border border-primary border-2 rounded-3 pt-3 pb-3 ps-3 px-3 mt-5 mb-5'>
            <Form className='justify-content-md-center'>
                    <Row>
                        <Col md={8}>
                            <div className='h4 pb-3'>
                                Send a broadcast message.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                          <Form.Group className="mb-3" controlId="formBasicInput">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" placeholder="Enter subject" />
                          </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Short messaging service</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Row>
                    <Row>
                      {/* <Form.Select>
                        <option>Select users group</option>
                        <option value="1">Members</option>
                        <option value="2">BOG</option>
                        <option value="3">All</option>
                      </Form.Select> */}
                    </Row>
                    <Row>
                      <Col md={8}>
                        <Button variant="primary" type="submit">
                            Broadcast
                        </Button>
                      </Col>
                    </Row>
                </Form>             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BroadCastCard;