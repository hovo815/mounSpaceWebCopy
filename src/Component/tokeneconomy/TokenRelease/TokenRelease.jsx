import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import Image from "../../ui/Image/Image";
import TokenGraph from  "../../../Assets/img/cart/cart.jpg"

const TokenRelease = props => {
    return (
        <Flex backgroundProp="rgba(81,88,246,.05)" padding="80px 0" direction="column" width="100%">
            <Container maxWidth="1440px">
                <Flex align="center"  justify="center" width="100%" direction="column">
                    <Title size="40px" textAlign="center" color="#5158f6">
                        Token Release Schedule
                    </Title>
                    <Text margin="0 0 40px 0" maxWidth="648px" size="16px" textAlign="center">
                        The total $MUON supply amounts to 1B tokens and will be slowly released over the course of 48
                        months according to the vesting schedule.
                    </Text>
                    <Flex width="80%">
                        <Image width="100%" src={TokenGraph} alt="token graph"/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default TokenRelease;