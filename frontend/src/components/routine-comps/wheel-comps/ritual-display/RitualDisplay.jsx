import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import RitualTile from "../ritual-tile/RitualTile";

const RitualDisplay = () => {
    return ( 
        <Flex 
            w="auto" 
            h="auto" 
            p="0 2rem" 
            flexDir="column" 
            gap="1rem"
        >
            <Flex
                className="ritual-header"
                w="100%"
                align="center"
                justify="center"
                gap="0.5rem"
                mt="0.5rem"
            >
                <Text fontSize="25px">Rituals</Text>
                <IconButton
                    icon={<ExternalLinkIcon boxSize="16px" />}
                    w="30px" h="30px" minW="0px"
                    backgroundColor="transparent"
                    opacity="0"
                    transform="translateX(-10px)"
                    transition="0.3s"
                    borderRadius="5px"
                    p="0.15rem"
                    _hover={{backgroundColor: "rgba(0,0,0,0.1)"}}
                    sx={{'.ritual-header:hover &': {
                        opacity: "1",
                        transform: "translateX(0px)"
                    }}}
                />
            </Flex>
            
            <RitualTile emojiIcon="&#128512;" name="Meditation" color="red">
                <Text fontSize="15px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae fuga dignissimos quibusdam, perferendis voluptatum explicabo molestiae modi pariatur accusantium tempore dolorum, tempora adipisci. Corrupti iusto nesciunt autem repudiandae veritatis!</Text>
            </RitualTile>
            <RitualTile emojiIcon="&#128516;" name="Running" color="blue">
                <Text fontSize="15px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae fuga dignissimos quibusdam, perferendis voluptatum explicabo molestiae modi pariatur accusantium tempore dolorum, tempora adipisci. Corrupti iusto nesciunt autem repudiandae veritatis!</Text>
            </RitualTile>
            <RitualTile emojiIcon="&#128519;" name="Writing" color="green">
                <Text fontSize="15px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae fuga dignissimos quibusdam, perferendis voluptatum explicabo molestiae modi pariatur accusantium tempore dolorum, tempora adipisci. Corrupti iusto nesciunt autem repudiandae veritatis!</Text>
            </RitualTile>
        </Flex>
     );
}
 
export default RitualDisplay;