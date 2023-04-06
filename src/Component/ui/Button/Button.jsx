import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({padding})=> padding || "0"};
  width: ${({width})=> width || "auto"};
  max-width: ${({maxWidth})=> maxWidth || "auto"};
  height: ${({height})=> height || "auto"};
  margin: ${({margin})=> margin || "0"};
  border: ${({border, disabled})=> disabled ? "1px solid gray" : border ? border : "1px solid black"};
  font-family: ${({fontFamily})=> fontFamily || "Gill Sans Regular"}, sans-serif;
  font-size: ${({size})=> size || "18px"};
  line-height: ${({lineHeight})=> lineHeight || "22px"};
  border-radius: ${({borderRadius})=> borderRadius || "0"};
  background: ${({backgroundProp})=> backgroundProp || "none"};
  color: ${({color,disabled})=> disabled ? "gray" : color ? color : "white"};
  outline: ${({outline})=> outline || "none"};
  cursor: ${({cursor,disabled})=>  disabled ? "default" : cursor ? cursor : "pointer"};
  position: ${({position})=> position || "static "};
  top: ${({top})=> top || "auto"};
  right: ${({right})=> right || "auto"};
  z-index: ${({zIndex})=> zIndex || "auto"};
`

const Button = (props) => {
    return <StyledButton {...props} />
};


export default Button;