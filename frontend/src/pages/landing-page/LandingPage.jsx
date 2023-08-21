import { Box, Button, Image } from "@chakra-ui/react";
import Logo from '../../assets/logo.png';
import Wheel from '../../assets/wheel.png';
import { useAuthContext } from "../../hooks/useAuthContext";

const LandingPage = () => {

    const { user } = useAuthContext();

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return ( 

        <Box
            pos="relative"
            w="100%"
            h="100%"
            minH="100vh"
            overflow="hidden"
        >
            <Image src={Logo}
                width={user ? "100px" : "300px"}
                pos="absolute"
                top={user ? "5px" : "calc(50% - 150px)"}
                left={user ? "5px" : "calc(50% - 150px)"}
                animation="logo-spin infinite 90s linear"
                transition="0.5s"
                transitionDelay="1s"
            />
            <Image src={Wheel}
                pos="absolute"
                w="1000px"
                top="-400px"
                left={user ? "-1000px" : "calc(-600px + 10%)"}
                borderRadius="50%"
                animation="logo-spin infinite 180s linear"
                transition="0.5s"
            />
            <Image src={Wheel}
                pos="absolute"
                w="1000px"
                bottom="-400px"
                right={user ? "-1000px" : "calc(-600px + 10%)"}
                animation="logo-spin infinite 180s linear"
                transition="0.5s"
            />
        </Box>
     );
}
 
export default LandingPage;