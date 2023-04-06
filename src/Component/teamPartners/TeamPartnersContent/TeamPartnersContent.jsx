import React from 'react';
import Flex from "../../ui/Flex/Flex";
import PartnersMuonization from "../PartnersMuonization/PartnersMuonization";
import ProjectDApps from "../ProjectDApps/ProjectDApps";
import TeamMuon from "../TeamMuon/TeamMuon";


const TeamPartnersContent = props => {
    return (
        <Flex width="100%" direction="column" padding="64px 0 0 0">
            <PartnersMuonization/>
            <ProjectDApps/>
            <TeamMuon/>
        </Flex>
    );
};


export default TeamPartnersContent;