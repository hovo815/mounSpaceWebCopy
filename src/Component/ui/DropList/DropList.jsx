import React, {useState} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";

const StyledDropList = styled.div`
  width: 100%;
color:white;
  background: #313144;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;

  font-size: 16px;
`

const DropList = ({title,children}) => {
    const [open, setOpen] = useState(false)
    return (
        <Flex width="100%" direction="column">
            <StyledDropList onClick={()=>setOpen(!open)}>
                {title}
                {open ?
                    <Text color="blue"><FontAwesomeIcon icon={faMinus}/></Text>
                    :
                    <Text color="blue"><FontAwesomeIcon icon={faPlus}/></Text>
                }
            </StyledDropList>
            {open ?
                <Flex direction="column" padding="30px" backgroundProp="#f6f6ff" width="100%"> {children}</Flex>
                : null
            }
            <Flex  margin="0 0 20px 0"></Flex>
        </Flex>

    );
};


export default DropList;