import React from 'react';
import NavBar from '../Auth/NavBar';
import Banner from '../Auth/Banner';
import AccountCard from './AccountCard';
import Footer from '../Auth/Footer';

const Account = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <AccountCard />
      <Footer />
    </div>
  )
}

export default Account