import React from 'react';
import Flex from "../../ui/Flex/Flex";
import {ProjectDAppsData} from "../../../Data/ProjectDAppsData";
import Title from "../../ui/Title/Title";
import Image from "../../ui/Image/Image";
import Text from "../../ui/Text/Text";
import CustomHref from "../../ui/CustomHref/CustomHref";
import Grid from "../../ui/Grid/Grid";
import Card from "../../ui/Card/Card";

const ProjectDappCards = props => {
    return (
        <Grid gridTemplateColumns="1fr 1fr 1fr" width="100%" wrap="wrap">
            {ProjectDAppsData.map(item => (
                    <Card
                        hover
                        position="relative" zIndex="99"
                        direction="column"
                        shadow="0 8px 16px 0 rgb(49 49 68 / 10%)"
                        key={item.id}
                        borderRadius="16px"
                        padding="20px"
                        backgroundProp="#313144"
                    >
                        <Flex width="100%">
                            <Flex
                                contentVisibility="auto"
                                owerflow="hidden"
                                align="center"
                                justify="center"
                                  height="128px"
                                width="128px"
                                margin="0 20px 0 0"
                                borderRadius="8px"
                            >
                                <Image fit="contain" width="none" height="102%" alt={item.title} src={item.image}/>
                            </Flex>
                            <Flex justify="space-between" direction="column" width="100%">
                                <Flex width="100%" direction="column">
                                <Title color="white" margin="0 0 10px 0" textAlign="start" size="20px">
                                    {item.title}
                                </Title>
                                <Text  textAlign="start" margin="0 0 20px 0" color="#adaef9">
                                    {item.text}
                                </Text>
                                </Flex>
                                <Flex width="100%">
                                <CustomHref color="#adaef9" href="/">Visit Project</CustomHref>
                                </Flex>
                            </Flex>

                        </Flex>
                    </Card>

            ))}
        </Grid>
    );
};


export default ProjectDappCards;