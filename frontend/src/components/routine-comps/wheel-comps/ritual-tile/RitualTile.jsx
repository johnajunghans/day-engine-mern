import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const RitualTile = ({ emojiIcon, name, color, children }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return ( 
        <Flex
            h="auto" 
            minW="120px" 
            flexDir="column"
            gap="0.5rem"
            align="flex-start"
            justify="space-between"
            p="0.5rem 1rem"
            borderRadius="10px"
            cursor="pointer"
            backgroundColor="#F8F8FF"
            transition="0.1s"
            boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
            _hover={{boxShadow: "0px 4px 4px rgba(0,0,0,0.25)"}}
            onClick={() => {setIsExpanded(!isExpanded)}}
        >
            <Flex
                w="100%"
                align="center"
                justify="space-between"
            >
                <span>{emojiIcon}</span>
                <Text 
                    
                    fontFamily="Philosopher" 
                    fontSize="18px"
                    color="rgba(0,0,0,0.8)"
                >{name}</Text>
                <Flex align="center" justify="center">
                    <Box 
                        w="20px" 
                        h="20px" 
                        borderRadius="5px" 
                        backgroundColor={color}
                    />
                    <ChevronRightIcon 
                        boxSize="25px" 
                        transform={isExpanded ? "rotate(90deg)" : "rotate(0deg)"} 
                        transition="0.1s"
                    /> 
                </Flex>
            </Flex>
            {isExpanded && children } 
        </Flex>
     );
}
 
export default RitualTile;