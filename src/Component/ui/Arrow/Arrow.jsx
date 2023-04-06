import React from 'react';
import styled from "styled-components";

const StyledArrow = styled.div`
  position: relative;
  display: flex;
  overflow: visible;
  width: 100%;
  height: 0;
  justify-content: center;
  align-items: center;

`

const ArrowBlock = styled.div`
  position: absolute;
  top: 26px;
  width: 64px;
  height: 64px;
  border-style: solid;
  border-width: 36px 32px 0;
  border-color: #000 hsla(0, 0%, 100%, 0);
  transform: rotate(0);
  border-top-color: ${({arrowBg}) => arrowBg || "none"};
`

const Arrow = (props) => {
    return (
        <StyledArrow{...props}>
            <ArrowBlock {...props}/>
        </StyledArrow>
    )
};


export default Arrow;