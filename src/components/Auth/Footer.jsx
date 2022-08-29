import React from 'react';
import { Container } from 'react-bootstrap';

import '../assets/styles/Footer.css';

const Footer = () => {
  return (
      <div className='footer bg-dark text-white'>
        <Container>
            <footer className="page-footer font-small blue pt-4 ">
                {/* <div className="container-fluid text-center text-md-left">
                </div> */}
                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="https://jk-systems.github.io/"> Radius Technologies | jk-systems </a>
                </div>
            </footer>
        </Container>
      </div>
  )
}

export default Footer