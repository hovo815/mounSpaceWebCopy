import React from 'react';
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  font-family: "Monsterat", sans-serif;
  font-size: ${({size}) => size || "32pt"};
  color: ${({color}) => color || "black"};
  margin: ${({margin}) => margin || "0"};
  @media screen and (max-width: 991px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
  @media screen and (max-width: 479px) {
    font-size: 26px;
  }
`

const MainTitle = props => {
    return <StyledMainTitle {...props}/>
};


export default MainTitle;