import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import {useWindowSize} from "../../../Hooks/useWindowSize";
import CustomHref from "../../ui/CustomHref/CustomHref";


const LaunchGetStarted = props => {
    const [width] = useWindowSize()
    return (
        <Flex width="100%" backgroundProp="rgba(81,88,246,.05)" padding="80px 0" dircetion="column">
            <Container width="100%" maxWidth="1440px">
                <Flex direction={width <= 479 ? "column" : "row"} width="100%" margin="60px 0">
                    <Flex align="center" justify="center" width="100%">
                        <CustomHref
                            href="https://exchange.biswap.org/swap?outputCurrency=0x014018E4536C589e6355fa3db94FfD168FFAF35c"
                        >
                            <Button
                                width={width <= 479 ? "100%" : "auto"}
                                padding="15px 26px"
                                borderRadius="5px"
                                border="none"
                                backgroundProp="#5158f6"
                                size="20px"
                            >
                                BUY TOKEN MUON
                            </Button>
                        </CustomHref>
                    </Flex>
                    <Flex justify="flex-end" width="100%">
                        <Text maxWidth="660px" width="100%" textAlign="start">
                            Our support-engineers can prepare a custom launch-set in approx. 1-2 business days.
                            Let us know your requirements and ideas, we'll advise and support you.
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default LaunchGetStarted;