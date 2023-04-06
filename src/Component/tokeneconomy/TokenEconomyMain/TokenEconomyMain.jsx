import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import Image from "../../ui/Image/Image";
import {useWindowSize} from "../../../Hooks/useWindowSize";


const TokenEconomyMain = (props) => {
    const [width] = useWindowSize()

    const image = "https://assets.website-files.com/614c6fa0cc868403c37c5e53/62d5251c1a5bb79843a18b60_illustartion" +
        "--token_use_case.svg"
    const secondImage = "https://assets.website-files.com/614c6fa0cc868403c37c5e53/614e34a3872623f33898d7ff_Muon%" +
        "20Token%20Dark%20Illustration.svg"

    return (
        <Flex direction="column" padding="190px 0 80px 0" width="100%">
            <Container maxWidth="1440px">
                <Flex wrap="wrap" align="center" witdth="100%" margin="0 0 40px 0" direction="column">
                    <Title margin="0 0 16px 0" size="48px" color="#5158f6" textAlign="center">
                        The $MUON Token
                        <br/>
                        ''''''''''''''''''''''''''''''''
                    </Title>
                    <Text margin="0 0 24px 0" size="16px" color="black">
                        <strong> The $MUON utility token is used to incentivize the Muon network ecosystem.</strong>
                    </Text>

                </Flex>
                <Flex direction={width <= 478 ? "column-reverse" : "row"} margin="0 0 60px 0" width="100%">
                    <Flex direction="column" justify="center" width="100%">
                        <Title margin="0 0 20px 0" size="40px" color="#5158f6">
                            <strong>Token Use Case</strong>
                        </Title>
                        <Title margin="0 0 20px 0" size="16px">
                            $MUON covers insurance and the infrastructure fees of the Muon network nodes.
                        </Title>
                        <Text size="16px" textAlign="start" color="black">
                            The transaction fee is used primarily to pay for the insurance of the node’s stake, which is
                            used to verify the transaction, and also for the actual node infrastructure.
                            <br/>

                            The amount sent is divided between the nodes that process the transaction.
                            <br/>

                            The Muon protocol aims to be a low-cost, decentralised infrastructure, similar to AWS,
                            rather than a common, expensive blockchain infrastructure.
                        </Text>
                    </Flex>
                    <Flex align="center" justify="flex-end" width="100%">
                        <Image
                           width="100%"
                            src={image}
                            alt="first launch and services"
                        />
                    </Flex>
                </Flex>
                <Flex direction={width <= 478 ? "column-reverse" : "row-reverse"} margin="0 0 60px 0" width="100%">
                    <Flex direction="column" justify="center" width="100%">
                        <Title margin="0 0 20px 0" size="40px" color="#5158f6">
                            <strong>$MUON Utility-Token</strong>
                        </Title>
                        <Title margin="0 0 20px 0" size="16px">
                            Muon's utility token is the building block of the Muon ecosystem and provides incentives to
                            network participants.
                        </Title>
                        <Text size="16px" textAlign="start" color="black">
                            The token exists on multiple chains, with transactions saved simultaneously across each one.
                            The token is included as payment for transactions, when data is requested and nodes provide
                            and verify that data.
                        </Text>
                    </Flex>
                    <Flex align="center" justify="flex-start" width="100%">
                        <Image
                           width="100%"
                            src={secondImage}
                            alt="first launch and services"
                        />
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default TokenEconomyMain;