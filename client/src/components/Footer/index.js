import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaLocationArrow,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import {FaRegCalendarAlt} from 'react-icons/fa'
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
  ContactPairDiv,
  LogoContainer,
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
        <LogoContainer>
        <SocialLogo to='#' onClick = { handleClickScroll }>Windy Hills<br /> Chateau</SocialLogo>
        <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/windy.hills.12/?locale=bg_BG' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/chateau_windyhills/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://grabo.bg/places/chateau-windy-hills' target='_blank' aria-label='Instagram'>
                <FaRegCalendarAlt />
              </SocialIconLink>
            </SocialIcons>
        </LogoContainer>
        <ContactDiv>
          <Heading>Контакти</Heading>
          <ContactPairDiv><FaPhone /> +359886467444</ContactPairDiv>
          <ContactPairDiv> <FaLocationArrow /> <ContactA href='https://www.google.com/maps/place/Chateau+Windy+Hills/@42.608956,26.2151947,17z/data=!3m1!4b1!4m9!3m8!1s0x40a88287aa3d8225:0xe862bd9c9f3424a0!5m2!4m1!1i2!8m2!3d42.6089521!4d26.2177696!16s%2Fg%2F11b6d4bdc8?entry=ttu'> Локация</ContactA></ContactPairDiv>
          <ContactPairDiv><MdEmail/> windyhills@abv.bg</ContactPairDiv>
          
        </ContactDiv>

        <LinkContainer>
        <Heading>Полезно</Heading>
          <h3><ContactA style={{padding:'3rem'}}href="https://grabo.bg/places/chateau-windy-hills">Хотел</ContactA></h3>
          <h3><FooterLink to="/about-us">За нас</FooterLink></h3>
          <h3><FooterLink to="/gallery">Галерия</FooterLink></h3>

        </LinkContainer>
            
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
