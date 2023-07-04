import Whills from '../../images/Whills.jpg'
import styled from 'styled-components';


export const BgContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${Whills});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-size:cover;
  overflow:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  :before{
    filter: blur(5px);
}
`
export const AdminLabel = styled.label`
font-size: 1.5rem;
color: white;
text-align : left;
font-weight:500;
margin:.3rem ;
`
export const AdminInput = styled.input`
    min-width: 100%;
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
export const AdminInputContainer = styled.div`
width:30%;
display:flex;
flex-direction:column;
padding-bottom:1rem;
align-items:center;
justify-content:center;
@media only screen and (max-width: 720px){
    width: 70%;
}
`
export const AdminSubmit = styled.button`
width: 12.5rem;
height: 2.9rem;
border-radius:5px;
border:none;
margin-top:2rem;
font-weight:600;
&:hover {
    transition: 0.2s ease-out;
    scale:1.05;
  }
`