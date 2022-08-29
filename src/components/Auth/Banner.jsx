import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BgImage from '../assets/images/sms.jpg';

import '../assets/styles/Banner.css';

const Banner = () => {
  return (
    <div className='banner pb-3' style={{ backgroundImage: `url(${BgImage})`}}>
        <Container>
          <Row>
            <Col>
              <div className='h4'>
                Welcome to SMS Portal 
                <br/>
                  <small className='text-muted h6'>
                    Super fast, robust bulky SMS client portal running on Radius USSD backend engine- designed with latest tech for awesome people.
                  </small>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Banner