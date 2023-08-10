import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";

const LoginDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    <DrawerCloseButton color="#FFFFFF" />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>

                    </DrawerBody>
                    <DrawerFooter>
                        <Button></Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
     );
}
 
export default LoginDrawer;