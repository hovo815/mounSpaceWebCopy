import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import ChartPie from "../../ui/ChartPie/ChartPie";
import {ChartData} from "../../../Data/ChartData";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const TokenDistribution = props => {
    const [width] = useWindowSize()
    const chartData = {
        labels:ChartData.map((data)=>data.chartLabel),
        datasets:[{
         label:"data chart",
            data:ChartData.map(data => data.chartValue),
            backgroundColor:[
                "#93e598", "#ff1485", "#59a95e", "#8f2efc", "#f4881c", "#646af4", "#489dff", "#ffdc27"
            ]
        }]
    }
    return (
        <Flex backgroundProp="#313144" padding="80px 0" direction="column" width="100%">
            <Container width="100%" maxWidth="1440px">
                <Title textAlign="center" color="#adaef9" margin="40px 0">
                    Token Distribution
                </Title>
                <Flex direction={width <= 991 ? "column" : "row"}  width="100%">
                    <Flex align="flex-end" justify="center" width="100%">
                        <ChartPie data={chartData} />
                    </Flex>
                    <Flex direction="column" width="100%">
                        <Flex margin="20px 0 0 0" align="center"  justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#93e598"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">30%</Text>
                            </Flex>
                            <Text size="1rem" color="white">Ecosystem Rewards</Text>
                        </Flex>
                        <Flex margin="20px 0 0 0" align="center" justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#ff1485"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">9%</Text>
                            </Flex>
                            <Text size="1rem" color="white">Marketing & Reserve</Text>
                        </Flex>
                        <Flex margin="20px 0 0 0" align="center" justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#59a95e"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">17%</Text>
                            </Flex>
                            <Text size="1rem" color="white">LP Deposit, LP Incentives, MM, & Staking</Text>
                        </Flex>
                        <Flex margin="20px 0 0 0" align="center" justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#8f2efc"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">6%</Text>
                            </Flex>
                            <Text size="1rem" color="white">Seed Round</Text>
                        </Flex>
                        <Flex margin="20px 0 0 0" align="center" justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#f4881c"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">6%</Text>
                            </Flex>
                            <Text size="1rem" color="white">Partners & Advisors</Text>
                        </Flex>
                        <Flex margin="20px 0 0 0" align="center" justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#646af4"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">7%</Text>
                            </Flex>
                            <Text size="1rem" color="white">Angel Round</Text>
                        </Flex>
                        <Flex margin="20px 0 0 0" align="center" justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#489dff"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">6%</Text>
                            </Flex>
                            <Text size="1rem" color="white">SHO (DAO Maker Community Pre-Sale)</Text>
                        </Flex>
                        <Flex margin="20px 0 0 0" align="center" justify="flex-start" width="100%">
                            <Flex
                                margin="0 20px 0 0"
                                height="1.5rem"
                                width="1.5rem"
                                minHeight="1.5rem"
                                borderRadius="100%"
                                backgroundProp="#ffdc27"
                                minWidth="1.5rem"
                            />
                            <Flex
                                margin="0 20px 0 0"
                                align="center"
                                justify="center"
                                width="3rem"
                                height="2rem"
                                minWidth="3rem"
                                padding="0.125rem 0.5rem"
                                borderRadius="0.5rem"
                                backgroundProp="white"
                            >
                                <Text size=".875rem">19%</Text>
                            </Flex>
                            <Text size="1rem" color="white">Development, Project, & Team</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default TokenDistribution;