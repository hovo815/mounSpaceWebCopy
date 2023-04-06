import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import GradientText from "../../ui/GradientText/GradientText";
import Image from "../../ui/Image/Image";
import First from "../../../Assets/img/home/technologies/1.svg"
import Second from "../../../Assets/img/home/technologies/2.svg"
import Third from "../../../Assets/img/home/technologies/3.svg"
import Four from "../../../Assets/img/home/technologies/4.svg"
import Five from "../../../Assets/img/home/technologies/5.svg"
import Six from "../../../Assets/img/home/technologies/6.svg"
import Seven from "../../../Assets/img/home/technologies/7.png"
import Eight from "../../../Assets/img/home/technologies/8.svg"
import Nine from "../../../Assets/img/home/technologies/9.svg"
import Ten from "../../../Assets/img/home/technologies/10.svg"
import Eleven from "../../../Assets/img/home/technologies/11.svg"
import Twelve from "../../../Assets/img/home/technologies/12.svg"
import Thirteen from "../../../Assets/img/home/technologies/13.svg"
import Fourteen from "../../../Assets/img/home/technologies/14.svg"
import Fifteen from "../../../Assets/img/home/technologies/15.svg"
import Sixteen from "../../../Assets/img/home/technologies/16.svg"


const HomeTechnologies = props => {
    return (
        <Flex backgroundProp="white" width="100%" padding="80px 0" >
            <Container maxWidth="1440px">
                <Flex justify="center" width="100%" margin="0 0 40px 0">
                    <Title color="#5158f6" textAlign="center" size="40px">
                        Technologies Behind <GradientText>Muon</GradientText>
                    </Title>
                </Flex>
                <Flex justify="center" wrap="wrap" width="100%">
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={First} alt="first"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Second} alt="Second"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Third} alt="Third"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Four} alt="Four"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Five} alt="Five"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Six} alt="Six"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Seven} alt="Seven"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Eight} alt="Eight"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Nine} alt="Nine"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Ten} alt="Ten"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Eleven} alt="Eleven"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Twelve} alt="Twelve"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Thirteen} alt="Thirteen"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Fourteen} alt="Fourteen"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Fifteen} alt="Fifteen"/>
                    </Flex>
                    <Flex width="16.6%" padding="32px" hover>
                        <Image width="100%" src={Sixteen} alt="Sixteen"/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default HomeTechnologies;