import React from 'react';
import styled, {css} from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  max-width: ${({maxWidth})=>maxWidth||"auto"};
  height: ${({height})=>height||"auto"};
  font-weight: 700;
  font-size: ${({size})=> size || "32px"};
  color: ${({color})=>color || "black"};
  margin: ${({margin})=> margin || "0"};
  text-align: ${({textAlign})=>textAlign || "start"};
  ${({size}) => size === "48px" && css`
    @media screen and (max-width: 991px){
      font-size: 32px;
    } 
    @media screen and (max-width: 767px){
      font-size: 28px;
    } 
    @media screen and (max-width: 479px){
      font-size: 26px;
    }
  `}
    ${({size}) => size === "40px" && css`
    @media screen and (max-width: 991px){
      font-size: 32px;
    } 
    @media screen and (max-width: 767px){
      font-size: 28px;
    } 
    @media screen and (max-width: 479px){
      font-size: 26px;
    }
  `}
    ${({size}) => size === "28px" && css`
    @media screen and (max-width: 767px){
      font-size: 22px;
    }
  `}
    ${({size}) => size === "20px" && css`
    @media screen and (max-width: 767px){
      font-size: 18px;
    }
  `}
  
`

const Title = props => {
    return <StyledTitle {...props}/>
};


export default Title;