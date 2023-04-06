import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import Flex from "../../ui/Flex/Flex";
import Image from "../../ui/Image/Image";
import Logo from "../../../Assets/img/logo/logoWhite.svg"
import Text from "../../ui/Text/Text";
import Subscribe from "../../ui/Subscribe/Subscribe";
import Title from "../../ui/Title/Title";
import CustomHref from "../../ui/CustomHref/CustomHref";
import Button from "../../ui/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBook, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../../ui/CustomLink/CustomLink";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const StyledFooter = styled.footer`
  width: 100%;
  background: #313144;
  padding: 40px 0;
`

const Footer = props => {
    const [width] = useWindowSize()
    return (
        <StyledFooter>
            <Container maxWidth="1440px">
                <Flex width="100%" direction="column">
                    <Flex direction={width <= 991 ? "column" : "row"} padding="0 0 40px 0" wrap="wrap"
                          justify="space-between" width="100%">
                        <Flex direction="column">
                            <Flex margin="0 0 3rem 0">
                                <Image height="100%" width="128px" src={Logo} alt="logo"/>
                            </Flex>
                            <Text margin="0 0 0.5rem 0" textAlign="start" size="16px" maxWidth="24rem" color="white">
                                <strong>
                                    Be the first to know the launch date and get the newest updates on Muon!
                                </strong>
                            </Text>
                            <Subscribe/>
                        </Flex>
                        <Flex direction={width <= 991 ? "column" : "row"} padding="40px 0 0 0" justify="flex-end"
                              columnGap="4rem">
                            <Flex align="flex-start" direction="column">
                                <Title
                                    color="#adaef9"
                                    size="16px"
                                    margin="0 0 10px 0"
                                >
                                    Pages
                                </Title>
                                <CustomLink
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Home
                                </CustomLink>
                                <CustomLink
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Token Launch
                                </CustomLink>
                                <CustomLink
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Business Case
                                </CustomLink>
                                <CustomLink
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Roadmap & Achievements
                                </CustomLink>
                                <CustomLink
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Team & Partners
                                </CustomLink>
                                <CustomLink
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Launch-Services
                                </CustomLink>
                                <CustomLink
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Jobs
                                </CustomLink>
                            </Flex>
                            <Flex align="flex-start" direction="column">
                                <Title
                                    color="#adaef9"
                                    size="16px"
                                    margin="0 0 10px 0"
                                >
                                    Muon for Developers
                                </Title>
                                <CustomHref
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Muon Playground
                                </CustomHref>
                                <CustomHref
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    GitHub
                                </CustomHref>
                                <CustomHref
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    GitBook
                                </CustomHref>
                                <CustomHref
                                    color="#a5a6a6"
                                    size="16px"
                                    margin="0 0 10px 0"
                                    href="/"
                                >
                                    Litepaper
                                </CustomHref>
                            </Flex>
                            <Flex align="flex-start" direction="column">
                                <Title
                                    color="#adaef9"
                                    size="16px"
                                    margin="0 0 10px 0"
                                >
                                    Contact us
                                </Title>
                                <Button
                                    top="4px"
                                    right="4px"
                                    padding="12px 24px"
                                    backgroundProp="#5158f6"
                                    borderRadius="5px"
                                    border="none"
                                >
                                    <strong>
                                        <CustomHref color="white" href="mailto:contact@muon.net">
                                            Get in touch
                                        </CustomHref>
                                    </strong>
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        direction={width <= 767 ? "column" : "row"}
                        align={width <= 767 ? "center" : "stretch"}
                        justify="space-between"
                        footer
                        padding="40px 0 0 0"
                    >
                        <Flex align="center">
                            <CustomHref
                                height="28px"
                                borderRadius="90px"
                                backgroundProp="hsla(0,0%,100%,.1)"
                                color="white"
                                width="28px"
                                margin="0 16px 0 0"
                                size="18px"
                                href="/"
                            >
                                <FontAwesomeIcon color="white" icon={faTwitter}/>
                            </CustomHref>
                            <CustomHref
                                height="28px"
                                borderRadius="90px"
                                backgroundProp="hsla(0,0%,100%,.1)"
                                color="white"
                                width="28px"
                                margin="0 16px 0 0"
                                size="18px"
                                href="/"
                            >
                                <FontAwesomeIcon color="white" icon={faDiscord}/>
                            </CustomHref>
                            <CustomHref
                                height="28px"
                                borderRadius="90px"
                                backgroundProp="hsla(0,0%,100%,.1)"
                                color="white"
                                width="28px"
                                margin="0 16px 0 0"
                                size="18px"
                                href="https://t.me/muon_io"
                            >
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            </CustomHref>
                            <CustomHref
                                height="28px"
                                borderRadius="90px"
                                backgroundProp="hsla(0,0%,100%,.1)"
                                color="white"
                                width="28px"
                                margin="0 16px 0 0"
                                size="18px"
                                href="/"
                            >
                                <FontAwesomeIcon color="white" icon={faMedium}/>
                            </CustomHref>
                            <CustomHref
                                height="28px"
                                borderRadius="90px"
                                backgroundProp="hsla(0,0%,100%,.1)"
                                color="white"
                                width="28px"
                                margin="0 16px 0 0"
                                size="18px"
                                href="/"
                            >
                                <FontAwesomeIcon color="white" icon={faBook}/>
                            </CustomHref>
                        </Flex>
                        <Flex>
                            <Text size="14px" color="#a5a6a6">Copyright © 2022 Muon Network. All rights reserved.</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </StyledFooter>
    );
};


export default Footer;