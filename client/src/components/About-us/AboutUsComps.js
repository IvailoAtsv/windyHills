import styled from 'styled-components';
import windy from '../../images/windyhill.jpg'

const mainColor = '#white'
const textColor = 'black'
export const NavBar = styled.nav`
width:100%;
height:15%;
background-color:${mainColor};
display:flex;
algn-items:center;
justify-content:center;
`

export const BgContainer = styled.div`
    background: url(${windy});
    height: 60vh;
    width:100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   
        @media only screen and (max-width:720px){
        background-attachment: scroll;

        }

`

export const MainContainer = styled.div`
height:100%;
width:100%;
background-color:${mainColor};

`
export const Heading = styled.h1`
color:${textColor};
font-size: clamp(2rem, 10vw, 4rem);
  padding:2rem;
  box-shadow:none;
  letter-spacing: 3px;
  text-align:center;
`
export const Article = styled.article`
height:100%;
width:100%;
margin-top:2rem;
color:${textColor};
background-color:${mainColor};
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap:2rem;
`
export const Title = styled.h1`
font-size: clamp(2rem, 5vw, 3rem);
padding-bottom:5rem;
`
export const Paragraph = styled.p`
width:40%;
text-align:justify;
font-size:1.5rem;
margin-top:2rem;
padding-right:4rem;
@media only screen and (max-width:1000px){
    width:80%;
    }
`
export const ParagraphPair = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
@media only screen and (max-width:1000px){
    flex-direction:column;
  
  }
`
export const ParagraphImg = styled.img`
aspect-ratio: 1 / 1;
width:40rem;
border-radius:50%;
border:solid 1rem #dcdcdc;
@media only screen and (max-width:1000px){
    width:25rem;
    border-radius:50%;
  }
`