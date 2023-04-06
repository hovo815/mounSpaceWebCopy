import React from 'react';
import styled from "styled-components";

const StyledGradientText = styled.span`
  background-image: linear-gradient(135deg,#5158f6,#822df5 33.76%,#f3a761);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: ${({margin})=> margin || "0"};
`

const GradientText = props => {
    return <StyledGradientText{...props}/>
};


export default GradientText;