import React from 'react';
import styled from "styled-components";

const StyledSlides = styled.div`
  height: 104px;
  width: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  margin: 0 10px;
  padding: 20px;
  box-shadow: 0 8px 16px 0 rgb(49 49 68 / 10%);
`

const Slides = props => {
    return <StyledSlides {...props} />
};


export default Slides;