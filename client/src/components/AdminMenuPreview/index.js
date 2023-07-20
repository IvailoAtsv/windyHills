import { useEffect, useState } from 'react';
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
  DelBtn
} from '../Products/ProductsElements';
import Cookie from 'universal-cookie'
import { AdminMenuPreviewDiv } from './AdminMenuPreview';
import { AdminTitle } from '../AdminDashboard/AdminDashComponents';


const AdminMenuPreview = () => {

  const cookies = new Cookie()

  const URL = 'http://localhost:4000/menu'
  const wineURL = `${URL}/drinks`
  const [menu, setMenu] = useState([])
  const [drinks,setDrinks] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const result = await fetch(URL)
      return result.json().then(json => setMenu(json))
    }
    const fetchWineMenu = async () => {
      const result = await fetch(wineURL)
      return result.json().then(json => setDrinks(json))
    }
    fetchMenu()
    fetchWineMenu()
  }, [])
  const handleClick = async (product) => {
    const data = { ...product, user: cookies.get('auth') }
    if (window.confirm('Сигурни ли сте че искате да изтриете ястието?')) {
      try {
        await fetch(`${URL}/menu/delete`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        window.location.reload(false)
      } catch (err) {
        console.log(err);
      }
    }
  }
  const handleWineClick = async (product) => {
    const data = { ...product, user: cookies.get('auth') }
    if (window.confirm('Сигурни ли сте че искате да изтриете ястието?')) {
      try {
        await fetch(`${URL}/drinks/delete`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        window.location.reload(false)
      } catch (err) {
        console.log(err);
      }
    }
  }
  console.log(menu);
  return (
    <AdminMenuPreviewDiv>
            <AdminTitle>Храни</AdminTitle>
      <ProductsContainer style={{ background: 'transparent' }}>
        <ProductWrapper>
          {menu.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.imageUrl} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <DelBtn onClick={() => handleClick(product)}>Изтриване</DelBtn>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>

      <AdminTitle>Напитки</AdminTitle>
      <ProductsContainer style={{ background: 'transparent' }}>
        <ProductWrapper>
          {drinks.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.imageUrl} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <DelBtn onClick={() => handleWineClick(product)}>Изтриване</DelBtn>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </AdminMenuPreviewDiv>

  )
}
export default AdminMenuPreview