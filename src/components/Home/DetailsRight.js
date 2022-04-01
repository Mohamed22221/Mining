import React from 'react'
import styled from 'styled-components'
const DetailsRight = () => {
  return (
    <StyleRightDetalis>
        <span>35B</span>
        <div className='item-span'>
        <h1>24%</h1>
        <p>team moment</p>
        </div>
        <div className='item-span'>
        <h1>70%</h1>
        <p>team moment</p>
        </div>
        <div className='item-span'>
        <h1>50%</h1>
        <p>team moment</p>
        </div>
        <div className='item-span'>
        <h1>30%</h1>
        <p>team moment</p>
        </div>
    </StyleRightDetalis>
  )
}
const StyleRightDetalis = styled.div`
position: relative;
z-index: 10;
span{
    font-size: 34px;
    font-weight: bold;
    color: var(--orange-color);
    background-color: var(--primary-color);
    padding: 40px;
    border:10px solid white ;
    outline: 50px solid var(--primary-color-obacity);
    border-radius: 50%;
    position: relative;
    right: 180px;
    @media (max-width:990px) {
        right: 180px
    
    }
    @media (max-width:767px ) {
        right: 80px;
}
    @media (max-width:670px) {
    right:-5px;
    top: 180px;
    }

    &::after{
    content:"" ;
    position: absolute;
    left: -90px;
    right: -90px;
    top: -90px;
    bottom: -90px;
    border:50px solid red ;
    border-top-color:#b96146 ;
    border-right-color: transparent ;
    border-bottom-color:#d9d176fa ;
    border-left-color:#8b0f0f ;
    border-radius: 50%;
    padding: 40px;
    
    }
}
.item-span{
    h1{
        color: white;
    }
    p{
        color: #ffffff8c;
        
    }
@media (max-width:767px ) {
    display: none;
}
 &:nth-child(2){
    position: absolute;
    left: -330px;
    top: -173px;
    p{
        padding-bottom:5px ;
        border-bottom:4px solid var(--primary-color) ;
    }
 }
 &:nth-child(3){
    position: absolute;
    left: -330px;
    top: 130px;
    p{
        padding-bottom:5px ;
        border-bottom:4px solid #d9d176fa ;
    }
 }
 &:nth-child(4){
    position: absolute;
    left: 20px;
    top: -173px;
    p{
        padding-bottom:5px ;
        border-bottom:4px solid #8b0f0f ;
    }
 }
 &:nth-child(5){
    position: absolute;
    left: 20px;
    top: 130px;
    p{
        padding-bottom:5px ;
        border-bottom:4px solid #b96146 ;
    }
 }
    
  
}
`
export default DetailsRight