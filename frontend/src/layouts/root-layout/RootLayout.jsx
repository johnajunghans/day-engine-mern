// Chakra
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

// Components
import LoginDrawer from "../../components/disclosure-comps/login-drawer/LoginDrawer";

// Pages
import LandingPage from "../../pages/landing-page/LandingPage";
import UserDashboard from "../../pages/user-dashboard/UserDashboard";

// Context
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRoutineContext } from "../../hooks/useRoutineContext";

import Logo from '../../assets/logo.png';
import { useEffect, useState } from "react";

const RootLayout = () => {
    
    const [showRoutines, setShowRoutines] = useState(false);
    const { user } = useAuthContext();
    const { routines } = useRoutineContext();

    const bgColor = "#865032"

    const RoutineTile = () => {
        
        
    }

    // user && setTimeout(() => {
    //     setShowRoutines(true)
    // }, 1500)

    // useEffect(() => {
    //     if (user) {
    //         setTimeout(() => {
    //             setShowRoutines(true)
    //         }, 1000)
    //     }
    //     if (!user) {
    //         setShowRoutines(false)
    //     }
    // }, [user])
    
    return ( 
        <Box as="main" id="primary-container"
            minH="100vh"
            w="100%"
            pos="relative"
            display={user ? "grid" : "block"}
            gridTemplateColumns="1fr 15fr"
            bgColor={bgColor}
        >
            <Flex as="section" id="sidebar-container"
                flexDir="column"
                align="center"
                justify="space-between"
                minW="125px"
            >
                <Flex
                    flexDir="column"
                    gap="0.5rem"
                >
                    <Image src={Logo}
                        width={user ? "100px" : "300px"}
                        pos={user ? "unset" : "absolute"}
                        top={user ? "5px" : "calc(50% - 150px)"}
                        left={user ? "5px" : "calc(50% - 150px)"}
                        animation="logo-spin infinite 90s linear"
                        transition="0.3s"
                        // transitionDelay="0.5s"
                    />
                    {routines && <Flex as="nav" id="routine-navigation"
                        flexDir="column"
                        alignItems="center"
                        // gap="0.75rem"
                        border="2px solid black"
                        borderRadius="8px"
                    >
                        <Text
                            w="100%"
                            color="white"
                            bgColor="black"
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
                                bgColor="black"
                                boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                                _hover={{boxShadow: "0px 2px 4px 2px rgba(0,0,0,0.25)"}}
                            >
                                <Text
                                    textAlign="center" 
                                    fontSize="15px" 
                                    color="white"
                                >{routine.name}</Text>
                            </Flex>
                        ))}
                        <IconButton icon={<AddIcon boxSize="20px" />}
                            w="75px" h="75px"
                            mb="0.75rem"
                            variant="outline"
                            borderColor="black"
                            borderRadius="8px"
                            _hover={{bgColor: "rgba(255,255,255,0.25)"}}
                        />
                    </Flex>}
                </Flex>
                

                <LoginDrawer />
            </Flex>

            {user &&
                <Flex as="section" id="routine-container"
                    align="center"
                    justify="center"
                    p="1rem 1rem 1rem 0"
                >
                    <Box id="routine-background"
                        width="100%"
                        h="100%"
                        minH="95vh"
                        bgColor="#FFFFFF"
                        borderRadius="10px"
                    >

                    </Box>

                </Flex>
            }
            
            {!user && <LandingPage />}

        </Box>
     );
}
 
export default RootLayout;