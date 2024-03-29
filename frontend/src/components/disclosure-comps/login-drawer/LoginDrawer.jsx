import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, useDisclosure, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLogin } from "../../../hooks/useLogin";
import LoginForm from "../../form-comps/login-form/LoginForm";

const LoginDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { login, isLoading, error } = useLogin();

    const errorToast = useToast();

    const hrStyle = {
        width: "100%",
        color: "#FFFFFF"
    }

    const handleLogin = async (email, password) => {
        await login(email, password);
    }

    useEffect(() => {
        error && errorToast({
            title: "Error",
            description: error,
            status: "error",
            duration: 5000,
            isClosable: false
        })
    }, [error])

    return (
        <>
            {!isOpen && <Button onClick={onOpen}
                pos="absolute"
                m="1rem"
                right="0px"
                bgColor="#F1B049"
                _hover={{bgColor: "#F9D7A2"}}
                zIndex="1"
            >
                Login
            </Button>}
            
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                size="md"
                
            >
                <DrawerOverlay />
                <DrawerContent 
                    bgColor="rgba(0,0,0,0.5)"
                    borderLeft="3px solid #F1B049"
                    borderRadius="10px 0px 0px 10px"
                    backdropFilter="blur(2px)"
                >
                    <DrawerCloseButton color="#FFFFFF" _hover={{bgColor: "rgba(255,255,255,0.25)"}} />
                    <DrawerHeader color="#FFFFFF">Login</DrawerHeader>
                    <DrawerBody>
                        <Flex
                            flexDir="column"
                            gap="1.5rem"
                        >
                            <LoginForm handleLogin={handleLogin} />
                            <Flex
                                align="center"
                                gap="0.5rem"
                                padding="0.5rem"
                            >
                                <hr style={hrStyle} />
                                <Text color="#FFFFFF">OR</Text>
                                <hr style={hrStyle} />
                            </Flex>
                            <Flex
                                flexDir="column"
                                gap="1rem"
                                bgColor="rgba(255,255,255,0.5)" 
                                borderRadius="10px"
                                padding="1rem"
                            >
                                <Button
                                    colorScheme="blue"  
                                >Request an Account</Button>
                                <Button
                                    colorScheme="green"
                                >View Live Demo!</Button>
                            </Flex>
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
     );
}
 
export default LoginDrawer;