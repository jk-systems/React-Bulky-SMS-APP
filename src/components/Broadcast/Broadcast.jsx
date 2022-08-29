import React from 'react';
import BroadcastCard from './BroadCastCard';
import NavBar from '../Auth/NavBar';
import Banner from '../Auth/Banner';
import Footer from '../Auth/Footer';

const Broadcast = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <BroadcastCard />
      <Footer />
    </div>
  )
}

export default Broadcast;