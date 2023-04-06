import React from 'react';
import {faDiscord, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faBook, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Flex from "../Flex/Flex";
import CustomLink from "../CustomLink/CustomLink";
import CustomHref from "../CustomHref/CustomHref";

const BurgerMenu = props => {
    return (

        <Flex
            margin="60px 0 0 0"
            backgroundProp="white"
            jusfify="center"
            align="center"
            padding="20px"
            position="fixed"
            width="100%"
            left="0"
            direction="column"
        >

            <Flex padding="0 0 20px 0" direction="column" margin="0 20px 0 0" align="center">
                <CustomLink
                    hover
                    hoverColor="#5158f6"
                    size="18px"
                    margin="10px"
                    to="/"
                >
                    Community Presale
                </CustomLink>
                <CustomLink
                    hover
                    hoverColor="#5158f6"
                    size="18px"
                    margin="10px"
                    to="/token-economy"
                >
                    Token Economy
                </CustomLink>
                <CustomLink
                    hover
                    hoverColor="#5158f6"
                    size="18px"
                    margin="10px"
                    to="/business-case"
                >
                    Business Case
                </CustomLink>
                <CustomHref
                    hover
                    hoverColor="#5158f6"
                    target="_blank"
                    rel="noreferrer"
                    size="18px"
                    margin="10px"
                    href="https://exchange.biswap.org/swap?outputCurrency=0xe205aeaa60000f0bd466d49f3ba2a3635404265e"
                >
                    Roadmap & Achievements
                </CustomHref>
                <CustomLink
                    hover
                    hoverColor="#5158f6"
                    size="18px"
                    margin="10px"
                    to="/team-partners"
                >
                    Team & Partners
                </CustomLink>
                <CustomLink
                    hover
                    hoverColor="#5158f6"
                    size="18px"
                    margin="10px"
                    to="/launch-services"
                >
                    Launch-Services
                </CustomLink>
                <CustomLink
                    hover
                    hoverColor="#5158f6"
                    size="18px"
                    margin="10px"
                    to="/jobs"
                >
                    Jobs
                </CustomLink>

            </Flex>
            <Flex align="center">
                <CustomHref borderRadius="90px" width="28px" margin="0 16px 0 0" size="25px" href="/">
                    <FontAwesomeIcon icon={faTwitter}/>
                </CustomHref>
                <CustomHref borderRadius="90px" width="28px" margin="0 16px 0 0" size="25px" href="/">
                    <FontAwesomeIcon icon={faDiscord}/>
                </CustomHref>
                <CustomHref borderRadius="90px" width="28px" margin="0 16px 0 0" size="25px" href="https://t.me/muon_io">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </CustomHref>
                <CustomHref borderRadius="90px" width="28px" margin="0 16px 0 0" size="25px" href="/">
                    <FontAwesomeIcon icon={faMedium}/>
                </CustomHref>
                <CustomHref borderRadius="90px" width="28px" margin="0 16px 0 0" size="25px" href="/">
                    <FontAwesomeIcon icon={faBook}/>
                </CustomHref>
            </Flex>
        </Flex>

    );
};


export default BurgerMenu;