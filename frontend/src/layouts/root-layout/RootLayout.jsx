// Chakra
import { Box, Button } from "@chakra-ui/react";

// Pages
import LandingPage from "../../pages/landing-page/LandingPage";
import UserDashboard from "../../pages/user-dashboard/UserDashboard";

// React
import { useState } from "react";

const RootLayout = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const bgColor = "#865032"
    
    return ( 
        <Box as="main"
            minH="100vh"
            w="100%"
            bgColor={bgColor}
        >
            <Button pos="absolute" zIndex="1" onClick={() => {setUserLoggedIn(!userLoggedIn)}}>Login</Button>
            {userLoggedIn ? 
            
                <UserDashboard /> : 
                
                <LandingPage login={() => {setUserLoggedIn(!setUserLoggedIn)}} />
            }
        </Box>
     );
}
 
export default RootLayout;