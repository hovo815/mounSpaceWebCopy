import React from 'react';
import styled, {css} from "styled-components";

const StyledHref = styled.a`
  text-decoration: none;
  display: inline-flex;
  flex-direction: ${({direction}) => direction || "row"};
  align-items: center;
  justify-content: center;
  border-bottom: ${({borderBottom}) => borderBottom || "none"};
  line-height: 1.5;
  border-radius: ${({borderRadius}) => borderRadius || "0"};
  background: ${({backgroundProp}) => backgroundProp || "none"};
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  margin: ${({margin}) => margin || "0"};
  font-size: ${({size}) => size || "16px"};
  color: ${({color}) => color || "black"};
  font-family: "Monsterat", sans-serif;
  position:${({position})=>position || "static"};
  z-index: ${({zIndex})=> zIndex || "auto"};
  svg {
    font-size: ${({size}) => size || "16px"};
    color: ${({color}) => color || "black"};
  }
       ${({hover})=> hover && css`
    &:hover {
      color: ${({hoverColor}) => hoverColor || "inherit"};
    }
`}
`

const CustomHref = props => {
    return <StyledHref{...props}/>
};


export default CustomHref;