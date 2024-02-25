import styled from "styled-components";
import backgr from '../../images/menubackgr.jpg'

export const MenuContainer = styled.div`
background: url(${backgr});
background-attachment: fixed;
background-position: center;
background-size: cover;
   width: 100%; 
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const MenuWrapper = styled.div`

width:100%;
height:100%;
display:flex;
align-items:center;
flex-flow:row wrap;
justiy-content:space-between;

@media only screen and (max-width:1000px){
  display:flex;
  flex-direction:column;
  align-items:center;
  justiy-content:space-between;
}
`
export const MenuCard = styled.div`
display:flex;

`
export const MenuImg = styled.img`
  height: 300px;
  width:300px;
  margin-top:2rem;
  object-fit:contain;
  border-radius:10px;
`;