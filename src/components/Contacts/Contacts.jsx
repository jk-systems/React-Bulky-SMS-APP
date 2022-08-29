import React from 'react';
import ContactsCard from './ContactsCard';
import NavBar from '../Auth/NavBar';
import Banner from '../Auth/Banner';
import Footer from '../Auth/Footer';

const Contacts = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <ContactsCard />
      <Footer />
    </div>
  )
}

export default Contacts