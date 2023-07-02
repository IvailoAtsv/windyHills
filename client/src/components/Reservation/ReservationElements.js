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

export const ReservationContainer = styled.form`
width: 100%;
align:center;
display:flex;
flex-direction:row;
gap: 2rem;
background-color: black;
padding:2rem ;
align-items:center;
justify-content:center;
padding-bottom:5rem;
@media only screen and (max-width: 720px){
    flex-direction: column;
}
`

export const ReservationTitle = styled.span`
margin-top:2rem;
font-size: 2.5rem;
color : white;
font-weight:550;
text-align:center;
padding-bottom:2rem;
`

export const ReservationLabel = styled.label`
font-size: 1.5rem;
color: white;
text-align : left;
font-weight:500;
margin:.3rem ;
`
export const ReservationInput = styled.input`
    min-width: 100%;
    height:3.7rem;
    outline: none;
    border: 1px solid black;
    padding: 0.3rem auto;
    font-size: 14px;
    border-radius: 4px;
    text-align:center;
    @media only screen and (max-width: 720px){

        width:100%;
        
    }
`
export const DateTimeContainer = styled.div`
display: flex;
gap:1rem;
flex-direction: column;
position:relative;
top:0.9rem;
@media only screen and (max-width: 720px){
    display: flex;
    flex-direction: column;
}
`
export const ReservationInputContainer = styled.div`
width:20%;
display:flex;
flex-direction:column;
padding-bottom:1rem;
align-items:center;
justify-content:center;

@media only screen and (max-width: 720px){
    width: 70%;
}
`
export const TimeAndSubmitContainer = styled.div`
display:flex;
flex-direction:row;
gap:1rem;
`

export const ReservationSubmit = styled.button`
width: 12.5rem;
height: 2.9rem;
border-radius:5px;
border:none;
font-weight:600;
`