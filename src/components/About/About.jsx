import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div className='pt-5 pb-5 bg-light'>
      <Container>
        <Row>
          <Col>
            <div>
              <div className='h4'>
                About portal
                </div>
                <div>
                <small className='h6'>
                  Made for Wahudumu Sacco Ltd.
                </small>
                <br/>
                <small className='h6 pt-2'>
                  About Developer.
                  <p>
                  Radius SMS Engine is a leading SMS messaging service provider offering two-way SMS communication services from your internet enabled device/computer. The SMS gateway reaches across borders and connects to over 1200 mobile network operators world-wide.
                  </p>
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About