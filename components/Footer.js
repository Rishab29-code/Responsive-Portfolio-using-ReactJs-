import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeart } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Rishab.</span>
        <div className="links">
        <SocialIcon url="https://twitter.com/" />
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://instagram.com/" />
        </div>
        <p className="copyright">
          <FaHeart/>
          Created By Rishab
        </p>
      </div>
    </footer>
  );
}

export default Footer;