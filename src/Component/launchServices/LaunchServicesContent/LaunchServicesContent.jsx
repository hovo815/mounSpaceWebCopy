import React from 'react';
import LaunchServicesTopSide from "../LaunchServicesTopSide/LaunchServicesTopSide";
import Flex from "../../ui/Flex/Flex";
import LaunchGetInTouch from "../LaunchGetInTouch/LaunchGetInTouch";
import LaunchServiceBottomSide from "../LaunchServicesBottomSide/LaunServicesBottomSide";
import LaunchGetStarted from "../LaunchGetStarted/LaunchGetStarted";


const LaunchServicesContent = props => {
    return (
        <Flex width="100%" direction="column">
            <LaunchServicesTopSide/>
            <LaunchGetInTouch/>
            <LaunchServiceBottomSide/>
            <LaunchGetStarted/>
        </Flex>
    );
};


export default LaunchServicesContent;