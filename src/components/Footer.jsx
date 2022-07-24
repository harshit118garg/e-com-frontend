import React from 'react'
import "../styles/Footer.css";
import {BsFillSuitHeartFill} from 'react-icons/bs';

const Footer = () => {
  return <>
  <footer className='sticky-bottom'>
    <p>© Copyright Reserved | Made by Harshit Garg <span><BsFillSuitHeartFill /></span></p>
  </footer>
  </>;
};

export default Footer;
