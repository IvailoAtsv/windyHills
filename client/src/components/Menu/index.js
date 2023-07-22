import * as Products from '../Products/ProductsElements'
import { useEffect, useState } from "react";

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
    <Products.ProductsContainer>
      <Products.ProductsHeading>Меню</Products.ProductsHeading>
      <Products.ProductWrapper>
        {menu.map((product, index) => {
          return (
            <Products.ProductCard key={index}>
              <Products.ProductImg src={product.imageUrl} alt={product.name} />
              <Products.ProductInfo>
                <Products.ProductTitle>{product.name}</Products.ProductTitle>
                <Products.ProductDesc>{product.description}</Products.ProductDesc>
                <Products.ProductPrice>{product.price}</Products.ProductPrice>
              </Products.ProductInfo>
            </Products.ProductCard>
          );
        })}
      </Products.ProductWrapper>
      <Products.RedirectButton to='/'>Обратно</Products.RedirectButton>
    </Products.ProductsContainer>

  )
}
export default Menu