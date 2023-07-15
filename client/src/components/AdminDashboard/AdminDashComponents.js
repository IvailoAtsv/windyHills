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
width: 300px;
background-color:white;
border:none;
border-radius:5px;
text-align:center;
padding:5px;
display: flex;
flex-wrap: wrap;
flex-direction:column;
justify-content: center;
`
export const ReservationTitle = styled.label`
font-size:1rem;
font-weight:600;
`