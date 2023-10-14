import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import WheelMain from "./wheel-comps/wheel-main/WheelMain";
import Rituals from "./ritual-comps/Rituals";
import DaySelector from "./wheel-comps/day-selector/DaySelector";

const RoutineBody = () => {

    const bg = useColorModeValue("var(--primary-light)", "var(--primary-dark)");

    return ( 
        <Flex as="section" id="routine-background"
            align="center"
            justify="center"
            p="1rem 1rem 1rem 0"
        >
            <Box id="routine-container"
                display="grid"
                gridTemplateColumns="2fr 5fr"
                flexGrow="1"
                width="100%"
                h="100%"
                bgColor={bg}
                borderRadius="10px"
            >
                <Flex id="ritual-container"
                    maxW="600px"
                    minW="350px"
                    flexDir="column"
                    // flexGrow="2"
                    mr="0.5rem"
                    gap="2rem"
                >
                    <Rituals />
                </Flex>
                
                <Flex id="wheel-container"
                    justify="center"
                    h="100%"
                    pos="relative"
                    // flexGrow="1"
                    boxShadow="-3px 0px 4px rgba(0,0,0,0.25)" 
                >
                    <Box id="day-selector-container" pos="absolute" top="10px" left="10px">
                        <DaySelector />
                    </Box>

                    <WheelMain />
                </Flex>
            </Box>
        </Flex>
     );
}
 
export default RoutineBody;