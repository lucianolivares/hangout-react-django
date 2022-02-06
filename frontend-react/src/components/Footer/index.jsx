import React from 'react';
// import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { CopyRightContainer, FooterContainer } from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      {/* <FlexLayout>
        <FaLinkedinIn />
        <FaInstagram />
        <FaFacebookF />
      </FlexLayout> */}
      <CopyRightContainer>
        <small>© 2022 Hangout - Restorant Reservations - Privacy Policy</small>
      </CopyRightContainer>
    </FooterContainer>
  );
}

export default Footer;
