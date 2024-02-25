import * as Products from '../Products/ProductsElements'
import { useEffect, useState } from "react";
import { MenuCard, MenuContainer, MenuImg, MenuWrapper } from './MenuElements';

const Menu = () => {

  const URL = `${process.env.REACT_APP_BACKEND}/menu`
  const [menu,setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const result = await fetch(URL)
      return result.json().then(json => setMenu(json))
    }
    fetchMenu()
  }, [])

  return ( 
    <MenuContainer>
      <Products.ProductsHeading>Меню</Products.ProductsHeading>
      <MenuWrapper>
        {menu.map((product, index) => {
          return (
            <MenuCard key={index}>
              <MenuImg src={product.imageUrl} alt={product.name} />
              <Products.ProductInfo>
                <Products.ProductTitle>{product.name}</Products.ProductTitle>
                <Products.ProductDesc>{product.description}</Products.ProductDesc>
                <Products.ProductPrice>{product.price}</Products.ProductPrice>
              </Products.ProductInfo>
            </MenuCard>
          );
        })}
      </MenuWrapper>
      <Products.RedirectButton to='/'>Обратно</Products.RedirectButton>
    </MenuContainer>

  )
}
export default Menu