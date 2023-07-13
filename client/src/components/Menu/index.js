import { MenuContainer } from "./MenuElements"
import product1 from '../../images/food1.png';
import product2 from '../../images/food2.png';
import product3 from '../../images/food3.png';
import * as Products from '../Products/ProductsElements'
import { useEffect, useState } from "react";

const Menu = () => {

  const URL = 'http://localhost:4000/menu'
  const [menu,setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const result = await fetch(URL)
      return result.json().then(json => setMenu(json))
    }
    fetchMenu()
  }, [])

  const data = [
    {
      img: product1,
      alt: 'свински врат',
      name: 'Бавно печен свински врат',
      desc:
        'свински врат, печен на бавен огън с канапе от картофено пюро, поднесен със сотирани картофи',
      price: '18.89 BGN',

    },
    {
      img: product2,
      alt: 'Smoked salmon salad',
      name: 'Салата с пушена сьомга',
      desc:
        'Салата с пушена сьомга и сирене халуми',
      price: '15.89 BGN',
    },
    {
      img: product3,
      alt: '',
      name: 'Фермерска дъска',
      desc: 'поднесена с колекция от подбрани регионални сирена и кашкавали',
      price: '52.99 BGN',
    },
    {
      img: product3,
      alt: '',
      name: 'Фермерска дъска 2',
      desc: 'поднесена с колекция от подбрани регионални сирена и кашкавали',
      price: '52.99 BGN',
    }
  ];
  return (
    <Products.ProductsContainer>
      <Products.ProductsHeading>Меню</Products.ProductsHeading>
      <Products.ProductWrapper>
        {menu.map((product, index) => {
          return (
            <Products.ProductCard key={index}>
              <Products.ProductImg src={product.img} alt={product.name} />
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