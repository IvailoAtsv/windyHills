import styled from "styled-components";

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