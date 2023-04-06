import React from 'react';
import styled, {css} from "styled-components";

const StyledImage = styled.img`
  height: ${({height}) => height || 'auto'};
  width: ${({width}) => width || 'auto'};
  object-fit: ${({fit})=> fit || "fill"};
  border-radius: ${({borderRadiusCustom})=> borderRadiusCustom || "0"};
  ${({borderRadius})=> borderRadius && css`
    border-radius: 16px 16px 0 0;
  `}
`

const Image = (props) => {
    return <StyledImage {...props}/>;
};


export default Image;