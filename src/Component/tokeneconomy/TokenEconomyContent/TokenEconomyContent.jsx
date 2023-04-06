import React from 'react';
import Flex from "../../ui/Flex/Flex";
import TokenEconomyMain from "../TokenEconomyMain/TokenEconomyMain";
import TokenDistribution from "../TokenDistribution/TokenDistribution";
import TokenRelease from "../TokenRelease/TokenRelease";
import TokenPresale from "../TokenPresale/TokenPresale";


const TokenEconomyContent = props => {
    return (
        <Flex direction="column"  width="100%">
            <TokenEconomyMain/>
            <TokenDistribution/>
            <TokenRelease/>
            <TokenPresale/>
        </Flex>
    );
};


export default TokenEconomyContent;