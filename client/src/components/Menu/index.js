import { MenuContainer } from "./MenuElements"
import product1 from '../../images/food1.png';
import product2 from '../../images/food2.png';
import product3 from '../../images/food3.png';
import * as Products from '../Products/ProductsElements'
import { useEffect, useState } from "react";

const Menu = () => {

  const URL = process.env.REACT_APP_BACKEND
  const [menu,setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const result = await fetch(URL)
      return result.json().then(json => setMenu(json))
    }
    fetchMenu()
  }, [])
 const data =
    {
      img: product3,
      alt: '',
      name: 'Фермерска дъска 2',
      desc: 'поднесена с колекция от подбрани регионални сирена и кашкавали',
      price: '52.99 BGN',
    }
  ;
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