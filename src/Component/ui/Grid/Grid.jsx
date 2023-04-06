import React from 'react';
import styled, {css} from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  width: ${({width}) => width || "auto"};
  grid-auto-columns: ${({gridAutoColumns}) => gridAutoColumns || "1fr"};
  grid-column-gap: ${({columnGap}) => columnGap || "40px"};
  grid-row-gap: ${({rowGap}) => rowGap || "40px"};
  -ms-grid-columns: ${({gridColumns}) => gridColumns || "1fr 1fr 1fr"};
  grid-template-columns: ${({gridTemplateColumns}) => gridTemplateColumns || "1fr 1fr 1fr"};
  box-shadow: ${({shadow}) => shadow || "0"};
  border-radius: ${({borderRadius}) => borderRadius || "0px"};
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  padding: ${({padding}) => padding || "0"};
  @media screen and (max-width: 991px) {
    grid-template-columns:1fr 1fr
  }
  @media screen and (max-width: 767px) {
    grid-template-columns:1fr
  }

  ${({gridTemplateColumns}) => gridTemplateColumns === "1fr 1fr 1fr 1fr 1fr" && css`
    @media screen and (max-width: 1279px) {
      grid-template-columns: 1fr 1fr 1fr 1fr !important;
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr 1fr !important;
    }
    @media screen and (max-width: 478px) {
      grid-template-columns: 1fr !important;
    }
  `}
  ${({gridTemplateColumns}) => gridTemplateColumns === "1fr 1fr 1fr 1fr" && css`
    @media screen and (max-width: 1279px) {
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr 1fr !important;
    }
    @media screen and (max-width: 478px) {
      grid-template-columns: 1fr !important;
    }
  `}
  ${({gridTemplateColumns}) => gridTemplateColumns === "1fr 1fr 1fr" && css`
    @media screen and (max-width: 1279px) {
      grid-template-columns: 1fr 1fr !important;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr !important;
    }
  `}
`

const Grid = (props) => {
    return <StyledGrid{...props}/>
};


export default Grid;