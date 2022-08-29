import React from 'react'
import { Col, Container, Form, Row, Table, Button} from 'react-bootstrap'

const ContactsCard = () => {
  return (
    <div>
      <div>
        <Container>
          <div>
            <Row>
              <Form>
                <Col>
                  <div>
                    <div className='h4 pb-3'>
                        Add contacts.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                      <Col sm>
                        <Row>
                          <Col>
                              <Form.Group className="mb-3" controlId="formBasicInput">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control type="text" placeholder="first name" />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3" controlId="formBasicInput">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="text" placeholder="Last name" />
                              </Form.Group>
                            </Col>
                          </Row>
                              <Col>
                                <Form.Group className="mb-3" controlId="formBasicInput">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="E.g. 0712345678" />
                                </Form.Group>
                              </Col>
                          <Row>
                        </Row>
                      </Col>
                      <Row>
                        <Col>
                          <Button variant="primary" type="submit">
                            Add Contact
                          </Button>
                        </Col>
                      </Row>
                  </div>
                </Col>
              </Form>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
      <div className='mt-2'>
        <Row>
          <Col> 
            <div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone no.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{1}</td>
                    <td>{`John`}</td>
                    <td>{`Doe`}</td>
                    <td>{`555-555-555`}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
      </Container>
    </div>
  )
}

export default ContactsCard;