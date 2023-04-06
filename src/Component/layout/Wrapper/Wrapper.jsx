import React from 'react';
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const StyledWrapper = styled.div`
    width: 100%;
`

const Wrapper = props => {
    return (
        <StyledWrapper>
            <Header/>
            {props.children}
            <Footer/>
        </StyledWrapper>
    )
};


export default Wrapper;