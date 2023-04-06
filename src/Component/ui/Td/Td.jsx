import React from 'react';
import styled from "styled-components";

const StyledTd = styled.td`
  min-height: 40px;
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid #adaef9;
`

const Td = props => {
    return <StyledTd {...props}/>
};


export default Td;