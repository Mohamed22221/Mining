import React from 'react'
import styled from "styled-components"
import Carousel from "react-elastic-carousel";
import { Container } from '@mui/material';


const SlideLogo = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 7 },


      ];
  return (
    <StyleSlideRight>
        <Container maxWidth="lg">


      <Carousel breakPoints={breakPoints}>
        <Item>Crypto1</Item>
        <Item>Crypto2</Item>
        <Item>Crypto3</Item>
        <Item>Crypto4</Item>
        <Item>Crypto5</Item>
        <Item>Crypto6</Item>
        <Item>Crypto7</Item>
        <Item>Crypto8</Item>
      </Carousel>
      </Container>
    </StyleSlideRight>
  )
}
const StyleSlideRight =styled.div`
margin: 80px 0;
.controls-wrapper {
  width: 100%;
}

.carousel-wrapper {
  width: 100%;
}

.rec-carousel-item:focus {
  outline: none;
  box-shadow: inset 0 0 1px 0px var(--primary-color);
}
.rec.rec-arrow {
    display: none;
}

`
const Item =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  background: white;
  opacity: 0.7;
  color: var(--primary-color);
  margin: 0 15px;
  font-size: 2em;

`
export default SlideLogo