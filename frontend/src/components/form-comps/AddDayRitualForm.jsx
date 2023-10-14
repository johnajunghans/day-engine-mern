import { Select, Stack, InputLeftAddon, InputGroup, Input, Checkbox, useColorModeValue, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { useState } from "react";
import FormSubmitBtn from "./FormSubmitBtn";

const AddDayRitualForm = () => {

    const days1 = ["Monday", "Tuesday", "Wednesday", "Thursday"];
    const days2 = ["Friday", "Saturday", "Sunday"];

    const borderColor = useColorModeValue("#000000", "#f8f8ff");

    const [name, setName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e, e.target);
        let activeDays = {}
        for (let i=3; i < e.target.length; i++) {
            activeDays = {...activeDays, [e.target[i].value]: e.target[i].checked}
        }
        console.log(activeDays); 
        // take name, startTime, endTime, and an array populated with checked days and feed them into another function that updates the wheel context and also updates the routine document
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <ModalBody>
                <Stack>
                    <Select 
                        placeholder="Ritual Name"
                        value={name}
                        onChange={e => {setName(e.target.value)}}
                        borderColor={borderColor}
                    >
                        {/* active ritual names map here */}
                    </Select>
                    <Stack spacing={3} direction="row">
                        <InputGroup borderColor={borderColor}>
                            <InputLeftAddon children="Start Time" />
                            <Input type="time" value={startTime} onChange={e => {setStartTime(e.target.value)}} />
                        </InputGroup>
                        <InputGroup borderColor={borderColor}>
                            <InputLeftAddon children="End Time" />
                            <Input type="time" value={endTime} onChange={e => {setEndTime(e.target.value)}} />
                        </InputGroup>
                    </Stack>
                    <Stack direction="column" align="center">
                        <Stack direction="row" spacing="2rem">
                            {days1.map(day => (
                                <Checkbox borderColor={borderColor} value={day}>{day}</Checkbox>
                            ))}
                        </Stack>
                        <Stack direction="row" spacing="2rem">
                            {days2.map(day => (
                                <Checkbox borderColor={borderColor} value={day}>{day}</Checkbox>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </ModalBody>
            <ModalFooter>
                <FormSubmitBtn buttonText="Add Day Ritual" />
            </ModalFooter>
        </form>   
     );
}
 
export default AddDayRitualForm;