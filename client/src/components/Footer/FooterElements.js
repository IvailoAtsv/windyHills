import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  width:100%
`;

export const FooterWrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:3rem;
  max-width:60%
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const ContactDiv = styled.div`
width:30vw;
height:100%
display:flex;
gap:1.5rem;
flex-direction:column;
text-align:center;
`
export const Heading = styled.h1`
color:white;
padding-bottom:1rem;
`
export const ContactA = styled.a`
color:white;
text-decoration:none;
`

export const ContactH3 = styled.h3`
color:white;
font-size:1.2rem;
font-weight:500;
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  padding-left:15rem;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap:1rem;
  align-items: center;

`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const LinkContainer = styled.div`
width:30vw;
height:100%
display:flex;
flex-direction: column;
gap:2rem;
text-align:center;
`

export const FooterLink = styled(Link)`
color:white;
font-size:1.2rem;
text-decoration: none;
cursor: pointer;

`