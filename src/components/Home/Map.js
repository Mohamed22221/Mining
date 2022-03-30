import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import map from"../../assets/map.svg"
const Map = () => {
  return (
    <StyleMap>
        <Container maxWidth="lg">
            <div className='main-map'>
            <TitleMap>
               <h1>distributed architecture</h1>
           </TitleMap>
            <MyMap>
            <p>Canada</p>
            <p>Russia</p>
            <p>Australia</p>
            <p>Brazil</p>
            <p>NorWay</p>
            </MyMap>
            </div>

        </Container>
    </StyleMap>
  )
}
const StyleMap = styled.div`
padding: 30px;
margin-top: 20px;
z-index: 1;
.main-map{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;  
}

`

const TitleMap = styled.div`

h1{
    font-size: 40px;
    color: white;
    padding: 30px 0;
}

`
const MyMap = styled.div`
background-image: url(${map});
width: 998px;
height:700px ;
background-size: contain;
background-repeat: no-repeat;
margin: 50px 0;
position: relative;
p{
    color: white;
    font-weight: 800;
}
p:nth-child(1){
    position: absolute;
    left: 60px;
    top:130px ;
}
p:nth-child(2){
    position: absolute;
    right: 190px;
    top:100px ;
}
p:nth-child(3){
    position: absolute;
    right: 160px;
    bottom:320px ;
}
`

export default Map