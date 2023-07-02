import styled from 'styled-components';
import FeaturePic from '../../images/wine.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  object-fit:contain;
  max-height: 50vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.3rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #87ceeb;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    scale: 1.05;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
