import { Box, Button, Image } from "@chakra-ui/react";
import Logo from '../../assets/logo.png';
import Wheel from '../../assets/wheel.png';
import RectangleButton from "../../components/utility-comps/button-comps/RectangleButton";

const LandingPage = () => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const Wheels = (left) => {
        return (
            <Image src={Wheel}
                pos="absolute"
                width={`${windowWidth*0.5}px`}
                top={left && `${-windowWidth*0.25}px`}
                bottom={!left && `${-windowWidth*0.25}px`}
                
            />
        )
    }

    return ( 

        <Box
            pos="relative"
            w="100%"
            h="100%"
            // w={`${windowWidth}px`}
            // h={`${windowHeight}px`}
            minH="100vh"
            overflow="hidden"
        >
            <Image src={Logo}
                width="300px"
                pos="absolute"
                top="calc(50% - 150px)"
                left="calc(50% - 150px)"
                // top={`${windowHeight*0.5-150}px`}
                // left={`${windowWidth*0.5-150}px`}
                animation="logo-spin infinite 90s linear"
            />
            <Image src={Wheel}
                pos="absolute"
                w="1000px"
                top="-400px"
                left="calc(-600px + 10%)"
                // width={`${windowWidth*0.5}px`}
                // top={`${-windowWidth*0.25}px`}
                animation="logo-spin infinite 180s linear"
            />
            <Image src={Wheel}
                pos="absolute"
                w="1000px"
                bottom="-400px"
                right="calc(-600px + 10%)"
                // width={`${windowWidth*0.5}px`}
                // bottom={`${-windowWidth*0.25}px`}
                animation="logo-spin infinite 180s linear"
            />
        </Box>
     );
}
 
export default LandingPage;