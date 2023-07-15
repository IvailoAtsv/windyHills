import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0   ;
  @media only screen and (max-width:720px){
    flex-direction:column;
  }
`;


export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  object-fit:contain;
  border-radius:10px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1.3rem;
  text-decoration: none'
  padding: 0.8rem 0.5rem;
  border: none;
  background: white;
  color: #000;
  transition: 0.2 ease-out;
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    scale: 1.05;

  }
`;
export const RedirectButton = styled(Link)`
font-size: 1.3rem;
text-decoration: none;
padding: 0.8rem 0.5rem;
border: none;
width:15rem;
text-align:center;
border-radius:6px;
background: white;
color: #000;
transition: 0.2 ease-out;
&:hover {
  transition: 0.2s ease-out;
  cursor: pointer;
  scale: 1.05;
}
  
  `

export const DelBtn = styled.button`
  font-size: 1.2rem;
  text-decoration: none'
  width:30%
  height:10%;
  padding:0.6rem;
  text-align:center;
  margin-bottom:0.5rem;
  border: none;
  border-radius:5px;
  background:#4da4ea ;
  color: #000;
  transition: 0.2 ease-out;
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    scale: 1.05;

  }
`