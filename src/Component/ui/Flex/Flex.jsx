import React from 'react';
import styled, {css} from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  width: ${({width}) => width || 'auto'};
  min-width: ${({minWidth}) => minWidth || 'auto'};
  max-width: ${({maxWidth}) => maxWidth || 'auto'};
  height: ${({height}) => height || 'auto'};
  min-height: ${({minHeight}) => minHeight || 'auto'};
  max-height: ${({maxHeight}) => maxHeight || 'auto'};
  flex-direction: ${({direction}) => direction || 'row'};
  flex-wrap: ${({wrap}) => wrap || 'nowrap'};
  align-items: ${({align}) => align || 'stretch'};
  grid-column-gap: ${({columnGap})=> columnGap || "0"};
  justify-content: ${({justify}) => justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  border: ${({border}) => border || 'none'};
  border-radius: ${({borderRadius}) => borderRadius || '0'};
  background: ${({backgroundProp}) => backgroundProp || 'none'};
  background-size: ${({backgroundSize}) => backgroundSize || 'initial'};
  position: ${({position}) => position || 'static'};
  overflow-x: ${({overflowX}) => overflowX || "visible"};
  overflow-y: ${({overflowY}) => overflowY || "visible"};
  position: ${({position})=> position || "static "};
  left: ${({left})=> left || "auto"};
  top: ${({top})=> top || "auto"};
  content-visibility: ${({contentVisibility})=> contentVisibility || "visible"};
  ${({footer})=> footer && css`
      border-top: 1px solid #5a5a69 ;
  `};
  ${({hover}) => hover && css`
    transition: .2s;
    &:hover {
      transform: scale(1.1);
    }
  `}
  ${({width}) => width === "16.6%" && css`
  
    @media screen and (max-width: 991px) {
      width: 24.6% !important;
    }
    @media screen and (max-width: 767px) {
      width: 50% !important;
    }
    @media screen and (max-width: 478px) {
      width: 1fr !important;
    }
  `}
`

const Flex = (props) => {


    return <StyledFlex {...props} />
};


export default Flex;