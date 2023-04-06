import React from 'react';
import Flex from "../../ui/Flex/Flex";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeMeaning from "../HomeMeaning/HomeMeaning";
import HomeUpdates from "../HomeUpdates/HomeUpdates";
import HomeAdvantage from "../HomeAdvantage/HomeAdvantage";
import HomeAction from "../HomeAction/HomeAction";
import HomeTechnologies from "../HomeTechnologies/HomeTechnologies";
import BuildOnMuon from "../BuildOnMuon/BuildOnMuon";


const HomeContent = props => {
    return (
        <Flex padding="64px 0 0 0" direction="column" width="100%">
            <HomeBanner/>
            <HomeMeaning/>
            <HomeUpdates/>
            <HomeAdvantage/>
            <HomeAction/>
            <HomeTechnologies/>
            <BuildOnMuon/>
        </Flex>
    );
};


export default HomeContent;