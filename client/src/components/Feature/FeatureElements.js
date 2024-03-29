import styled from 'styled-components';
import FeaturePic from '../../images/wine.jpg';
import { Link } from 'react-router-dom';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  object-fit:contain;
  max-height: 65vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding:1rem;
  @media only screen and (max-width:720px){
    max-height:70vh;
  }
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    text-shadow: 3px 3px #000000;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled(Link)`
width:15rem;
  font-size: 1.3rem;
  text-decoration:none;
  padding: 0.8rem 0.5rem;
  border-radius:6px;
  border: none;
  background: white;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;
