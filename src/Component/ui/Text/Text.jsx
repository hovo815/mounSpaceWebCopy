import React from 'react';
import styled, {css} from "styled-components";

const StyledText = styled.p`
  width: ${({width})=> width || "auto" };
  height: ${({height})=> height || "auto" };
  max-width: ${({maxWidth})=> maxWidth || "auto" };
 color: ${({color}) => color || "black"};
  font-family:${({light})=> light ? "Montserrat" : "Montserrat" } ,sans-serif;
  font-size: ${({size})=> size || "20px"};
  line-height: ${({lineHeight})=> lineHeight || "30px"};
  letter-spacing: ${({letterSpacing})=> letterSpacing || "0.03em"};
  text-align: ${({textAlign})=> textAlign || "center"};
  margin: ${({margin})=> margin || "0"};
  ${({size}) => size === "28px" && css`
    @media screen and (max-width: 767px){
      font-size: 22px;
    }
  `}
`

const Text = props => {
    return <StyledText{...props}/>
};


export default Text;