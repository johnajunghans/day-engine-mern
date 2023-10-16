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


    // PSUEDOCODE FOR PROCESSING ROUTINES
    // 1. routines load into routine context, then RootLayout consumes routine context and takes in the array of objects that are the routine documents
    // 2. the routine documents are sorted by most recently updated and then mapped into RoutineNav which either also consumes routine context or recieves the routine data as a prop
    // 3. the most recent routine is rendered by the application on user login:
    //      a. the activeRituals property of the routine, which is a array of ids corresponding to the active rituals in the routine, is fed into a fetch algorithm which grabs all of the routines with the given ids 
    //      b. the rituals that comes back are then mapped into the Rituals component
    //      c. the rituals are also fed into a reducer function of the soon-to-be created WheelContext
    //      d. the WheelContext takes in these rituals along with the dayMapping property of the routine 
    //          i. the WheelContext maps the current day by default. Mapping involves feeding the array of objects, which is the value of the current day property, into the WheelMain component   
    //          ii. Each object in the array, when mapped, is rendered as a sector on the circle. It has a ritualId property which links it to the ritual such that any changes to the ritual reflect in the Wheel.
    //          iii. The ritualId property from the object is fed into a function which searches the ritual list and returns the name and type properties of the ritual. 
    //          iv. These properties, along with the startTime and endTime properties from the object itself, compose all the necessary data to fully render the day  

    const { user } = useAuthContext();
    const { routines } = useRoutineContext();
    const bg = useColorModeValue("var(--secondary-light)", "var(--secondary-dark)")

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