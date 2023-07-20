import React from 'react';
import {
  FaFacebook,

} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const handleClickScroll = () => {
  const element = document.getElementById('hero')
  if(element){
    element.scrollIntoView({ behavior: "smooth"})
  }else{
    console.log('ne brat ne stava');
  }
}

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='#' onClick = { handleClickScroll }>Windy Hills</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/windy.hills.12/?locale=bg_BG' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
