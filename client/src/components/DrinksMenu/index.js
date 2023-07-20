import { useEffect, useState } from 'react'
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
    RedirectButton,
    DelBtn,
} from '../Products/ProductsElements'


const DrinksMenu = () => {

    const URL = process.env.REACT_APP_BACKEND
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
        <ProductsHeading>Меню</ProductsHeading>
        <ProductWrapper>
          {menu.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.imageUrl} alt={product.name} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.description}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
        <RedirectButton to='/'>Обратно</RedirectButton>
      </ProductsContainer>

    )
}
export default DrinksMenu