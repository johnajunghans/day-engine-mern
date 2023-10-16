import { BellIcon, InfoIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, InputGroup, Stack, Textarea, useColorModeValue, ModalBody, ModalFooter, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { inputStyles } from "./formStyles";
import FormSubmitBtn from "./FormSubmitBtn";

const AddRitualForm = ({ handleAddRitual }) => {

    const [name, setName] = useState("")
    const [emoji, setEmoji] = useState(null);
    const [type, setType] = useState("");

    const [descriptionWhat, setDescriptionWhat] = useState("");
    const [descriptionWhere, setDescriptionWhere] = useState("");
    const [descriptionWhy, setDescriptionWhy] = useState("");

    const headerColor = useColorModeValue("var(--secondary-light)", "var(--secondary-dark)")
    const btnColor = useColorModeValue("var(--accent-light)", "var(--accent-dark)")

    const iconButtonStyles = {
        h: "50px",
        w: "75px",
        bgColor: btnColor
    }

    const descriptionHeaderStyles = {
        align: "center",
        justify: "center",
        w: "100%", h: "30px",
        color: "#f8f8ff",
        fontSize: "18px",
        fontWeight: "bold", 
        bgColor: headerColor,
        borderRadius: "10px 10px 0px 0px"
    }

    const descriptionTextareaStyles = {
        borderRadius: "0px 0px 10px 10px",
        focusBorderColor: "transparent",
        bgColor: "#f8f8ff",
        borderColor: "#f8f8ff",
        _hover: {borderColor: "#f8f8ff"},
        _focus: {borderColor: "#f8f8ff"},
        color: "#000000"
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newRitual = {
            name: name,
            type: type,
            description: {
                what: descriptionWhat,
                where: descriptionWhere,
                why: descriptionWhy
            }
        }
        handleAddRitual(newRitual);
    }

    return (
        <form onSubmit={handleSubmit}>
            <ModalBody>
                <Stack spacing="1.5rem">
                    <InputGroup>
                        <IconButton 
                            {...iconButtonStyles} 
                            icon={<BellIcon />} 
                            borderRadius="10px 0px 0px 10px"
                            />
                        <Input id="ritual-name-input"
                            name="ritual-name-input"
                            type="text"
                            placeholder="Ritual Name" 
                            size="lg"
                            focusBorderColor="transparent"
                            {...inputStyles} 
                            borderRadius="0px"
                            fontSize="25px"
                            textAlign="center"
                            />
                        <IconButton 
                        icon={<InfoIcon />} 
                        {...iconButtonStyles}
                        borderRadius="0px 10px 10px 0px"
                        />
                    </InputGroup>
                    <Flex flexDir="column" align="center">
                        <Select placeholder="Ritual Type" value={type} onChange={e => {setType(e.target.value)}} mb="1.5rem">
                            <option>Essential</option>
                            <option>Movement</option>
                            <option>Becoming</option>
                        </Select>
                        <Flex {...descriptionHeaderStyles}>What</Flex>
                        <Textarea id="description-what-input"
                            {...descriptionTextareaStyles}
                            value={descriptionWhat}
                            onChange={e => {setDescriptionWhat(e.target.value)}}
                            // placeholder={placeholder}   
                        /> 
                    </Flex>
                    <Flex flexDir="column" align="center">
                        <Flex {...descriptionHeaderStyles}>Where</Flex>
                        <Textarea id="description-where-input"
                            {...descriptionTextareaStyles}
                            value={descriptionWhere}
                            onChange={e => {setDescriptionWhere(e.target.value)}}
                            // placeholder={placeholder}   
                        /> 
                    </Flex>
                    <Flex flexDir="column" align="center">
                        <Flex {...descriptionHeaderStyles}>Why</Flex>
                        <Textarea id="description-why-input"
                            {...descriptionTextareaStyles}
                            value={descriptionWhy}
                            onChange={e => {setDescriptionWhy(e.target.value)}}
                            // placeholder={placeholder}   
                        /> 
                    </Flex>
                </Stack>
            </ModalBody>
    
            <ModalFooter>
                <FormSubmitBtn buttonText="Create Ritual" />
            </ModalFooter>
        </form>
             
     );
}
 
export default AddRitualForm;