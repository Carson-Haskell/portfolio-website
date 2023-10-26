'use client';

import Lottie from 'lottie-react';
import React from 'react';
import HeaderNav from './HeaderNav';
import MobileNav from './MobileNav';
import Logo from '/public/assets/lotties/Logo.json';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);

    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`fixed w-full h-20 z-[100] bg-[#ecf0f3] ease-in duration-300 ${
        shadow ? 'shadow-md' : ''
      }`}
    >
      {/* Desktop navigation -- header */}
      <HeaderNav
        logo={<Lottie animationData={Logo} className="w-20 h-20" />}
        toggleNav={toggleNav}
      />

      {/* Mobile navigation -- sidebar */}
      <MobileNav
        logo={<Lottie animationData={Logo} className="w-20 h-20" />}
        toggleNav={toggleNav}
        nav={nav}
      />
    </div>
  );
};

export default Navbar;
