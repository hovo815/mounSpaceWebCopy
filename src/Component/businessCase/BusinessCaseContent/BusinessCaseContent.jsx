import React from 'react';
import Flex from "../../ui/Flex/Flex";
import BusinessCaseTopSide from "../BusinessCaseTopSide/BusinessCaseTopSide";


const BusinessCaseContent = props => {
    return (
        <Flex direction="column" width="100%">
            <BusinessCaseTopSide/>
        </Flex>
    );
};


export default BusinessCaseContent;