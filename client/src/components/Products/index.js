import React, { useEffect, useState } from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  RedirectButton
} from './ProductsElements';

const Products = ({ data }) => {
  const URL = 'http://localhost:4000/menu'
  const [menu,setMenu] = useState([])
  useEffect(() => {
    const fetchMenu = async () => {
      const result = await fetch(URL)
      return result.json().then(json => setMenu(json))
    }
    fetchMenu()
  }, [])
  return (
    <ProductsContainer>
      <ProductsHeading>Предложения от нашата кухня</ProductsHeading>
      <ProductWrapper>
        {menu.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.imageUrl} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
        <RedirectButton to="/menu">Разгледайте Меню</RedirectButton>
    </ProductsContainer>
  );
};

export default Products;
