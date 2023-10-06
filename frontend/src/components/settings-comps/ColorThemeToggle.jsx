import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

const ColorThemeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return ( 
        <Flex as="button" id="color-mode-toggle-container"
            align="center" justify="space-evenly"
            gap="6px"
            w="58px" h="36px"
            bgColor="#000000"
            borderRadius="10px"
            pos="relative"
            onClick={toggleColorMode}
        >
            <Box
                w="30px" h="36px" 
                pos="absolute"
                bgColor="#f8f8ff"
                borderRadius="10px"
                border="1px solid #000000"
                left={colorMode === 'light' ? "0px" : "28px"}
                transition="0.2s"
            />
            <SunIcon zIndex="1" color={colorMode === 'light' ? "#000000" : "#f8f8ff"} />
            <MoonIcon zIndex="1" color={colorMode === 'dark' ? "#000000" : "#f8f8ff"} />
        </Flex>
     );
}
 
export default ColorThemeToggle;