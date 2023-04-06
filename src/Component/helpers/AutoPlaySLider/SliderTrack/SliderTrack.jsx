import React from 'react';
import styled, {keyframes} from "styled-components";

const animationTrack = keyframes`
0%{
  transform: translateX(0);
}
  100%{
    transform: translateX(calc(-104px * 24.5));
  }
`

const StyledSliderTrack = styled.div`
    display: flex;
  position: absolute;
  width: calc(104px * 49);
  animation: ${animationTrack} 40s linear infinite;
  &:hover{
    animation-play-state: paused;
  }
`

const SliderTrack = (props) => {
    return <StyledSliderTrack {...props} />
};


export default SliderTrack;