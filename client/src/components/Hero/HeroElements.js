import styled, { keyframes } from 'styled-components';
import ImgBg from '../../images/windy-hills-top-view.jpg';

export const BgContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${ImgBg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-size:cover;
  overflow:hidden;
  :before{
    filter: blur(5px);
}
`
const slideInFromLeft = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(0);
}
`;

export const HeroContainer = styled.div`
  height: 100vh;
  width:100vw;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 65vh);
  max-height: 100%;
  padding: 0rem calc((100vw - 85vw) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  animation-name: 1s ease-out 0s 1 ${slideInFromLeft};
  animation-duration:1s;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow:none;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  border-radius:8px;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: none;
  background:white ;
  color: #000;
  transition: 0.5s ease-out;
  display:flex;
  gap:2rem;
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    scale: 1.05;
  }
  @media screen and (max-width: 650px) {
    font-size:1rem;
  }
  `
 
