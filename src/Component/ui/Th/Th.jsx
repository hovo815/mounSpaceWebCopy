import React from 'react';
import styled from "styled-components";

const StyledTh = styled.th`
  text-align: start; 
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid #adaef9;
`

const Th = props => {
    return <StyledTh {...props}/>
};


export default Th;