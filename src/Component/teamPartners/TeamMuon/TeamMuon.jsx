import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import GradientText from "../../ui/GradientText/GradientText";
import TeamMuonCards from "../TeamMuonCards/TeamMuonCards";


const TeamMuon = props => {
    return (
        <Flex padding="80px 0" width="100%" direction="column">
            <Container maxWidth="1440px" width="100%">
                <Flex align="center" direction="column" width="100%">
                    <Title margin="0 0 20px 0" textAlign="center" color="#5158f6" size="40px">
                       <GradientText>Team</GradientText> Muon
                    </Title>
                    <Text margin="0 0 40px 0" maxWidth="648px" size="16px">
                        <strong>
                            Muon Network is developed by an experienced global team, <br/>
                            deeply passionate about the technology, partnerships <br/>
                            and communities we bring to life.
                        </strong>
                    </Text>
                </Flex>
                <Flex margin="0 0 80px 0" width="100%">
                    <TeamMuonCards/>
                </Flex>
            </Container>
        </Flex>
    );
};


export default TeamMuon;