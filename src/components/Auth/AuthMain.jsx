import React from 'react';
import NavBar from './NavBar';
import AuthCard from './AuthCard';
import Banner from './Banner';
import Footer from './Footer';

const AuthMain = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <AuthCard />
      <Footer />
    </div>
  )
}

export default AuthMain