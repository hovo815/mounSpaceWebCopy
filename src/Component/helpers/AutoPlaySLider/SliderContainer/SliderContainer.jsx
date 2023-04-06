import React from 'react';
import styled from "styled-components";


const StyledSliderContainer = styled.div`
    height: 160px;
    margin: auto;
    position: relative;
  overflow: hidden;
  width: 90%;
  display: grid;
  place-items: center;
  &::before, &::after{
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255,255,255,0) 100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  }
  &::before{
    left: 0;
    top:0;
  }
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`

const SliderContainer = (props) => {
    return <StyledSliderContainer {...props} />
};


export default SliderContainer;