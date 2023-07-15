import styled from 'styled-components';


export const AdminReservationShell = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
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
border-radius:6px;
`