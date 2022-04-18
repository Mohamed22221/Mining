import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import DetailsRight from './DetailsRight'

const Details = () => {
  return (
    <>
        <Container maxWidth="lg">
        <MainDetalis id="Prx Features">
            <LeftDetalis>
                <h1>Time is money with 64 Store  </h1>
                <p>Cryptocurrency mining is now becoming a fruitful investment alternative all over the world, as more and more
people are showing interest in earning more. Earlier mining could be done by any of the computing devices,
but due to the difficulty of the algorithms, it increased in intensity over time. The data and computational
sorting in mining has been taken care of by advanced automated machines known as Antminers and GUIs
capable of massive mining and making profits. However, despite the huge mining power and accuracy, there
are still many challenges for miners, which are as follows.</p>
                <button>Contribute Now </button> 
            </LeftDetalis>
            <DetailsRight/> 
        </MainDetalis>
        </Container>
        
    </>
  )
}

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
    font-size: 30px;
    @media (max-width:400px) {
        font-size: 25px;
    }
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
    position: relative;
    z-index: 10;
    &:hover{
    transform: translateY(-7px);
    }
}

`
export default Details