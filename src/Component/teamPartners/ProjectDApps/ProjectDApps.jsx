import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import Text from "../../ui/Text/Text";
import Dots from "../../ui/Dots/Dots";
import ProjectDappCards from "../ProjectDAppCards/ProjectDAppCards";


const ProjectDApps = props => {
    return (
        <Flex position="relative" padding="80px 0" backgroundProp="#f6f6ff" direction="column" width="100%">
            <Container maxWidth="1440px" width="100%">
                <Flex direction="column">
                    <Title
                        color="#5158f6"
                        size="40px"
                        textAlign="center"
                    >
                        Projects / <GradientText>dApps</GradientText>
                    </Title>
                    <Text
                        margin="0 0 40px 0"
                        size="16px"
                    >
                        <strong>Actively using Muon or getting Muonized by our engineering team.</strong>
                    </Text>
                </Flex>
                <Flex width="100%" direction="column">
                    <ProjectDappCards/>
                </Flex>
            </Container>
            <Dots/>
        </Flex>
    );
};


export default ProjectDApps;