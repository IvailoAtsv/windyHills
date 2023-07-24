import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  width:100%;
  display:flex;
  justify-content:space-evenly;
  gap:2rem;

`;

export const FooterWrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:5rem;
  width:100%
  margin: 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
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
width:40%;
height:100%
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
gap:1rem;
@media screen and (max-width: 820px) {
  width:80%;
}
`
export const LinkContainer = styled.div`
width:40%;
height:100%
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
gap:1rem;
@media screen and (max-width: 820px) {
  width:80%;
}
`
export const LogoContainer = styled.div`
width:40%;
height:100%
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width: 820px) {
  width:80%;
}
`
export const Heading = styled.h1`
color:white;
padding-bottom:1rem;
text-align:center;
`
export const ContactA = styled.a`
color:white;
text-decoration:none;
padding:0;
`

export const ContactPairDiv = styled.h3`
display:flex;
justify-content:center;
align-items:center;
gap:1rem;
color:white;
font-weight:500;
`
export const LinkPairDiv = styled.h3`
display:flex;
justify-content:center;
align-items:center;
gap:1rem;
padding-left:.5rem;
color:white;
font-weight:500;
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
width:100%;
  display: flex;
  justify-content: flex-start;
  gap:1.5rem;
  align-items: center;
  margin-top:1rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;



export const FooterLink = styled(Link)`
color:white;
height:100%;
text-decoration: none;
cursor: pointer;
font-weight:500;
`