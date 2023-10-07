// Chakra
import { Box, Flex, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react";
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
import RoutineNav from "../../components/routine-comps/RoutineNav";
import Rituals from "../../components/routine-comps/ritual-comps/Rituals";
import WheelMain from "../../components/routine-comps/wheel-comps/wheel-main/WheelMain";
import RoutineBody from "../../components/routine-comps/RoutineBody";
import ColorThemeToggle from "../../components/settings-comps/ColorThemeToggle";

const RootLayout = () => {
    
    const { user } = useAuthContext();
    const { routines } = useRoutineContext();

    const bg = useColorModeValue("var(--secondary-light)", "var(secondary-dark)")
    
    return ( 
        <Box as="main" id="primary-container"
            minH="100vh"
            w="100%"
            pos="relative"
            display={user ? "grid" : "block"}
            gridTemplateColumns="1fr 15fr"
            bgColor={bg}
        >
            <Flex as="section" id="sidebar-container"
                flexDir="column"
                align="center"
                justify="space-between"
                minW="125px"
            >
                <Flex id="logo-routine-nav-container"
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
                    {routines && <RoutineNav routines={routines} />}
                </Flex>
                <Flex id="account-and-theme-color-container"
                    flexDir="column"
                    gap="0.5rem"
                    m="1rem"
                >
                    {user && <ColorThemeToggle />}
                    <LoginDrawer />
                </Flex>
            </Flex>

            {routines && <RoutineBody />}
            
            {!user && <LandingPage />}

        </Box>
     );
}
 
export default RootLayout;