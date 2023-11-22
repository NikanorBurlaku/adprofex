import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="wrapper">
      <img src="img/logo.svg" alt="logo" class="logo__img" />
      <div className='footer__links'>
        <a href='mailto:info@adprofex-ltd.com'>info@adprofex-ltd.com</a>
        <a href='privacy.pdf'>Privacy Policy</a>
        <span>Adprofrex Limited 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
