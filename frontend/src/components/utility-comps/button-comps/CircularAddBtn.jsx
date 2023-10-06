import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const CircularAddBtn = ({ btnSize, iconSize, handleClick }) => {

    return ( 

        <IconButton icon={<AddIcon boxSize={iconSize} />}
            w={btnSize} h={btnSize}
            // mb="0.75rem"
            minW="unset"
            borderRadius="50%"
            boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
            bgColor="var(--accent)"
            _hover={{bgColor: "#F9D7A2"}}
            onClick={handleClick}
        />

     );
}
 
export default CircularAddBtn;