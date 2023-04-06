import React from 'react';
import styled from "styled-components";

const StyledTr = styled.tr`
  border-style: none none solid;
  min-height: 40px;
  border-width: 1px;
  border-color: #000 #000 #adaef9;
  width: 100%;
`

const Tr = props => {
    return <StyledTr {...props}/>
};


export default Tr;