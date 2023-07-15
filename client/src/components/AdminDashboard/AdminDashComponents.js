import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AdminReservationShell = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  gap:2rem;
  justify-content: center;
  margin: 0;
  @media only screen and (max-width:720px){
    flex-direction:column;
  }
`
export const ReservationCard = styled.div`
padding:15px;
width: 300px;
background-color:white;
border:none;
border-radius:5px;
text-align:center;
display: flex;
flex-wrap: wrap;
flex-direction:column;
justify-content: center;
align-items:center;
`
export const ReservationTitle = styled.label`
font-size:1rem;
font-weight:500;

`
export const ReservationBtn = styled.button`
margin-top:1rem;
width:10rem;
height:2.5rem;
background-color:#4da4ea;
outline:none;
border:none;
font-size: 1rem;
border-radius:6px;
&:hover {
  transition: 0.2s ease-out;
  cursor: pointer;
  scale: 1.02;
}
`
export const RedirectButton = styled(Link)`
font-size: 1rem;
text-decoration: none;
width:10rem;
padding-top:0.5rem;
border: none;
border-radius:6px;
height:2.5rem;
outline:none;
background: #4da4ea;
text-align:center;
color: #000;
transition: 0.2 ease-out;
&:hover {
  transition: 0.2s ease-out;
  cursor: pointer;
  scale: 1.02;
}
`