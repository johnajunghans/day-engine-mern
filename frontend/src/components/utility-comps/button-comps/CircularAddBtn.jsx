import { IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const CircularAddBtn = ({ btnSize, iconSize, handleClick, tooltip }) => {

    const btnColor = useColorModeValue("var(--accent-light)", "var(--accent-dark)");
    const btnColorHover = useColorModeValue("var(--accent-light-hover)", "var(--accent-dark-hover)")

    return ( 

        <Tooltip label={tooltip} openDelay={500}>
            <IconButton icon={<AddIcon boxSize={iconSize} />}
                w={btnSize} h={btnSize}
                // mb="0.75rem"
                minW="unset"
                borderRadius="50%"
                boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                bgColor={btnColor}
                _hover={{bgColor: btnColorHover}}
                // _hover={{boxShadow: "0px 4px 4px rgba(0,0,0,0.25)"}}
                onClick={handleClick}
            />
        </Tooltip>   
     );
}
 
export default CircularAddBtn;