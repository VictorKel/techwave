'use client';

import React, { useState } from 'react'
import Nav from './Nav';
import MobileNav from './MobileNav';


const ResponsiveNav = () => {

  const [showNav, setShowNav]=useState(false);
  const handleNavShow = () => {
    setShowNav(true);
  }
  const handleNAVHide = () => {
    setShowNav(false);
  }


  return (
    <div>
        <Nav openNav={handleNavShow}/>
        <MobileNav showNav={showNav} closeNav={handleNAVHide} />
    </div>
  );
};

export default ResponsiveNav; 