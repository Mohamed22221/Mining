import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import map from"../../assets/map.svg"
import AddLocationIcon from '@mui/icons-material/AddLocation';
const Map = () => {
  return (
    <StyleMap>
        <Container maxWidth="lg">
            <div className='main-map'>
            <TitleMap>
               <h1>distributed architecture</h1>
           </TitleMap>
            <MyMap>
            
            <p>Canada<span><AddLocationIcon/></span></p>
            <p>Russia<span><AddLocationIcon/></span></p>
            <p>Australia<span><AddLocationIcon/></span></p>
            <p>Brazil<span><AddLocationIcon/></span></p>
            <p>NorWay<span><AddLocationIcon/></span></p>
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
height:550px ;
background-size: contain;
background-repeat: no-repeat;
margin: 50px 0;
position: relative;

p{
    color: white;
    font-weight: 800;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        transform: scale(1.3);
    }
    span{
       color: var(--orange-color);
    }

    
}
p:nth-child(1){
    position: absolute;
    left: 60px;
    top:130px ;
    z-index: 10;
    
}
p:nth-child(2){
    position: absolute;
    right: 190px;
    top:100px ;
    z-index: 10;

}
p:nth-child(3){
    position: absolute;
    right: 160px;
    bottom:180px ;
    z-index: 10;

}
p:nth-child(4){
    position: absolute;
    left: 290px;
    bottom:230px ;
    z-index: 10;

}
p:nth-child(5){
    position: absolute;
    left: 390px;
    top:50px ;
    z-index: 10;

}
@media (max-width:1020px){
    width: 700px;
    height:400px;
    p{
    color: white;
    font-weight: 800;
    font-size: 14px;
    
}
p:nth-child(1){
    position: absolute;
    top:80px ;
    
    
}
p:nth-child(2){
    position: absolute;
    right: 150px;
    top:70px ;
    

}
p:nth-child(3){
    position: absolute;
    right: 100px;
    bottom:120px ;
   

}
p:nth-child(4){
    position: absolute;
    left: 200px;
    bottom:170px ;
    

}
p:nth-child(5){
    position: absolute;
    left: 220px;
    top:30px ;
    

}
@media (max-width:706px){
    width: 350px;
    height: 200px;
    p{
    color: white;
    font-weight: 800;
    font-size: 10px;
    
}
p:nth-child(1){
    position: absolute;
    top:35px ;
    left: 10px;
    
}
p:nth-child(2){
    position: absolute;
    left: 240px;
    top:30px ;
}
p:nth-child(3){
    position: absolute;
    right:40px;
    bottom:50px ;
}
p:nth-child(4){
    position: absolute;
    left: 99px;
    bottom:80px ;
}
p:nth-child(5){
    position: absolute;
    left: 110px;
    top:10px ;
    

}
}
}
`

export default Map