import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const DaySelector = () => {

    const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

    const [activeDay, setActiveDay] = useState(0);

    const dayTextColor = useColorModeValue("#000000", "#f8f8ff");
    const selectorBg = useColorModeValue("var(--white-light)", "var(--white-dark)");

    const Day = ({ name, index }) => {
        return (
            <Button
                w={10}
                h={10}
                alignItems="center"
                justifyContent="center"
                borderRadius="5px"
                bgColor="transparent"
                fontFamily="Philosopher"
                fontWeight="normal"
                // zIndex={2}
                // color={activeDay === index ? "black" : dayTextColor}
                color={dayTextColor}
                // boxShadow={index===activeDay ? "0px 4px 4px rgba(0,0,0,0.25)" : "none"}
                onClick={() => {setActiveDay(index)}}
                _hover={{border: `1px solid ${dayTextColor}` }}
            >{name}</Button>
        )
    }

    return ( 
        <Flex flexDir="row" position="relative" gap="0px">
            <Flex
                w={10}
                h={10}
                alignItems="center"
                justifyContent="center"
                // fontWeight="bold"
                bgColor={selectorBg}
                color="#000000"
                // boxShadow="0px 4px 4px 1px rgba(0,0,0,0.25)"
                borderRadius="5px"
                zIndex={1}
                position="absolute"
                left={`${activeDay*40}px`}
                transition="0.2s"
            >{days[activeDay]}</Flex>
            {days.map( (day, index) => (
                <Day key={day} name={day} index={index} />
        ))}</Flex>
     );
}
 
export default DaySelector;