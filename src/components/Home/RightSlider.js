import React, { useState } from "react";

import styled from "styled-components"
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
const RightSlider = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <MainSlide>
         <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
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
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`
export default RightSlider