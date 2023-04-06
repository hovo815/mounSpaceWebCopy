import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import GradientText from "../../ui/GradientText/GradientText";
import Title from "../../ui/Title/Title";
import HomeUpdatesSliderBlogs from "../HomeUpdatesSliderBlogs/HomeUpadesSliderBlogs";


const HomeUpdates = props => {


    return (
        <Flex padding="80px 0" backgroundProp="rgba(49,49,68,.1)" widht="100%">
            <Container width="100%" maxWidth="1440px">
                <Flex width="100%" direction="column">
                    <Flex margin="0 0 40px 0" justify="center" width="100%">
                    <Title
                        color="#5158f6"
                        size="40px"
                        textAlign="center"
                    >
                        Updates From the <GradientText>Muonverse</GradientText>
                    </Title>
                    </Flex>
                    <Flex width="100%">
                            <HomeUpdatesSliderBlogs/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default HomeUpdates;