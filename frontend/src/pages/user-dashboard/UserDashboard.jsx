import { Flex, Image, Text } from "@chakra-ui/react";
import Wheel from "../../assets/wheel-wire.svg";

const UserDashboard = () => {

    const routines = ["Routine 1", "Routine 2", "Routine 3"]

    const RoutineCard = ({name}) => {

        return (

            <Flex
                flexDir="column"
                align="space-evenly"
                justify="center"
                padding="1rem"
                margin="1rem"
                bgColor="#F8F8FF"
                borderTop="5px solid #F1B049"
                borderRadius="10px"
                cursor="pointer"
                boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
                _hover={{boxShadow: "0px 4px 4px 4px rgba(0,0,0,0.25)"}}
            >
                <Image src={Wheel}
                    w="150px"
                />
                <Text>{name}</Text>
            </Flex>

        )
        
    }

    return ( 
        <Flex>
            {routines.map( routine => (
                <RoutineCard key={routine} name={routine} />
            ))}
        </Flex>
     );
}
 
export default UserDashboard;