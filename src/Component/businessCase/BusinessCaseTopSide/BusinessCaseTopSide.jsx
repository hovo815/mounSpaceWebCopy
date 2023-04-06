import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import Text from "../../ui/Text/Text";
import Image from "../../ui/Image/Image";
import CustomHref from "../../ui/CustomHref/CustomHref";
import FirstLaunchIcon from "../../../Assets/img/businessCase/business-first.svg";
import {faGaugeHigh, faLayerGroup, faNetworkWired, faServer, faShieldHalved} from "@fortawesome/free-solid-svg-icons";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const BusinessCaseTopSide = () => {
    const [width] = useWindowSize()
    return (
        <Flex direction="column" padding="190px 0 80px 0" width="100%">
            <Container maxWidth="1440px">
                <Flex align="center" witdth="100%" margin="0 0 40px 0" direction="column">
                    <Title margin="0 0 16px 0" size="48px" textAlign="center">
                        <GradientText>
                            The Muon Advantage
                            <br/>
                            '''''''''''''''''''''''''''''''''''''''''
                        </GradientText>
                    </Title>
                    <Text margin="0 0 24px 0" size="16px" color="black">
                        <strong> Supercharge your web3 operations.</strong>
                    </Text>
                    <Text size="16px" maxWidth="648px">
                        Muon's decentralized autonomous nodes operate like a VPS (virtual private server) and can
                        therefore run anything you could run on a Linux server.
                        <br/>
                        <br/>
                        This structure opens up Muon dApps to a much broader range of functions, bridging different
                        blockchains, oracles, and off-chain data, rather than being limited to a single chain.
                    </Text>
                </Flex>
                <Flex direction={width <= 478 ? "column-reverse" : "row"} margin="0 0 60px 0" width="100%">
                    <Flex direction="column" justify="center" width="100%">
                        <Title margin="0 0 20px 0" size="40px" color="#5158f6">

                            <strong> Muon <GradientText>Connects</GradientText></strong>
                        </Title>
                        <Title margin="0 0 20px 0" color="#5158f6" size="20px">
                            The Future of Interoperability and <br/>
                            Instantaneous Data Access
                        </Title>
                        <Text size="16px" textAlign="start" color="black">
                            Muon natively connects all applications on all chains with the off-chain world. Muon fills
                            the gaps between different networks through a sonar-like system of decentralized autonomous
                            nodes, which can speak and understand any language.
                            <br/>

                            Muon nodes communicate, read and transmit data to any chain quickly, efficiently, and
                            securely. Building oracles, bridges, or off-chain workers has never been as simple,
                            decentralized, and secure as it is with Muon.
                        </Text>
                    </Flex>
                    <Flex width="100%">
                        <Image width="100%" src={FirstLaunchIcon} alt="first launch and services"/>
                    </Flex>
                </Flex>
                <Flex direction="column" align="center" width="100%">
                    <Flex direction="column" align="center" justify="center" width="100%">
                        <Title margin="0 0 20px 0" size="40px" color="#5158f6">
                            <strong> Muon <GradientText> USPs</GradientText></strong>
                        </Title>
                        <Text size="16px" margin="0 0 40px 0" textAlign="start" color="black">
                            For those who don't want to read the&nbsp;
                            <CustomHref
                                color="blue"
                                href="https://muon.gitbook.io/"
                            >
                                GitBook...
                            </CustomHref>
                        </Text>
                    </Flex>
                    <Flex direction="column" width="100%">
                        <Flex
                            direction={width <= 479 ? "column" : "row"}
                            borderRadius="16px"
                            padding="6px"
                            width={width <= 1275 ? "100%" : "73%"}
                            backgroundProp="#54547b"
                            margin="20px auto">
                            <Flex
                                borderRadius={width <= 479 ? "16px 16px 0 0" : "16px 0 0 16px"}
                                width="100%"
                                align="center"
                                justify="space-between"
                                padding="30px 20px"
                                backgroundProp="#313144"
                            >
                                <Flex>
                                    <Text size={width <= 479 ? "32px" : "60px"} color="#54547b">
                                        <FontAwesomeIcon icon={faGaugeHigh}/>
                                    </Text>
                                </Flex>
                                <Flex direction="column">
                                    <Title maxWidth="343px" size="28px" margin="0 0 10px 0" color="white">
                                        <strong> Scaling & efficiency</strong>
                                    </Title>
                                    <Title maxWidth="343px" size="20px" color="white">
                                        Speed up your dApp & lower gas costs
                                    </Title>
                                </Flex>
                            </Flex>
                            <Flex borderRadius="16px" width="100%" padding="30px" backgroundProp="">
                                <Text size="16px" textAlign="start" color="white" maxWidth="494px">
                                    Scaling blockchain applications while keeping gas costs low is one of todays
                                    greatest challenges. Muon is similar to rollups or the bitcoin Lightning network,
                                    significantly lowering gas costs - for ALL connected blockchains.
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            direction={width <= 479 ? "column" : "row"}
                            borderRadius="16px"
                            padding="6px"
                            width={width <= 1275 ? "100%" : "73%"}
                            backgroundProp="#33ac55"
                            margin="20px auto"
                        >
                            <Flex
                                borderRadius={width <= 479 ? "16px 16px 0 0" : "16px 0 0 16px"}
                                width="100%"
                                align="center"
                                justify="space-between"
                                padding="30px 20px"
                                backgroundProp="#313144"
                            >
                                <Flex>
                                    <Text size={width <= 479 ? "32px" : "60px"} color="#33ac55">
                                        <FontAwesomeIcon icon={faLayerGroup}/>
                                    </Text>
                                </Flex>
                                <Flex direction="column">
                                    <Title maxWidth="343px" size="28px" margin="0 0 10px 0" color="white">
                                        <strong>
                                            High-speed processing power
                                        </strong>
                                    </Title>
                                    <Title maxWidth="343px" size="20px" color="white">
                                        Supercharge decentralized software - Muon acts as memory & CPU for blockchains
                                    </Title>
                                </Flex>
                            </Flex>
                            <Flex borderRadius="16px" width="100%" padding="30px" backgroundProp="">
                                <Text size="16px" textAlign="start" color="white" maxWidth="494px">
                                    Blockchains are great for storing crucial data, but the next generation of the
                                    internet needs powerful processing power and storage interfaces - Muon securely
                                    makes this possible - so you can focus on building your web3 software.
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            direction={width <= 479 ? "column" : "row"}
                            borderRadius="16px"
                            padding="6px"
                            width={width <= 1275 ? "100%" : "73%"}
                            backgroundProp="#5551ff"
                            margin="20px auto"
                        >
                            <Flex
                                borderRadius={width <= 479 ? "16px 16px 0 0" : "16px 0 0 16px"}
                                width="100%"
                                align="center"
                                justify="space-between"
                                padding="30px 20px"
                                backgroundProp="#313144"
                            >
                                <Flex>
                                    <Text size={width <= 479 ? "32px" : "60px"} color="#5551ff">
                                        <FontAwesomeIcon icon={faServer}/>
                                    </Text>
                                </Flex>
                                <Flex direction="column">
                                    <Title maxWidth="343px" size="28px" margin="0 0 10px 0" color="white">
                                        <strong> High frequency data feeds</strong>
                                    </Title>
                                    <Title maxWidth="343px" size="20px" color="white">
                                        Feed large quantity of oracle-verified data from off- and on-chain sources into
                                        your dApp
                                    </Title>
                                </Flex>
                            </Flex>
                            <Flex borderRadius="16px" width="100%" padding="30px" backgroundProp="">
                                <Text size="16px" textAlign="start" color="white" maxWidth="494px">
                                    The digital economy needs data, but many blockchains are currently facing
                                    bottlenecks. Muon can securely feed in large quantities of verified data.
                                    Furthermore, data theft and manipulation are a real risk - Muon is very hard to
                                    attack.
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            direction={width <= 479 ? "column" : "row"}
                            borderRadius="16px"
                            padding="6px"
                            width={width <= 1275 ? "100%" : "73%"}
                            backgroundProp="#f1a465"
                            margin="20px auto"
                        >
                            <Flex
                                borderRadius={width <= 479 ? "16px 16px 0 0" : "16px 0 0 16px"}
                                width="100%"
                                align="center"
                                justify="space-between"
                                padding="30px 20px"
                                backgroundProp="#313144"
                            >
                                <Flex>
                                    <Text size={width <= 479 ? "32px" : "60px"} color="#f1a465">
                                        <FontAwesomeIcon icon={faNetworkWired}/>
                                    </Text>
                                </Flex>
                                <Flex direction="column">
                                    <Title maxWidth="343px" size="28px" margin="0 0 10px 0" color="white">
                                        <strong> High frequency data feeds</strong>
                                    </Title>
                                    <Title maxWidth="343px" size="20px" color="white">
                                        Feed large quantity of oracle-verified data from off- and on-chain sources into
                                        your dApp
                                    </Title>
                                </Flex>
                            </Flex>
                            <Flex borderRadius="16px" width="100%" padding="30px" backgroundProp="">
                                <Text size="16px" textAlign="start" color="white" maxWidth="494px">
                                    The digital economy needs data, but many blockchains are currently facing
                                    bottlenecks. Muon can securely feed in large quantities of verified data.
                                    Furthermore, data theft and manipulation are a real risk - Muon is very hard to
                                    attack.
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            direction={width <= 479 ? "column" : "row"}
                            borderRadius="16px"
                            padding="6px"
                            width={width <= 1275 ? "100%" : "73%"}
                            backgroundProp="#9a47d6"
                            margin="20px auto"
                        >
                            <Flex
                                borderRadius={width <= 479 ? "16px 16px 0 0" : "16px 0 0 16px"}
                                width="100%"
                                align="center"
                                justify="space-between"
                                padding="30px 20px"
                                backgroundProp="#313144"
                            >
                                <Flex>
                                    <Text size={width <= 479 ? "32px" : "60px"} color="#9a47d6">
                                        <FontAwesomeIcon icon={faShieldHalved}/>
                                    </Text>
                                </Flex>
                                <Flex direction="column">
                                    <Title maxWidth="343px" size="28px" margin="0 0 10px 0" color="white">
                                        <strong> High frequency data feeds</strong>
                                    </Title>
                                    <Title maxWidth="343px" size="20px" color="white">
                                        Feed large quantity of oracle-verified data from off- and on-chain sources into
                                        your dApp
                                    </Title>
                                </Flex>
                            </Flex>
                            <Flex borderRadius="16px" width="100%" padding="30px" backgroundProp="">
                                <Text size="16px" textAlign="start" color="white" maxWidth="494px">
                                    The digital economy needs data, but many blockchains are currently facing
                                    bottlenecks. Muon can securely feed in large quantities of verified data.
                                    Furthermore, data theft and manipulation are a real risk - Muon is very hard to
                                    attack.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default BusinessCaseTopSide;