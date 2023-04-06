import React from 'react';
import Container from "../../layout/Container/Container";
import Flex from "../../ui/Flex/Flex";
import Text from "../../ui/Text/Text";
import MainTitle from "../../ui/MainTitle/MainTitle";
import GradientText from "../../ui/GradientText/GradientText";
import Image from "../../ui/Image/Image";
import LogoBig from "../../../Assets/img/home/m-logo-big.svg"
import Dots from "../../ui/Dots/Dots";
import Button from "../../ui/Button/Button";
import {useWindowSize} from "../../../Hooks/useWindowSize";
import CustomHref from "../../ui/CustomHref/CustomHref";


const HomeBanner = props => {
    const [width] = useWindowSize()
    return (
        <Flex padding="160px 0 100px 0" width="100%" backgroundSize="cover"
              backgroundProp="#f8faff"
              position="relative"
        >
            <Container width="100%" maxWidth="1440px">
                <Flex direction={width <= 479 ? "column-reverse" : "row"} width="100%" justify="space-between">
                    <Flex
                        align="flex-start"
                        direction="column"
                        width="100%"
                    >
                        <Text color="#5158f6" size="14px">MUON SUON</Text>
                        <MainTitle margin="0 0 24px 0" size="56px">
                            <GradientText>
                                Muon Network <br/>
                            </GradientText>
                            Empowering the metaverse economy
                        </MainTitle>
                        <Text textAlign='start'>
                            Decentralized cloud computing, cross-chain bridge interfacing and
                            secure oracles for <strong>gaming</strong>, <strong>DeFi</strong> and <strong>dApps</strong>.
                            <br/>
                            <br/>
                            <strong>Redefine what you thought possible with blockchain.
                                <GradientText>Then build it.</GradientText>
                            </strong>
                        </Text>
                        <Flex width="100%" margin="25px 0 0 0">
                            <CustomHref
                                href="https://exchange.biswap.org/swap?outputCurrency=0x014018E4536C589e6355fa3db94FfD168FFAF35c"
                            >
                                <Button
                                    top="4px"
                                    right="4px"
                                    padding="12px 24px"
                                    backgroundProp="#5158f6"
                                    borderRadius="5px"
                                    border="none"
                                    zIndex="66"
                                >
                                    <strong>BUY TOKEN MUON</strong>
                                </Button>
                            </CustomHref>
                        </Flex>
                    </Flex>
                    <Flex width="100%">
                        <Image alt="logo" width="100%" src={LogoBig}/>
                    </Flex>
                </Flex>
            </Container>
            <Dots/>
        </Flex>
    )
        ;
};


export default HomeBanner;