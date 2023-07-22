import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaLocationArrow,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  ContactDiv,
  ContactH3,
  Heading,
  ContactA,
  FooterLink,
  LinkContainer,
} from './FooterElements';

const handleClickScroll = () => {
  const element = document.getElementById('hero')
  if(element){
    element.scrollIntoView({ behavior: "smooth"})
  }
}

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
            <SocialLogo to='#' onClick = { handleClickScroll }>Windy Hills Chateau</SocialLogo>
        <ContactDiv>
          <Heading>Контакти</Heading>
          <ContactH3><FaPhone /> +359886467444</ContactH3>
          <ContactH3> <ContactA href='https://www.google.com/maps/place/Chateau+Windy+Hills/@42.608956,26.2151947,17z/data=!3m1!4b1!4m9!3m8!1s0x40a88287aa3d8225:0xe862bd9c9f3424a0!5m2!4m1!1i2!8m2!3d42.6089521!4d26.2177696!16s%2Fg%2F11b6d4bdc8?entry=ttu'><FaLocationArrow /> Локация</ContactA></ContactH3>
          <ContactH3><MdEmail/> windyhills@abv.bg</ContactH3>
          <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/windy.hills.12/?locale=bg_BG' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/chateau_windyhills/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
        </ContactDiv>

        <LinkContainer>
        <Heading>Полезни Линкове</Heading>
          <FooterLink to="/menu">Меню</FooterLink> <br />
          <FooterLink to="/drinks">Напитки</FooterLink><br />
          <FooterLink to="/about-us">За нас</FooterLink><br />
          <FooterLink to="/gallery">Галерия</FooterLink><br />

        </LinkContainer>
            
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
