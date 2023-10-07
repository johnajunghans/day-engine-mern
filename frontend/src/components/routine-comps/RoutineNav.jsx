import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react"; 
import { AddIcon } from "@chakra-ui/icons";
import CircularAddBtn from "../utility-comps/button-comps/CircularAddBtn";


const Routines = ({ routines }) => {

    const bg = useColorModeValue("var(--primary-light)", "var(--primary-dark)");
    const headerTextColor = useColorModeValue("#000000", "#f8f8ff")

    return ( 

        <Flex as="nav" id="routine-navigation"
            flexDir="column"
            alignItems="center"
            // gap="0.75rem"
            // border="2px solid black"
            bgColor={bg}
            borderRadius="10px"
            p="0.35rem 0 0.75rem"
        >
            <Text
                w="100%"
                color={headerTextColor}
                fontWeight="bold"
                fontSize="18px"
                textAlign="center"
                borderRadius="5px 5px 0 0"
            >Routines</Text>
            {routines.map(routine => (
                <Flex as="button" key={routine._id}
                    w="75px"
                    h="75px"
                    m="0.75rem"
                    align="center"
                    justify="center"
                    borderRadius="8px"
                    bgColor="#F8F8FF"
                    boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
                    // _hover={{boxShadow: "0px 2px 4px 2px rgba(0,0,0,0.25)"}}
                    transition="0.2s"
                >
                    <Text
                        textAlign="center" 
                        fontSize="15px" 
                        color="black"
                    >{routine.name}</Text>
                </Flex>
            ))}
            <CircularAddBtn btnSize="40px" iconSize="16px" />
        </Flex>

     );
}
 
export default Routines;