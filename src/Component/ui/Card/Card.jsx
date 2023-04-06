import React from 'react';
import styled, {css} from "styled-components";

const StyledCard = styled.div`
  display: flex;
  width: ${({width})=>width||"auto"};
  height: ${({height})=>height||"auto"};
  min-height: ${({minHeight})=>minHeight||"auto"};
  max-height: ${({maxHeight})=>maxHeight||"auto"};
  flex-direction: column;
  background: ${({backgroundProp}) => backgroundProp || "none"};
  padding: ${({padding})=> padding || '0'};
  margin: ${({margin})=> margin || '0'};
  border-radius: ${({borderRadius}) => borderRadius || "0px"};
  border: 1px solid hsla(0,0%,100%,.4);
  box-shadow: ${({shadow})=> shadow ? "0 8px 16px 0 rgb(49 49 68 / 10%)" : "0"};
  justify-content: flex-start;
  align-items: ${({align})=>align || "stretch"};
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  transition: .2s;
  grid-template-rows: auto;

  position:${({position})=>position || "static"};
  z-index: ${({zIndex})=> zIndex || "auto"};
  ${({hover})=> hover && css`
    &:hover{
      transform: scale(1.02);
    }  
  `}
`

const Card = props => {
    return <StyledCard {...props}/>
};


export default Card;