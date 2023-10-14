// Chakra
import { Box, Flex, IconButton, Image, useColorModeValue, useDisclosure, Text, ModalBody } from "@chakra-ui/react";
import { InfoIcon, QuestionIcon } from "@chakra-ui/icons";

// Components
import LoginDrawer from "../../components/disclosure-comps/login-drawer/LoginDrawer";
import RoutineNav from "../../components/routine-comps/RoutineNav";
import RoutineBody from "../../components/routine-comps/RoutineBody";
import ColorThemeToggle from "../../components/settings-comps/ColorThemeToggle";
import AddModal from "../../components/disclosure-comps/AddModal";

// Pages
import LandingPage from "../../pages/landing-page/LandingPage";

// Context
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRoutineContext } from "../../hooks/useRoutineContext";

// Assets
import Logo from '../../assets/logo.png';
import InfoText from "../../components/settings-comps/InfoText";


const RootLayout = () => {
    
    const { user } = useAuthContext();
    const { routines } = useRoutineContext();
    const bg = useColorModeValue("var(--secondary-light)", "var(secondary-dark)")

    console.log(routines)

    const ThemeAndInfo = () => {

        const { isOpen: isInfoOpen, onOpen: onInfoOpen, onClose: onInfoClose } = useDisclosure();

        return (
            <Flex id="theme-info-container" gap="6px">
                <ColorThemeToggle />
                <IconButton id="info-button" icon={<QuestionIcon boxSize="16px" color="#000000" />} 
                    w="36px" h="36px" minW="unset" 
                    borderRadius="10px" bgColor="#f8f8ff"
                    onClick={onInfoOpen}
                />
                <AddModal isOpen={isInfoOpen} onClose={onInfoClose} header="What Is This??" size="5xl">
                    <ModalBody overflow="auto" maxH="80vh" pb="1rem">
                        <InfoText />
                    </ModalBody>
                </AddModal>
            </Flex>
        )
    }
    
    return ( 
        <Box as="main" id="primary-container"
            minH="100vh"
            w="100%"
            pos="relative"
            display={user ? "grid" : "block"}
            gridTemplateColumns="1fr 15fr"
            bgColor={user ? bg : "var(--secondary-light)"}
        >
            <Flex as="section" id="sidebar-container"
                flexDir="column"
                align="center"
                justify="space-between"
                minW="125px"
                h={user ? "auto" : "0px"}
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
                    />
                    {routines && <RoutineNav routines={routines} />}
                </Flex>
                <Flex id="account-and-theme-info-container"
                    flexDir="column"
                    gap="0.5rem"
                    m="1rem"
                > 
                    {user && <ThemeAndInfo />}
                    <LoginDrawer />
                </Flex>
            </Flex>
            {routines && <RoutineBody />}
            {!user && <LandingPage />}
        </Box>
     );
}
 
export default RootLayout;