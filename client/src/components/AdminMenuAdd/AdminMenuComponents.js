import styled from "styled-components"

export const AdminMenuCreationDiv = styled.div`
width: 100%;
align:center;
display:flex;
flex-direction:row;
gap: 2rem;
flex-flow:flow;
background-color: transparent;
padding:2rem ;
align-items:center;
justify-content:center;
`

export const AdminMenuContainer = styled.form`
width: 100%;
align:center;
display:flex;
flex-direction:column;
gap: 2rem;
flex-flow:flow;
background-color: transparent;
padding:2rem ;
align-items:center;
justify-content:center;
padding-bottom:5rem;
@media only screen and (max-width: 1024px){
    flex-direction: column;
}
`

export const AdminMenuInput = styled.input`
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

export const AdminMenuInputContainer = styled.div`
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
export const AdminMenuTitle = styled.span`
margin-top:4rem;
font-size: 2.5rem;
color : white;
font-weight:550;
text-align:center;
padding-bottom:2rem;
`

export const AdminMenuLabel = styled.label`
font-size: 1.5rem;
color: white;
text-align : center;
font-weight:500;
margin:.3rem ;
`
export const AdminMenuSubmit = styled.button`
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