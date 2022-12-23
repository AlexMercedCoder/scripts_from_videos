import styled from "styled-components"

export const Heading = styled.h1`
text-align: center;
border: 3px solid brown;
padding: 3px;
`

export const Flex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 80%;
margin: 10px auto;

`

export const Card = styled.div`
width: 30%;
min-width: 200px;
border: 3px solid green;
margin: 10px auto;
transition: border .3s;

&:hover {
    border: 6px solid red;
} 
`