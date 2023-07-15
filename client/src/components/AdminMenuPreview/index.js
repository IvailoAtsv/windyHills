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


const AdminMenuPreview = () =>{

  const cookies = new Cookie()

const URL = 'http://localhost:4000/menu'
  const [menu,setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const result = await fetch(URL)
      return result.json().then(json => setMenu(json))
    }
    fetchMenu()
  }, [])
  const handleClick = async (product) =>{
    const data = {...product,user:cookies.get('auth')}
    if(window.confirm('Сигурни ли сте че искате да изтриете ястието?')){
        try{
            await fetch('http://localhost:4000/menu/delete',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            window.location.reload(false)
        }catch(err){
            console.log(err);
        }
    }
}
console.log(menu);
    return (
        <ProductsContainer style={{background:'transparent'}}>
      <ProductWrapper>
        {menu.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.imageUrl} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <DelBtn onClick={()=>handleClick(product)}>Изтриване</DelBtn>
             </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
    )
}
export default AdminMenuPreview