import React from 'react';
import Flex from "../Flex/Flex";
import Input from "../Input/Input";
import Button from "../Button/Button";


const Subscribe = props => {
    return (
        <Flex position="relative" direction='column' width="100%">
            <Input
                focus
                placeholder="Enter your email"
                borderRadius="8px"
                minHeight="3.5rem"
                maxHeight="3.5rem"
                width="100%"
                padding=".75rem 7.125rem 0.75rem 0.75rem"
            />
            <Button
                position="absolute"
                top="4px"
                right="4px"
                padding="12px 24px"
                backgroundProp="#5158f6"
                borderRadius="5px"
                border="none"

            >
                <strong>Submit</strong>
            </Button>
        </Flex>
    );
};


export default Subscribe;