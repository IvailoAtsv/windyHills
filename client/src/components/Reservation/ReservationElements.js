import styled from 'styled-components';

export const ReservationShell = styled.div`
width: 100%;
align:center;
display:flex;
flex-direction:column;
background-color: black;
align-items:center;
justify-content:center;
`
export const ReservationDataContainer = styled.div`
width: 100%;
align:center;
display:flex;
flex-direction:column;
gap: 2rem;
flex-flow:flow;
background-color: black;
padding:2rem ;
align-items:center;
justify-content:center;
padding-bottom:5rem;
@media only screen and (max-width: 1024px){
    flex-direction: column;
}
`

export const ReservationContainer = styled.form`
width: 100%;
align:center;
display:flex;
flex-direction:column;
gap: 2rem;
flex-flow:flow;
background-color: black;
padding:2rem ;
align-items:center;
justify-content:center;
padding-bottom:5rem;
@media only screen and (max-width: 1024px){
    flex-direction: column;
}
`

export const ReservationTitle = styled.span`
margin-top:4rem;
font-size: 2.5rem;
color : white;
font-weight:550;
text-align:center;
padding-bottom:2rem;
`

export const ReservationLabel = styled.label`
font-size: 1.5rem;
color: white;
text-align : center;
font-weight:500;
margin:.3rem ;
`
export const ReservationInput = styled.input`
    min-width: 30%;
    height:3.7rem;
    outline: none;
    border: 1px solid black;
    padding: 0.3rem auto;
    font-size: 1.5rem;
    border-radius: 4px;
    text-align:center;
    @media only screen and (max-width: 720px){

        width:100%;
        
    }
`

export const ReservationInputContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex-flow:flow;
`
export const TimeContainer = styled.div`
width:30%;
display:flex;
flex-direction:row;
justify-content:center;
gap:1rem;
`

export const ReservationSubmit = styled.button`
width: 12.5rem;
height: 2.9rem;
border-radius:5px;
border:none;
background-color:#4da4ea;
padding:10px;
font-weight:500;
font-size:1rem;
&:hover {
    transition: 0.2s ease-out;
    scale:1.02;
  }
`
export const ReservationHourPicker = styled.select`
width:100%;
height:3rem;
border-radius:5px;
border:none;
font-size:1rem;
`
export const ReservationMinPicker = styled.select`
width:100%;
height:3rem;
border-radius:5px;
border:none;
font-size:1rem;
`
export const ReservationOption = styled.option`
font-family: 'Kanit', sans-serif;
font-size:1rem;
`
export const ReservationCalendar = styled.input`
background-color:white;
min-width:30%;
padding:1rem;
font-family: 'Kanit', sans-serif;
border:none;
text-align:center;
border-radius:6px;
outline:none;
font-size:1.2rem;

::-webkit-datetime-edit-text { padding: 0 2rem; }
  ::-webkit-datetime-edit-month-field { text-transform: uppercase; }
  ::-webkit-datetime-edit-day-field { text-transform: uppercase; }
  ::-webkit-datetime-edit-year-field { text-transform: uppercase; }
  ::-webkit-inner-spin-button { display: none; }
  ::-webkit-calendar-picker-indicator { 
    background: transparent;
    padding:0.3rem;
 }
`
export const ResSent = styled.h1`
font-size:4rem;
color: white;
text-align : center;
font-weight:600;
margin-top:10rem ;
margin-bottom:10rem ;
`