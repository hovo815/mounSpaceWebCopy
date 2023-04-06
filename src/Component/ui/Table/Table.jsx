import React from 'react';
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 3rem;
`

const Table = props => {
    return <StyledTable {...props}/>
};


export default Table;