import React from 'react';
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

const StyledLink = styled.div`
  a{
    display: flex;
    align-items: center;
    font-family: "Monsterat", sans-serif;
    text-decoration: none;
    font-size: ${({size})=> size || "16px"};
    color: ${({color})=> color || 'black'};
    line-height: 1.7;
    margin: ${({margin})=> margin || "0"};
  }
    ${({hover})=> hover && css`
    &:hover a{
      color: ${({hoverColor}) => hoverColor || "inherit"};
    }
`}
`


const CustomLink = props => {
    let activeStyle = {
        color:`${props.hoverColor}`
    }
    return (
        <StyledLink {...props}>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined}  to={props.to}>{props.children}</NavLink>
        </StyledLink>
    );
};


export default CustomLink;