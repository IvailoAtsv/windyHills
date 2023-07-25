import styled from "styled-components";
import backgr from './gallery/backgr.jpg'
import { Link } from "react-router-dom";

export const GalleryContainer = styled.div`
background: url(${backgr});
    background-attachment: fixed;
    background-position: bottom;
    background-size: cover;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const GalleryNav = styled.div`
display:flex;
width:100%;
height:20%;
justify-content:space-between;
align-items:center;
`
export const GalleryBack = styled(Link)`
width:12%;
height:5%;
color:black;
font-size:4rem;
padding-top:1rem;
border-radius:50%;
text-align:center;
:hover{
    transition:0.5s;
    transform:scale(1.15);
}
`
export const GalleryImg = styled.img`
height:300px;
width:auto !important;
object-fit:contain;
margin:1rem 1rem 0 0;
border:solid 5px #dcdcdc;

:hover{
    transition:0.5s;
    transform:scale(1.5);
  }
`
export const GalleryTitle = styled.h1`
font-size: clamp(3rem, 10vw, 5rem);
text-align:center;
vertical-align:top;
`
export const ImgContainer = styled.div`
width:100%;
height:100%;
padding:2rem;

display:flex;
flex-flow: row wrap;
justify-content:center;
align-items:center;
`