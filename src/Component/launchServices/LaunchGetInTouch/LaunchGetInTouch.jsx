import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import {useWindowSize} from "../../../Hooks/useWindowSize";


const LaunchGetInTouch = props => {
    const [width] = useWindowSize()
    return (
        <Flex width="100%" backgroundProp="rgba(81,88,246,.05)" padding="80px 0" dircetion="column">
            <Container width="100%"  maxWidth="1440px">
                <Flex width="100%" margin="60px 0" direction={width <= 479 ? "column" : "row"}>
                    <Flex align="center" justify="center" width="100%">
                        <Button
                            width={width <= 479 ? "100%" : "auto"}
                            padding="15px 26px"
                            borderRadius="5px"
                            border="none"
                            backgroundProp="#5158f6"
                            size="20px"
                        >
                            Get in Touch
                        </Button>
                    </Flex>
                    <Flex justify="flex-end" width="100%">
                        <Text maxWidth="660px" width="100%" textAlign="start">
                            Find out how you can leverage the muon technology to secure <br/> and boost your launch.
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default LaunchGetInTouch;