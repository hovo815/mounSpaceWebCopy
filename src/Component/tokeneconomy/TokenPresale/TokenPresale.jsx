import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import Th from "../../ui/Th/Th";
import Table from "../../ui/Table/Table";
import Tr from "../../ui/Tr/Tr";
import Td from "../../ui/Td/Td";
import Button from "../../ui/Button/Button";
import CustomHref from "../../ui/CustomHref/CustomHref";


const TokenPresale = props => {
    return (
        <Flex padding="80px 0" direction="column" width="100%">
            <Container width="100%" maxWidth="1440px">
                <Flex width="100%" align="center" direction="column">
                    <Title size="40px" margin="0 0 20px 0 " color="#5158f6">
                        Presale
                    </Title>
                    <Text size="16px" margin="0 0 40px 0" maxWidth="648px">
                        The private sale round for Partners and Strategic Investors is currently ongoing.
                        Thereafter, an LGE will be held in addition to a centralized exchange listing.
                    </Text>
                    <Flex width="100%">
                        <Table>
                            <Tr>
                                <Th>#</Th>
                                <Th>Round</Th>
                                <Th>Price</Th>
                                <Th>Status</Th>
                            </Tr>
                            <Tr>
                                <Td>1</Td>
                                <Td>Seed Round</Td>
                                <Td>$0.01</Td>
                                <Td>Open</Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>Angel Round</Td>
                                <Td>$1.5</Td>
                                <Td>Closed</Td>
                            </Tr>
                        </Table>
                    </Flex>
                    <Flex>
                        <CustomHref href="https://exchange.biswap.org/swap?outputCurrency=0x014018E4536C589e6355fa3db94FfD168FFAF35c">
                            <Button
                                padding="12px 24px"
                                border-radius="5px"
                                backgroundProp="#5158f6"
                                border="none"
                            >
                                BUY TOKEN MUON
                            </Button>
                        </CustomHref>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default TokenPresale;