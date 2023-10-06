import { ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import CircularAddBtn from "../../utility-comps/button-comps/CircularAddBtn";
import RitualTileOriginal from "../wheel-comps/ritual-tile/RitualTile";

const Rituals = () => {

    const mockRituals = {
        essential: [
            {
                name: "Meditation",
                emoji: 129496,
                description: {
                    what: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                    where: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates.",
                    why: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, inventore! Voluptates nesciunt a adipisci rerum officia quos non. Reiciendis eos nobis earum quos magni vel inventore nemo ut soluta voluptates."
                },
                type: "essential"
            }
        ],
        movement: [],
        becoming: []
    }

    const iconBtnStyles = {
        bgColor: "unset",
        _hover: {bgColor: "rgba(0,0,0,0.25)"},
    }

    const RitualTile = ({ name, emoji, description }) => {

        const [expanded, setExpanded] = useState(false);

        const DescriptionText = ({ label, description }) => {

            return (
                <Flex>
                    <Text fontWeight="bold">{label}:   </Text>
                    <Text>{description}</Text>
                </Flex>
            )
        }

        return (
            <Flex className="ritual-tile"
                flexDir="column"
                justify="center" 
                w="100%"
                h={expanded ? "auto" : "50px"}
                bgColor="#f8f8ff"
                boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
                borderRadius="10px"
            >
                <Flex className="ritual-tile-header"
                    px="1rem"
                    w="100%"
                    h="50px"
                    align="center"
                    justify="space-between"
                >               
                    <Text className="ritual-emoji"><span>{String.fromCodePoint(emoji)}</span></Text>
                    <Text fontSize="14px" fontWeight="bold">{name}</Text>
                    <IconButton 
                        icon={<ChevronRightIcon boxSize="22px" transform={expanded ? "rotate(90deg)" : "rotate(0deg)"} transition="0.2s" />} 
                        {...iconBtnStyles}
                        onClick={() => {setExpanded(!expanded)}}
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
                pos="relative"
                w="80%"
                minH="50px"
            >
                <Text
                    pos="absolute"
                    top="-25px" left="-10px"
                    fontSize="14px" 
                    color="#f8f8ff"
                >{type.toUpperCase()}</Text>

                {mockRituals[type].map( ritual => (
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
                <CircularAddBtn btnSize="30px" iconSize="12px" />
                <Text id="ritual-header-text" 
                    fontSize="18px" 
                    fontWeight="bold"
                    color="#f8f8ff"
                >Rituals</Text>
                <IconButton icon={<DownloadIcon />}
                    w="30px" h="30px" minW="unset"
                    borderRadius="5px" 
                    bgColor="var(--accent)"
                    boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
                    _hover={{bgColor: "#F9D7A2"}}
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
        </>

     );
}
 
export default Rituals;