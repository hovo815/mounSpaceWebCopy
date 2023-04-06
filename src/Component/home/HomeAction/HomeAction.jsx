import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import Card from "../../ui/Card/Card";
import Grid from "../../ui/Grid/Grid";
import Image from "../../ui/Image/Image";
import Arrow from "../../ui/Arrow/Arrow";
import Text from "../../ui/Text/Text";
import FirstAction from "../../../Assets/img/home/action/action-first.svg"
import ThirdAction from "../../../Assets/img/home/action/action-third.png"
import SecondAction from "../../../Assets/img/home/action/action-second.png"
import FourAction from "../../../Assets/img/home/action/action-four.svg"
import FiveAction from "../../../Assets/img/home/action/action-five.svg"
import ActionBottomFirst from "../../../Assets/img/home/action/bot-first.svg"
import ActionBottomSecond from "../../../Assets/img/home/action/bot-second.svg"
import ActionBottomThird from "../../../Assets/img/home/action/bot-third.svg"


const HomeAction = props => {
    return (
        <Flex width="100%" padding="80px 0" backgroundProp="rgba(81,88,246,.05)">
            <Container maxWidth="1440px">
                <Flex justify="center" margin="0 0 40px 0" width="100%">
                    <Title color="#5158f6" size="40px" textAlign="center">
                        Muon in <GradientText>Action</GradientText>
                    </Title>
                </Flex>
                <Grid gridTemplateColumns="1fr 1.3fr 1fr" width="100%">
                    <Card borderRadius="16px">
                        <Title textAlign="center" margin="0 0 20px 0" size="28px" color="#adaef9">
                            GameFi
                        </Title>
                        <Flex justify="center" margin="0 0 40px 0" width="100%">
                            <Image  height="32px" src={FirstAction} alt="action card logo"/>
                            <Image  height="32px" src={SecondAction} alt="action card logo"/>
                            <Image  height="32px" src={ThirdAction} alt="action card logo"/>
                        </Flex>
                        <Card
                            margin="0 0 34px 0"
                            width="100%"
                            padding="28px 32px"
                            borderRadius="16px"
                            backgroundProp="#f1a465"
                        >
                            <Text color="white" size="16px">
                                Muon is powering the secure play-to-earn economies of games played by milions of users,
                                while bringing the assets cross-chain.
                            </Text>
                            <Arrow arrowBg="#f1a364"/>
                        </Card>
                        <Flex margin="20px 0 0 0" width="100">
                            <Image src={ActionBottomFirst} width="100%" height="80px" alt="action bottom"/>
                        </Flex>
                    </Card>
                    <Card borderRadius="16px">
                        <Title textAlign="center" margin="0 0 20px 0" size="28px" color="#adaef9">
                            DeFi
                        </Title>
                        <Flex margin="0 0 40px 0" width="100%">
                            <Image width="100%" height="32px" src={FourAction} alt="action card logo"/>
                        </Flex>
                        <Card
                            margin="0 0 34px 0"
                            width="100%"
                            padding="28px 32px"
                            borderRadius="16px"
                            backgroundProp="#5158f6"
                        >
                            <Text color="white" size="16px">
                                Muon helps power dSynths, a synthetic trading platform. They're backed by the trading
                                engine of DEUS Finance, which uses Muon price feeds, that are able to support the
                                pricing of over 50,000 assets!
                            </Text>
                            <Arrow arrowBg="#5158f6;"/>
                        </Card>
                        <Flex margin="20px 0 0 0" width="100">
                            <Image src={ActionBottomSecond} width="100%" height="80px" alt="action bottom"/>
                        </Flex>
                    </Card>
                    <Card borderRadius="16px">
                        <Title textAlign="center" margin="0 0 20px 0" size="28px" color="#adaef9">
                            dApps
                        </Title>
                        <Flex margin="0 0 40px 0" width="100%">
                            <Image width="100%" height="32px" src={FiveAction} alt="action card logo"/>
                        </Flex>
                        <Card
                            margin="0 0 34px 0"
                            width="100%"
                            padding="28px 32px"
                            borderRadius="16px"
                            backgroundProp="#33ac55"
                        >
                            <Text color="white" size="16px">
                                Muon’s technology supports the largest NFT marketplace on Avalanche, the highest
                                frequency oracle in crypto, and a rapid transaction multi-chain bridge.
                            </Text>
                            <Arrow arrowBg="#33ac55"/>
                        </Card>
                        <Flex margin="20px 0 0 0" width="100">
                            <Image src={ActionBottomThird} width="100%" height="80px" alt="action bottom"/>
                        </Flex>
                    </Card>
                </Grid>
            </Container>
        </Flex>
    )
        ;
};


export default HomeAction;