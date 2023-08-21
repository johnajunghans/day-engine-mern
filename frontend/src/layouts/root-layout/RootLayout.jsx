// Chakra
import { Box, Button } from "@chakra-ui/react";

// Components
import LoginDrawer from "../../components/disclosure-comps/login-drawer/LoginDrawer";

// Pages
import LandingPage from "../../pages/landing-page/LandingPage";
import UserDashboard from "../../pages/user-dashboard/UserDashboard";

// Context
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const RootLayout = () => {
    
    const [showRoutines, setShowRoutines] = useState(false);
    const { user } = useAuthContext()

    const bgColor = "#865032"

    user && setTimeout(() => {
        setShowRoutines(true)
    }, 1500)
    
    return ( 
        <Box as="main"
            minH="100vh"
            w="100%"
            bgColor={bgColor}
            // bgImage={Stars}
            // animation="bg-color-change infinite 5s linear alternate"
            // background="linear-gradient(to right top, #865032, #7e4429, #773921, #6f2d19, #672012);"
            
        >
            <LoginDrawer />
                <LandingPage />
                {showRoutines && user && <UserDashboard />}
            
        </Box>
     );
}
 
export default RootLayout;