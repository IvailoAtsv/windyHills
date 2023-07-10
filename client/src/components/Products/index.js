import React from 'react';
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
  ProductButton,
  RedirectButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>Предложения от нашата кухня</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
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
