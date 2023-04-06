import React from 'react';
import Flex from "../../ui/Flex/Flex";
import {PartnersMuonizationData} from "../../../Data/PartnersMuonizationData";
import Title from "../../ui/Title/Title";
import Image from "../../ui/Image/Image";
import Text from "../../ui/Text/Text";
import CustomHref from "../../ui/CustomHref/CustomHref";
import Grid from "../../ui/Grid/Grid";
import Card from "../../ui/Card/Card";

const PartnersMuonizationCards = props => {
    return (
        <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" width="100%" wrap="wrap">
            {PartnersMuonizationData.map(item => (
                <CustomHref key={item.id} href="/">
                    <Card
                        hover
                        width="100%"
                        height="100%"
                        direction="column"
                        shadow="0 8px 16px 0 rgb(49 49 68 / 10%)"
                        borderRadius="16px"
                        padding="20px"
                    >

                        <Title margin="0 0 10px 0" textAlign="center" size="20px">{item.title}</Title>
                        <Text margin="0 0 20px 0" color="#5158f6">{item.text}</Text>
                        <Flex>
                            <Image fit="contain" width="100%" height="100%" alt={item.title} src={item.image}/>
                        </Flex>

                    </Card>
                </CustomHref>
            ))}
        </Grid>
    );
};


export default PartnersMuonizationCards;