import React, {useState} from 'react';
import {faDiscord, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faBars, faBook, faPaperPlane,faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Flex from "../../ui/Flex/Flex";
import Image from "../../ui/Image/Image";
import Container from "../Container/Container";
import styled from "styled-components";
import CustomLink from "../../ui/CustomLink/CustomLink";
import Logo from "../../../Assets/img/logo/logo.svg"
import CustomHref from "../../ui/CustomHref/CustomHref";
import {useWindowSize} from "../../../Hooks/useWindowSize";
import Button from "../../ui/Button/Button";
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 100;
  background: white;
`

const Header = props => {
    const [width] = useWindowSize()
    const [open, setOpen] = useState(false)
    console.log(width);
    return (
        <StyledHeader>
            <Container width="100%" maxWidth="1440px">
                <Flex justify="space-between" width="100%">
                    <Flex align="center" height="60px">
                        <CustomLink
                            to="/"
                        >
                            <Image src={Logo} height="32px" alt="logo"/>
                        </CustomLink>
                    </Flex>
                    <Flex justify="flex-end">
                        {width <= 991 ?
                            <Flex
                                width="100%"
                                align="center"
                                justify="center"
                            >
                                {open ?
                                    <Button
                                        onClick={() => setOpen(false)}
                                        color="black"
                                        border="none"
                                        backgroundProp="none"
                                        size="30px"
                                    >
                                        <FontAwesomeIcon icon={faX}/>
                                    </Button> :
                                    <Button
                                        onClick={() => setOpen(true)}
                                        color="black"
                                        border="none"
                                        backgroundProp="none"
                                        size="30px"
                                    >
                                        <FontAwesomeIcon icon={faBars}/>
                                    </Button>}
                            </Flex> :
                            <Flex margin="0 20px 0 0" align="center">
                                <CustomLink
                                    hover
                                    hoverColor="#5158f6"
                                    size="12px"
                                    margin="0 20px 0 0"
                                    to="/"
                                >
                                    Community Presale
                                </CustomLink>
                                <CustomLink
                                    hover
                                    hoverColor="#5158f6"
                                    size="12px"
                                    margin="0 20px 0 0"
                                    to="/token-economy"
                                >
                                    Token Economy
                                </CustomLink>
                                <CustomLink
                                    hover
                                    hoverColor="#5158f6"
                                    size="12px"
                                    margin="0 20px 0 0"
                                    to="/business-case"
                                >
                                    Business Case
                                </CustomLink>
                                <CustomHref
                                    hover
                                    target="_blank"
                                    rel="noreferrer"
                                    hoverColor="#5158f6"
                                    size="12px"
                                    margin="0 20px 0 0"
                                   href="https://exchange.biswap.org/swap?outputCurrency=0x014018E4536C589e6355fa3db94FfD168FFAF35c"
                                >
                                    Roadmap & Achievements
                                </CustomHref>
                                <CustomLink
                                    hover
                                    hoverColor="#5158f6"
                                    size="12px"
                                    margin="0 20px 0 0"
                                    to="/team-partners"
                                >
                                    Team & Partners
                                </CustomLink>
                                <CustomLink
                                    hover
                                    hoverColor="#5158f6"
                                    size="12px"
                                    margin="0 20px 0 0"
                                    to="/launch-services"
                                >
                                    Launch-Services
                                </CustomLink>
                                <CustomLink
                                    hover
                                    hoverColor="#5158f6"
                                    size="12px"
                                    margin="0 20px 0 0"
                                    to="/jobs"
                                >
                                    Jobs
                                </CustomLink>
                            </Flex>
                        }
                        {width <= 991 && open ? <BurgerMenu/> :null}
                        {width <= 1280 ?
                            null

                            :
                            <Flex align="center">
                                <CustomHref
                                    borderRadius="90px"
                                    width="28px"
                                    margin="0 16px 0 0"
                                    size="18px"
                                    href="/"
                                >
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </CustomHref>
                                <CustomHref
                                    borderRadius="90px"
                                    width="28px"
                                    margin="0 16px 0 0"
                                    size="18px"
                                    href="/"
                                >
                                    <FontAwesomeIcon icon={faDiscord}/>
                                </CustomHref>
                                <CustomHref
                                    borderRadius="90px"
                                    width="28px"
                                    margin="0 16px 0 0"
                                    size="18px"
                                    href="https://t.me/muon_io"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane}/>
                                </CustomHref>
                                <CustomHref
                                    borderRadius="90px"
                                    width="28px"
                                    margin="0 16px 0 0"
                                    size="18px"
                                    href="/"
                                >
                                    <FontAwesomeIcon icon={faMedium}/>
                                </CustomHref>
                                <CustomHref
                                    borderRadius="90px"
                                    width="28px"
                                    margin="0 16px 0 0"
                                    size="18px"
                                    href="/"
                                >
                                    <FontAwesomeIcon icon={faBook}/>
                                </CustomHref>
                            </Flex>

                        }

                    </Flex>
                </Flex>
            </Container>
        </StyledHeader>
    );
};


export default Header;