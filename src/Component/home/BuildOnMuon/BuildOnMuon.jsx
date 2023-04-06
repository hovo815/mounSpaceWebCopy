import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Grid from "../../ui/Grid/Grid";
import Text from "../../ui/Text/Text";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import CustomHref from "../../ui/CustomHref/CustomHref";


const BuildOnMuon = (props) => {
    return (
        <Flex backgroundProp="#eaeaec" width="100%" padding="80px 0">
            <Container maxWidth="1440px">
                <Grid gridTemplateColumns="1fr 1fr">
                    <Flex direction="column">
                        <Text size="16px" textAlign="start" margin="0 0 20px 0">
                            Contact our team for any business enquiries, developer support or general questions via
                            our <CustomHref
                            borderBottom="1px solid rgba(81,88,246,.25)"
                            decoration="#5158f6"
                            href='/'
                        >
                            Discord
                        </CustomHref>
                            . Once verified, head to the #support channel and our Moderators will set
                            you up
                            with the team. Our team consists of various dedicated working groups to make sure any type
                            of inquiry can be met with our full support.
                        </Text>
                        <CustomHref
                            href="https://exchange.biswap.org/swap?outputCurrency=0x014018E4536C589e6355fa3db94FfD168FFAF35c"
                        >
                            <Button
                                border="none"
                                size="16px"
                                borderRadius="5px"
                                padding="12px 24px"
                                backgroundProp="#5158f6"
                                width="200px"
                            >
                                BUY TOKEN MUON
                            </Button>
                        </CustomHref>
                    </Flex>
                    <Flex justify="center" padding="0 0 68px 0">
                        <Title maxWidth="415px" size="48px" color="#5158f6" textAlign="center">
                            Get <GradientText>Muonized</GradientText> & Build on Muon
                        </Title>
                    </Flex>
                </Grid>
            </Container>
        </Flex>
    );
};


export default BuildOnMuon;