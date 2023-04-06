import React from 'react';
import Flex from "../../ui/Flex/Flex";
import Container from "../../layout/Container/Container";
import GradientText from "../../ui/GradientText/GradientText";
import Title from "../../ui/Title/Title";
import Text from "../../ui/Text/Text";
import DropList from "../../ui/DropList/DropList";
import Button from "../../ui/Button/Button";


const JobsContent = props => {
    return (
        <Flex width="100%" direction="column">
            <Container maxWidth="1440px" width="100%">
                <Flex align="center" direction="column" padding="214px 0 80px 0" width="100%">
                    <Title margin="0 0 20px 0" textAlign="center" color="#5158f6" size="40px">
                        Career at <GradientText>Muon</GradientText>
                    </Title>
                    <Text margin="0 0 40px 0" maxWidth="800px" size="16px" textAlign="start">
                        Muon is on the cutting edge of blockchain technology. Our node-network embodies the true spirit
                        of decentralisation and unleashes the power of secure, permissionless on-chain transactions and
                        computation.
                        <br/>
                        <br/>
                        We are a professional team, consisting of more than thirty engineers, as well as marketing and
                        operations executives. Within an open and inclusive working environment, every team member has a
                        direct impact on the daily growth of Muon.
                        <br/>
                        <br/>
                        We offer flexible working opportunities, with members distributed through different locations
                        and timezones. Our organisation encourages all members to take initiative, and agency over their
                        own work.
                        <br/>
                        <br/>
                        As Muon continues to grow, and more partners join the network, our teams will naturally expand
                        too. If you are interested in joining our team, reach out to us today.
                    </Text>
                    <Container padding="0" maxWidth="880px" width="100%">
                        <DropList title="Content Writer (Remote)">
                            <Title size="24px" margin="0 0 24px 0" textAlign="start">
                                JOB OFFER
                            </Title>
                            <Text size="16px" margin="0 0 24px 0" textAlign="start">
                                We are looking for an experienced, creative and tech-savvy Content Writer to develop,
                                manage, and execute persuasive and informative content that gives insightful information
                                to our stakeholders. If you love exploring blockchain tech and its use cases and
                                creating high-impact content that drives success, we want you on our team!
                            </Text>
                            <Title size="24px" margin="0 0 24px 0" textAlign="start">
                                RESPONSIBILITIES:
                            </Title>
                            <Text size="16px" margin="0 0 24px 0" textAlign="start">
                                Implement our content strategies, campaigns, and plans to drive engagement and traffic
                                before and after our token sale.
                                Create high-quality novel content for each campaign to drive engagement with a wide
                                range of stakeholders, from developers to community enthusiasts partners team and
                                investors.
                                Collaborate with graphic designers to create visually attractive pieces of content.
                                Monitor content performance to identify trends and anticipate stakeholder needs Review
                                and update published content as needed
                            </Text>
                            <Title size="24px" margin="0 0 24px 0" textAlign="start">
                                REQUIRED SKILLS:
                            </Title>
                            <Text size="16px" margin="0 0 24px 0" textAlign="start">
                                5+ years experience in Communications, with at least three years in Content Management
                                and Copywriting.
                                2+ years working in the blockchain industry.
                                Strong skills in creating original content that targets a specific audience and meets
                                business objectives.
                                Appreciation for quality content and the ability to create it.
                                Excellent copywriting skills
                                English language fluency or mother tongue.
                                Experience in a start-up environment.
                                Ability to multitask and take on multiple assignments Critical thinker & detail-oriented
                                problem solver Team player and self-starter who isn't afraid to take initiative
                            </Text>
                            <Title size="24px" margin="0 0 24px 0" textAlign="start">
                                BONUS:
                            </Title>
                            <Text size="16px" margin="0 0 24px 0" textAlign="start">
                                Bachelor's degree in marketing, communications, journalism, public relations or related
                                field Familiarity with computer science and software engineering
                                Experience working on scripts and concepts for videos and visual animations
                                Expertise with using SEO best practices to write creative copy that includes effective
                                keyword placement
                                Having experience with communicating and collaborating with distributed teams
                                Please share a portfolio or links to your published work along with your application.
                            </Text>
                            <Flex width="100%" justify="center">
                                <Button
                                    border="none"
                                    borderRadius="5px"
                                    padding="12px 24px"
                                    color="white"
                                    backgroundProp="#5158f6"
                                    maxWidth="98px"
                                >
                                    Apply
                                </Button>
                            </Flex>
                        </DropList>
                        <DropList title="Content Writer (Remote)">
                            <Title size="24px" margin="0 0 24px 0" textAlign="start">
                                BE A MUONIZER
                            </Title>
                            <Text size="16px" margin="0 0 24px 0" textAlign="start">
                                The strength of the Muon project will be defined not only by its technological feats,
                                but also the involvement of its community.
                                <br/>
                                <br/>
                                We wish to provide an environment filled with opportunities for anyone to utilise their
                                skills and get involved. No matter how great or small, any involvement is strongly
                                encouraged, and if you are interested to help our community simply fill out the form
                                below so our team can get in touch!
                            </Text>
                            <Flex width="100%" justify="center">
                                <Button
                                    border="none"
                                    borderRadius="5px"
                                    padding="12px 24px"
                                    color="white"
                                    backgroundProp="#5158f6"
                                    maxWidth="98px"
                                >
                                    Apply
                                </Button>
                            </Flex>
                        </DropList>
                    </Container>

                </Flex>
            </Container>
        </Flex>
    );
};


export default JobsContent;