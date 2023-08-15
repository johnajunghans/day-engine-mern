// Chakra
import { Box, Button } from "@chakra-ui/react";

// Components
import LoginDrawer from "../../components/disclosure-comps/login-drawer/LoginDrawer";

// Pages
import LandingPage from "../../pages/landing-page/LandingPage";
import UserDashboard from "../../pages/user-dashboard/UserDashboard";

// React
import { useState } from "react";

import Stars from '../../assets/starscape.jpeg'

const RootLayout = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const bgColor = "#865032"
    
    return ( 
        <Box as="main"
            minH="100vh"
            w="100%"
            // bgColor={bgColor}
            bgImage={Stars}
            // animation="bg-color-change infinite 5s linear alternate"
            // background="linear-gradient(to right top, #865032, #7e4429, #773921, #6f2d19, #672012);"
            
        >
            <LoginDrawer />
            {/* <Button onClick={() => {setUserLoggedIn(!userLoggedIn)}}
                pos="absolute"
                m="1rem"
                right="0px"
                bgColor="#F1B049"
                _hover={{bgColor: "#F9D7A2"}}
                zIndex="1"
            >
                Login
            </Button> */}

            {userLoggedIn ? 
            
                <UserDashboard /> : 
                
                <LandingPage />
            }
        </Box>
     );
}
 
export default RootLayout;