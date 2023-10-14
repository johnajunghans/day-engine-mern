import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    useColorModeValue
  } from '@chakra-ui/react'

const AddModal = ({ children, header, isOpen, onClose, size }) => {

    const bg = useColorModeValue("var(--primary-light)", "var(--primary-dark)");
    
    return (
        <Modal size={size} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay 
                backdropFilter="blur(1px)"
                bgColor="rgba(0,0,0,0.15)"
            />
            <ModalContent 
                // bgColor="rgba(248,248,255,1)"
                boxShadow="0px 2px 8px 6px rgba(0,0,0,0.33)"
                bgColor={bg}
            >
                <ModalHeader>{header}</ModalHeader>
                { children }
                <ModalCloseButton />
            </ModalContent>
        </Modal>
    )
}
 
export default AddModal;