import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import Text from "../../ui/Text/Text";
import Image from "../../ui/Image/Image";
import FirstLaunchIcon from "../../../Assets/img/launch-services/first.svg"
import SecondLaunchImage from "../../../Assets/img/launch-services/second.svg"
import {useWindowSize} from "../../../Hooks/useWindowSize";

const LaunchServicesTopSide = props => {
    const [width] = useWindowSize()
    return (
        <Flex width="100%" direction="column" backgroundProp="#313144" padding="190px 0 80px 0">
            <Container maxWidth="1440px">
                <Flex align="center" witdth="100%" margin="0 0 40px 0" direction="column">
                    <Title size="48px" margin="0 0 16px 0" textAlign="center">
                        <GradientText>
                            Multichain
                            <br/>
                            Launch-Services
                            <br/>
                            '''''''''''''''''''''''''''''''
                        </GradientText>
                    </Title>
                    <Text margin="0 0 24px 0" size="28px" color="white">
                        Muon Particle Accelerator
                    </Text>
                    <Text size="18px" color="white">
                        Supercharge your Web3 token launch
                    </Text>
                </Flex>
                <Flex width="100%" direction={width <= 479 ? "column-reverse" : "row"}>
                    <Flex align="center" width="100%">
                        <Text textAlign="start" color="white">
                            <strong>
                                Everything you need to run a secure,
                                <br/>
                                fair and successful token launch
                            </strong>
                            <br/>
                            The Muon Launch-Services offers the best of both worlds:
                            <br/>
                            It's secure and fair like a centralized IDO, yet also <strong> rug-proof, decentralized and
                            permissionless.</strong>
                            <br/>
                            It will launch your token <strong> fully cross-chain </strong> and offers many <strong>
                            <br/>
                            comfort features</strong> your investors
                            are looking for.
                        </Text>
                    </Flex>
                    <Flex width="100%">
                        <Image width="100%" src={FirstLaunchIcon} alt="first launch and services"/>
                    </Flex>
                </Flex>
                <Flex  width="100%" direction={width <= 479 ? "column-reverse" : "row-reverse"}>
                    <Flex align="center" width="100%">
                        <Text textAlign="start" color="white">
                            <strong>
                                Leave behind current constraints
                            </strong>
                            <br/>
                            <br/>
                            No need for wrappers, conversions, third-party oracles, <br/>
                            bridges or other off-chain solutions. Remove technical  <br/>
                            hurdles for your developers and unnecessary fees for your  <br/>
                            project & users.
                            <br/>
                            <br/>
                            Sit back and enjoy the Muon cross-chain advantage, <br/>
                            while your competition is still strategizing which chain <br/>
                            to go on and where to compromise.
                        </Text>
                    </Flex>
                    <Flex width="100%">
                        <Image height="auto" width="100%" src={SecondLaunchImage} alt="first launch and services"/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default LaunchServicesTopSide;