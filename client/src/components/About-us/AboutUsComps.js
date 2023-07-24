import styled from 'styled-components';
import windy from '../../images/windyhill.jpg'
import { Link } from 'react-router-dom';

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
export const Heading = styled(Link)`
color:${textColor};
text-decoration:none;
font-size: clamp(3rem, 10vw, 5rem);
font-weight:bold;
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
@media only screen and (max-width:1000px){
  text-align:center;
  }
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
@media only screen and (max-width:1000px){
    width:80%;
    }
`
export const ParagraphPair = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin-bottom:2rem;
@media only screen and (max-width:1000px){
    flex-direction:column;
  
  }
`
export const ParagraphImg = styled.img`
aspect-ratio: 1 / 1;
width:40rem;
height:auto;
border-radius:50%;
border:solid 1rem #dcdcdc;
@media only screen and (max-width:1000px){
    width:25rem;
    border-radius:50%;
  }
`

export const AwardsContainer = styled.div`
width:100%;
height:30%;
display:flex;
flex-flow: row wrap;
align-items:center;
justify-content:center;
margin-bottom:5rem;
@media only screen and (max-width:720px){
  flex-flow: column wrap;

}
`
export const AwardImg = styled.img`
aspect-ratio: 1 / 1;
width:15rem;
height:auto;
border:solid 10px #dcdcdc;
:hover{
  transition:0.5s;
  transform:scale(2)
}
@media only screen and (max-width:600px){
  width:10rem;
  :hover{
    transition:0.5s;
    transform:scale(1.5)
  }
}
`