import styled from 'styled-components';
import ImgBg from '../../images/windy-hills-top-view.jpg';
import { MdRestaurantMenu } from 'react-icons/md'

export const BgContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${ImgBg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-size:cover;
  overflow:auto;
  :before{
    filter: blur(5px);
}
`

export const HeroContainer = styled.div`
  height: 100vh;
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
  font-size: 1.4rem;
  padding: 0.5rem 0.7rem;
  border: none;
  background:#38cb82 ;
  color: #000;
  transition: 0.5s ease-out;
  display:flex;
  align-items:center;
  gap:2rem;
  &:hover {
    background: #64e3a1;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    scale: 1.05;
  }
`;
