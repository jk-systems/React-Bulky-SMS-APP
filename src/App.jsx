import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthMain from './components/Auth/AuthMain';
import About from './components/About/AboutEngine';
import Broadcast from './components/Broadcast/Broadcast';
import Contacts from './components/Contacts/Contacts';
import Account from './components/Account/Account';
import NotFound from './components/Errors/NotFound';

import './components/assets/styles/App.css';

function App() {
  return (
      <div className='main'>
    
      <Routes>
        <Route path="/" element={<AuthMain />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/broadcast" element={<Broadcast />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
  
      </div>
  );
}

export default App;
