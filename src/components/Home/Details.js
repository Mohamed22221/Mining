import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import DetailsRight from './DetailsRight'

const Details = () => {
  return (
    <StyleMainDetalis>
        <Container maxWidth="lg">
        <MainDetalis>
            <LeftDetalis>
                <h1>ICO Details</h1>
                <p>A collection of examples of how to use react-simple-maps to createhow to use react-simple-maps to create
                 various mapcharts, maps with labels, markers, lines and annotations.</p>
                <button>Contribute Now </button> 
            </LeftDetalis>
            <DetailsRight/> 
        </MainDetalis>
        </Container>
        
    </StyleMainDetalis>
  )
}
const StyleMainDetalis = styled.div`

`
const MainDetalis = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:670px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`
const LeftDetalis = styled.div`
h1{
    color: white;
    padding: 15px 0;
    font-size: 38px;
}
p{
    width: 480px;
    padding: 15px 0;
    color: white;
    opacity: 0.6;
    @media (max-width:990px) {
    width:300px
    }
    @media (max-width:670px) {
    width:100%
    }

}
button{
    all: unset;
    margin: 15px 0 ;
    background-color: var(--primary-color-obacity);
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 30px;
    transition: 0.5s;
    &:hover{
    transform: translateY(-7px);
    }
}

`
export default Details