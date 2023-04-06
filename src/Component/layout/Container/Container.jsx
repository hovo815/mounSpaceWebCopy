import React from 'react';
import styled, {css} from "styled-components";

const StyledContainer = styled.div`
  max-width: ${({maxWidth}) => maxWidth || "auto"};
  width: ${({width}) => width || "auto"};
  padding: 0 40px;
  margin: 0 auto;
  @media screen and (max-width: 380px){
    padding: 0 30px;
  }
  ${({padding})=> padding && css`
  padding: ${({padding})=> padding ||"0 40px"}!important;
  `}
`

const Container = props => {
    return <StyledContainer {...props}/>
};


export default Container;