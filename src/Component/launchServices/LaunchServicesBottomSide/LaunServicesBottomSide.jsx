import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import Text from "../../ui/Text/Text";
import Image from "../../ui/Image/Image";
import ThirdLaunchImage from "../../../Assets/img/launch-services/third.svg";
import FourLaunchImage from "../../../Assets/img/launch-services/four.svg";
import FiveLaunchImage from "../../../Assets/img/launch-services/five.svg";
import SixLaunchImage from "../../../Assets/img/launch-services/six.svg";
import SevenLaunchImage from "../../../Assets/img/launch-services/seven.svg";
import {useWindowSize} from "../../../Hooks/useWindowSize";


const LaunchServiceBottomSide = () => {
    const [width] = useWindowSize()
    return (
        <Flex width="100%" direction="column" b padding="80px 0 80px 0">
            <Container maxWidth="1440px">
                <Flex align="center" witdth="100%" margin="0 0 40px 0" direction="column">
                    <Title margin="0 0 16px 0" textAlign="center">
                        <GradientText>
                            Advantages
                            <br/>
                            '''''''''''''''''''''''
                        </GradientText>
                    </Title>
                    <Text margin="0 0 24px 0" size="28px">
                        <strong>
                            Take your launch to the next level
                        </strong>
                    </Text>
                </Flex>
                <Flex margin="0 0 60px 0" width="100%" direction={width <= 479 ? "column-reverse" : "row"}>
                    <Flex direction="column" justify="center" width="100%">
                        <Title color="#5158f6" textAlign="start">
                            <GradientText>Multichain</GradientText> Token Deployment
                        </Title>
                        <Text textAlign="start">
                            <strong>
                                Deploy your token securely to multiple chains at once
                            </strong>
                            <br/>
                            <br/>
                            Capitalize on the performance, hype or low gas fees the different ecosystems bring - take
                            along the OGs on Ethereum as well as the Moonboys from BSC.
                        </Text>
                    </Flex>
                    <Flex justify="flex-end" width="100%">
                        <Image width="100%" src={ThirdLaunchImage} alt="first launch and services"/>
                    </Flex>
                </Flex>
                <Flex margin="0 0 60px 0"  width="100%" direction={width <= 479 ? "column-reverse" : "row-reverse"}>
                    <Flex direction="column" justify="center" width="100%">
                        <Title color="#5158f6" textAlign="start">
                            Powerful Custom <GradientText>Whitelisting</GradientText>
                        </Title>
                        <Text textAlign="start">
                            <strong>
                                Customizable pre-sale contracts tailored to your community and incentive scheme
                            </strong>
                            <br/>
                            <br/>
                            The muon launchpad offers an easy framework to customize your token presale
                            <br/>
                            <br/>
                            Leverage parameters like wallet characteristics, pre-existing whitelists and other custom
                            scripts to make sure the right investors can join.
                        </Text>
                    </Flex>
                    <Flex justify="flex-start" width="100%">
                        <Image width="100%" src={FourLaunchImage} alt="first launch and services"/>
                    </Flex>
                </Flex>
                <Flex margin="0 0 60px 0" width="100%" direction={width <= 479 ? "column-reverse" : "row"}>
                    <Flex direction="column" justify="center" width="100%">
                        <Title color="#5158f6" textAlign="start">
                            <GradientText>Multichain</GradientText> Claiming
                            & Customizable Vesting
                        </Title>
                        <Text textAlign="start">
                            <strong>
                                Make claiming & vesting a breeze
                            </strong>
                            <br/>
                            <br/>
                            Let your users decide which chain to claim on at time of token release.
                            <br/>
                            <br/>
                            Custom automated & timed vesting schedules ensure a smooth release of your
                            private-sale tokens.
                        </Text>
                    </Flex>
                    <Flex justify="flex-end" width="100%">
                        <Image width="100%" src={FiveLaunchImage} alt="first launch and services"/>
                    </Flex>
                </Flex>
                <Flex margin="0 0 60px 0" width="100%" direction={width <= 479 ? "column-reverse" : "row-reverse"}>
                    <Flex direction="column" justify="center" width="100%">
                        <Title color="#5158f6" textAlign="start">
                            Secure <GradientText> Multichain</GradientText> Bridge
                        </Title>
                        <Text textAlign="start">
                            <strong>
                                Leverage the full power of multiple protocols
                            </strong>
                            <br/>
                            <br/>
                            The Muon network offers a unified & secure bridge across many different chains.
                            <br/>
                            <br/>
                            It allows your users to bridge their assets (Tokens, NFTs, etc..) fast and secure, either
                            on our Muon bridge-portal or on your own custom frontend.
                        </Text>
                    </Flex>
                    <Flex justify="flex-start" width="100%">
                        <Image width="100%" src={ThirdLaunchImage} alt="first launch and services"/>
                    </Flex>
                </Flex>
                <Flex margin="0 0 60px 0" width="100%" direction={width <= 479 ? "column-reverse" : "row"}>
                    <Flex direction="column" justify="center" width="100%">
                        <Title color="#5158f6" textAlign="start">
                            <GradientText>Multichain</GradientText> Staking
                            & LP Locking
                        </Title>
                        <Text textAlign="start">
                            <strong>
                                Lower gas costs and enable compounding systems
                            </strong>
                            <br/>
                            <br/>
                            Create easy & secure custom staking programs to let your token holders stake to provide
                            liquidity or to lock their tokens for extra rewards.
                            <br/>

                            A value added compounding feature to lets your users stake on one chain but claim on
                            another chain (with lower gas fees).
                            <br/>

                            Example: Stake on Ethereum chain &lt; &gt; Claim on Polygon chain
                            <br/>
                            This unique feature allows for compounding services: Let your users claim & deposit on
                            other chains.
                        </Text>
                    </Flex>
                    <Flex align="center" justify="flex-end" width="100%">
                        <Image width="100%" src={SixLaunchImage} alt="first launch and services"/>
                    </Flex>
                </Flex>
                <Flex margin="0 0 60px 0" width="100%" direction={width <= 479 ? "column-reverse" : "row-reverse"}>
                    <Flex direction="column" justify="center" width="100%">
                        <Title color="#5158f6" textAlign="start">
                            <GradientText>Multichain </GradientText>Liquidity
                            & LP Auto-Locking
                        </Title>
                        <Text textAlign="start">
                            <strong>
                                (Offered in collaboration with DEI)
                            </strong>
                            <br/>
                            <br/>
                            Rug-proof multichain-liquidity programs.
                            <br/>
                            <br/>
                            *service offered in combination with the partnering DEI cross-chain stable token)
                        </Text>
                    </Flex>
                    <Flex justify="flex-start" width="100%">
                        <Image width="100%" src={SevenLaunchImage} alt="first launch and services"/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default LaunchServiceBottomSide;