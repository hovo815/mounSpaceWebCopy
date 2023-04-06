import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Card from "../../ui/Card/Card";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import Grid from "../../ui/Grid/Grid";
import HomeMeaningSlider from "../HomeMeaningSlider/HomeMeaningSlider";
import GradientText from "../../ui/GradientText/GradientText";


const HomeMeaning = props => {
    return (
        <Flex padding="80px 0" widht="100%">
            <Container maxWidth="1440px">
                <Grid padding="80px 0" width="100%">
                    <Card shadow padding='28px 32px' borderRadius="16px" backgroundProp="#313144">
                        <Title margin="0 0 20px 0" size="28px" color="#f1a465">GameFi</Title>
                        <Text size="16px" color="white" textAlign="start">
                            Decentralized computation, storage, and hosting, and a proprietary oracle for play-to-earn
                            economies.
                        </Text>
                    </Card>
                    <Card shadow padding='28px 32px' borderRadius="16px" backgroundProp="#313144">
                        <Title margin="0 0 20px 0" size="28px" color="#5158f6">DeFi</Title>
                        <Text size="16px" color="white" textAlign="start">
                            Decentralized cloud services and white label liquidity bootstrappers including farms,
                            bridges, and staking, along the first 10 ms frequency oracle.
                        </Text>
                    </Card>
                    <Card shadow padding='28px 32px' borderRadius="16px" backgroundProp="#313144">
                        <Title margin="0 0 20px 0" size="28px" color="#33ac55">dApps</Title>
                        <Text size="16px" color="white" textAlign="start">
                            Putting the decentralized in dApps: remove centralized points of cloud failures, node
                            networks, and data security.
                        </Text>
                    </Card>
                </Grid>
                <Flex width="100%" padding="80px 0" direction="column">
                    <Title
                        textAlign="center"
                        size="40px"
                        color="#5158f6"
                        margin="0 0 40px 0"
                    >
                        Enjoy <GradientText>Cross-Chain</GradientText> Bridges & Compatibility
                    </Title>
                    <HomeMeaningSlider/>
                </Flex>
            </Container>
        </Flex>
    );
};


export default HomeMeaning;