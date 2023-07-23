import styled from "styled-components";

export const MenuWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(2, 1fr);

@media only screen and (max-width:1000px){
  display:flex;
  flex-direction:column;
  align-items:center;
  justiy-content:center;
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