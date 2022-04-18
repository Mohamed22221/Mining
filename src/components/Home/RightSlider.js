import React, { useState } from "react";
import DataSlide from "./DataSlide"
import styled from "styled-components"
import Carousel from "react-elastic-carousel";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
const RightSlider = () => {
   
  return (
    <MainSlide>
         <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {DataSlide.map((item) => (
            <Item key={item.id}>
              <img src={item.img} />
              <h2>{item.name}</h2>
              <p className="jop">{item.jop}</p>
              </Item>
          ))}
        </Carousel>
      </div>
    </MainSlide>
  )
}
const MainSlide = styled.div`
width: 740px;
@media (max-width:767px) {

    width: 100%;

}

.controls-wrapper {
  width: 100%;
}

.carousel-wrapper {
  width: 100%;
}

.rec-carousel-item:focus {
  outline: none;
  box-shadow: inset 0 0 1px 0px violet;
}
.rec.rec-arrow {
    display: none;
}

`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--primary-color-obacity);
  color: #fff;
  margin: 15px;
  position: relative;
  height: 300px;

  img{
    border: 10px solid white;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: 15px 0;
    user-select: none;
    opacity: 1;
    transition: 0.6s;

  }
  h2{
    font-size: 20px;
    padding: 10px 0;
    position: absolute;
      top: 190px;
      transition: 0.6s;
   
  }
  .jop{
    padding: 15px;
    opacity: 0.6;
    position: absolute;
      top: 215px;
      transition: 0.6s;
  }
  .hover-apout{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    padding: 30px 50px;
    margin: 5px 0;
    border-radius: 5px;
    transition: 0.6s;
    position: absolute;
     top: 330px;
    
    
    h4{
      padding: 5px 40px;
      background-color: var(--primary-color-obacity);
    border-radius: 30px;
    cursor: pointer;
    

    }
    p{
      opacity: 0.6;
      padding: 3px 0;
    }
    span .linked{
      font-size: 50px;
      border: 2px solid white;
     


      
    }
  }
 
`
export default RightSlider