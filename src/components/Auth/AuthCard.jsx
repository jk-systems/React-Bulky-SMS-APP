import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogIn from './LogIn';
import SignUp from './SignUp';

import '../assets/styles/AuthCard.css';

const AuthCard = () => {
  return (
    <div className='bodymain'>
      <Container>
        <Row g-3>
            <Col sm>
             <div>
                <LogIn />
             </div>
            </Col>
            <Col xs={8} sm>
            <div>
                <SignUp />
            </div>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default AuthCard