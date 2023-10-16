import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import AddModal from "../../disclosure-comps/AddModal";
import AddRitualForm from "../../form-comps/AddRitualForm";
import CircularAddBtn from "../../utility-comps/button-comps/CircularAddBtn";

const Rituals = () => {

    const headerTextColor = useColorModeValue("#000000", "#f8f8ff");
    const { isOpen: isAddRitualModalOpen, onOpen: handleAddRitualModelOpen, onClose: handleAddRitualModelClose } = useDisclosure();

    const rawRituals = [
        {
            name: "Meditation",
            emoji: 129496,
            description: {
                what: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                where: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                why: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates."
            },
            type: "essential"
        },
        {
            name: "Meditation",
            emoji: 129496,
            description: {
                what: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                where: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                why: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates."
            },
            type: "essential"
        },
        {
            name: "Meditation",
            emoji: 129496,
            description: {
                what: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                where: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                why: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates."
            },
            type: "becoming"
        }
    ]

    const mappableRituals = {
        essential: [],
        movement: [],
        becoming: []
    }

    rawRituals.forEach( ritual => {
        mappableRituals[ritual.type].push(ritual);
    })

    const [rituals, setRituals] = useState(mappableRituals);

    const handleAddRitual = (newRitual) => {
        const newRituals = {...rituals}
        newRituals[newRitual.type].push(newRitual);
        setRituals(newRituals);
    }

    const iconBtnStyles = {
        bgColor: "unset",
        _hover: {bgColor: "unset"},
        color: "#000000"
    }

    const RitualTile = ({ name, emoji, description }) => {

        const [expanded, setExpanded] = useState(false);
        const bg = useColorModeValue("var(--white-light)", "var(--white-dark)");

        const DescriptionText = ({ label, description }) => {

            return (
                <Flex>
                    <Text color="#000000" fontWeight="bold">{label}:   </Text>
                    <Text color="#000000">{description}</Text>
                </Flex>
            )
        }

        return (
            <Flex className="ritual-tile"
                flexDir="column"
                justify="center" 
                w="100%"
                h={expanded ? "auto" : "50px"}
                bgColor={bg}
                _hover={{bgColor: "rgba(255,255,255,0.85)"}}
                // boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                // _hover={{boxShadow: "0px 4px 4px rgba(0,0,0,0.25)"}}
                borderRadius="10px"
                onClick={() => {setExpanded(!expanded)}}
                cursor="pointer"
            >
                <Flex className="ritual-tile-header"
                    px="1rem"
                    w="100%"
                    h="50px"
                    align="center"
                    justify="space-between"
                >               
                    <Text className="ritual-emoji" fontSize="25px">{String.fromCodePoint(emoji)}</Text>
                    <Text fontSize="14px" color="#000000" fontWeight="bold">{name}</Text>
                    <IconButton 
                        icon={<ChevronRightIcon boxSize="22px" transform={expanded ? "rotate(90deg)" : "rotate(0deg)"} transition="0.1s" />} 
                        {...iconBtnStyles}
                        // onClick={() => {setExpanded(!expanded)}}
                    />
                </Flex>
                {expanded && 
                    <Flex className="ritual-tile-description-container"
                        flexDir="column"
                        p="1rem"
                    >
                        <DescriptionText label="What" description={description.what} />
                        <DescriptionText label="Where" description={description.where} />
                        <DescriptionText label="Why" description={description.why} />
                    </Flex>
                }
            </Flex>
        )
    }

    const RitualType = ({ type }) => {

        return (
            <Flex
                flexDir="column"
                pos="relative"
                w="80%"
                minH="50px"
                gap="0.5rem"
            >
                <Text
                    pos="absolute"
                    top="-25px" left="-10px"
                    fontSize="14px" 
                    color={headerTextColor}
                >{type.toUpperCase()}</Text>

                {rituals[type].map( ritual => (
                    <RitualTile key={ritual.name} name={ritual.name} emoji={ritual.emoji} description={ritual.description} />
                ))}

            </Flex>
        )
    }

    return ( 
        <>
            <Flex id="ritual-header" as="header"
                p="1rem"
                align="center"
                justify="space-between"
            >   
                <CircularAddBtn btnSize="30px" iconSize="12px" handleClick={handleAddRitualModelOpen} tooltip="Create New Ritual" />
                <Text id="ritual-header-text" 
                    fontSize="18px" 
                    fontWeight="bold"
                    color={headerTextColor}
                >Rituals</Text>
                <IconButton icon={<ExternalLinkIcon />}
                    w="30px" h="30px" minW="unset"
                    borderRadius="5px" 
                    bgColor="var(--accent)"
                    boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                    // _hover={{bgColor: "#F9D7A2"}}
                    _hover={{boxShadow: "0px 4px 4px rgba(0,0,0,0.25)"}}
                    visibility="hidden"
                />
            </Flex>
            <Flex id="ritual-type-container"
                flexDir="column"
                align="center"
                gap="3rem"
            >
                <RitualType type="essential" />
                <RitualType type="movement" />
                <RitualType type="becoming" />
            </Flex>
            <AddModal 
                isOpen={isAddRitualModalOpen} 
                onClose={handleAddRitualModelClose} 
                header="Add New Ritual" 
                size="lg"
                submitButtonText="Create New Ritual"
            >
                <AddRitualForm handleAddRitual={handleAddRitual} />
            </AddModal>
        </>
     );
}
 
export default Rituals;