import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import GradientText from "../../ui/GradientText/GradientText";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import Grid from "../../ui/Grid/Grid";
import Card from "../../ui/Card/Card";


const HomeAdvantage = props => {
    return (
        <Flex padding="80px 0" width="100%">
            <Container maxWidth="1440px">
                <Flex margin="0 0 40px 0" width="100%" align="center" direction="column">
                    <Title margin="0 0 20px 0" size="40px" color="#5158f6" textAlign="center">
                        The Muon <GradientText>Advantage</GradientText>
                    </Title>
                    <Text width="100%" color="#313144" maxWidth="648px" size="16px">
                        <strong>Muon Network is your secure, hyperconnected and <br/>
                            decentralized "meta-hardware".</strong>
                        <br/>
                        <br/>
                        Perfect for scaling your web3 operations.
                    </Text>
                </Flex>

                <Grid width="100%">
                    <Card shadow padding='28px 32px' borderRadius="16px" backgroundProp="#313144">
                        <Title margin="0 0 20px 0" size="28px" color="#adaef9">
                            Seamless <GradientText>Scalability</GradientText>
                        </Title>
                        <Text size="16px" color="white" textAlign="start">
                            <strong>Break through previous limitations</strong>
                            <br/>
                            <br/>
                            Muon is a decentralised node-network, with limitless scalability. As it is not a chain and
                            does not permanently store data it is <strong>free from the restrictions</strong> of
                            'preservation of state'.
                            <br/>
                            <br/>
                            With Muon, any web3 application can make use of external data,
                            with <strong>confidence</strong> in its
                            validity,<strong> security </strong>and <strong>near-instantaneous</strong> response times.
                        </Text>
                    </Card>
                    <Card shadow padding='28px 32px' borderRadius="16px" backgroundProp="#313144">
                        <Title margin="0 0 20px 0" size="28px" color="#adaef9">
                            Decentralized <GradientText>Computation</GradientText>
                        </Title>
                        <Text size="16px" color="white" textAlign="start">
                            <strong>Take care of business</strong>
                            <br/>
                            <br/>
                            Muon's decentralized autonomous nodes operate like a VPS (virtual private server) and can
                            therefore <strong>run anything</strong> that could run on a Linux server.
                            <br/>
                            <br/>
                            With Muon, any Web3 app can run high-level, tamper-proof computations (Python, Java, C, C++,
                            Rust, etc...) within its own Muon app container. Nodes running the same Application can
                            gossip and even work together, forming a <strong>decentralized super-computer.</strong>
                            <br/>
                            <br/>
                            This structure opens up Muon dApps to a much broader range of functions, bridging different
                            blockchains, oracles, and off-chain data, rather than being limited to a single chain.
                        </Text>
                    </Card>
                    <Card shadow padding='28px 32px' borderRadius="16px" backgroundProp="#313144">
                        <Title margin="0 0 20px 0" size="28px" color="#adaef9">
                            Go <GradientText>Anywhere</GradientText>
                        </Title>
                        <Text size="16px" color="white" textAlign="start">
                            <strong>Think outside of the box</strong>
                            <br/>
                            <br/>
                            Muon creates bridges between all blockchains.<strong> Think of Muon-bridges as a cross-chain data
                            application</strong> - and not just limited to tokens. Any type of data can be bridged cross-chain
                            with Muon.
                            <br/>
                            <br/>
                            Muon is <strong>like the Amazon Web Services (AWS)</strong> of the decentralized universe. Securely
                            computing, verifying, and sending data between blockchain protocols & dApps
                        </Text>
                    </Card>
                </Grid>
            </Container>
        </Flex>
    );
};


export default HomeAdvantage;