import React from 'react';
import Flex from "../../ui/Flex/Flex";
import {MuonTeamData} from "../../../Data/MuonTeamData";
import Title from "../../ui/Title/Title";
import Image from "../../ui/Image/Image";
import Text from "../../ui/Text/Text";
import CustomHref from "../../ui/CustomHref/CustomHref";
import Grid from "../../ui/Grid/Grid";
import Card from "../../ui/Card/Card";

const TeamMuonCards = props => {
    return (
        <Grid  gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" width="100%" wrap="wrap">
            {MuonTeamData.map(item => (
                <CustomHref key={item.id} href="/">
                    <Card
                        hover
                        width="100%"
                        height="100%"
                        direction="column"
                        shadow="0 8px 16px 0 rgb(49 49 68 / 10%)"
                        borderRadius="16px"
                        padding="20px"
                        justify="center"
                        align="center"
                        backgroundProp="#313144"
                    >

                        <Title
                            height="48px"
                            color="white"
                            margin="0 0 10px 0"
                            textAlign="center"
                            size="20px"
                        >
                            {item.title}
                        </Title>
                        <Text size="16px" margin="0 0 20px 0" height="65px" color="#adaef9">{item.position}</Text>
                        <Flex height="128px" margin="0 0 20px 0" width="128px">
                            <Image
                                borderRadiusCustom="90px"
                                fit="contain"
                                width="100%"
                                height="97%"
                                alt={item.title}
                                src={item.image}
                            />
                        </Flex>
                        <Text margin="0 0 20px 0" size="16px" color="#a5a6a6">{item.quality}</Text>
                    </Card>
                </CustomHref>
            ))}
        </Grid>
    );
};


export default TeamMuonCards;