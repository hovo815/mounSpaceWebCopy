import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import PartnersMuonizationCards from "../PartnersMuonizationCards/PartnersMuonizationCards";


const PartnersMuonization = props => {
    return (
        <Flex direction="column" width="100%">
            <Container maxWidth="1440px" width="100%">
                <Flex padding="140px 0 80px 0" direction="column" width="100%">
                    <Title margin="0 0 60px 0" textAlign="center" color="#5158f6" size="40px">
                        <GradientText>Partners</GradientText> in Muonization
                    </Title>
                    <Flex width="100%">
                        <PartnersMuonizationCards />
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default PartnersMuonization;