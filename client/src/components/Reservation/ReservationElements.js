import styled from 'styled-components';

export const ReservationContainer = styled.form`
width: 100%;
display:grid;
grid-template-columns:
repeat(2,1fr);
row-gap: 0.2rem;
column-gap:2rem;
align-items:center;
background-color: black;
padding:2rem ;

@media only screen and (max-width: 720px){
    display: flex;
    flex-direction: column;
    row-gap: 0px;
}
`

export const ReservationTitle = styled.span`
font-size: 1.5rem;
color : white;
font-weight:550;
text-align:center;
padding-bottom:2rem;
`

export const ReservationLabel = styled.label`
font-size: 1rem;
color: white;
text-align : left;
font-weight:500;
margin:.3rem auto;
`
export const ReservationInput = styled.input`
    min-width : 40%;
    height:3.2rem;
    outline: none;
    border: 1px solid black;
    padding: 0.3rem auto;
    font-size: 14px;
    border-radius: 4px;
    text-align:center;
    @media only screen and (max-width: 720px){
        width:100%;
        display: flex;
        flex-direction: column;
        
    }
`
export const DateTimeContainer = styled.div`
display: flex;
gap:3rem;
flex-direction: row;
padding-top:5.5rem;
@media only screen and (max-width: 720px){
    display: flex;
    flex-direction: column;
}
`
export const ReservationInputContainer = styled.div`
display:flex;
padding-bottom:1rem;
flex-direction:column;
@media only screen and (max-width: 720px){
    width: 80%;
}
`
export const ReservationSubmit = styled.button`
width: 8rem;
height: 2rem;
margin-top:20px;
border-radius:5px;
border:none;
font-weight:600;
`