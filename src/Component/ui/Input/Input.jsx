import React from 'react';
import styled, {css} from "styled-components";

const StyledInput = styled.input`
  border-radius: ${({borderRadius})=>borderRadius || "0"};
  border: none;
  padding: ${({padding})=> padding || "0"};
  width: ${({width})=> width || "auto"};
  height: ${({height})=> height || "auto"};
  max-height: ${({maxHeight})=> maxHeight ||"auto"};
  min-height: ${({minHeight})=> minHeight ||"auto"};
  outline: none;
  ${({focus})=> focus && css`
    &:focus{
      border: 1px solid #3898ec;
     
    }  
  `}
`

const Input = props => {
    return <StyledInput {...props}/>
};


export default Input;