import { Input, Stack, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";
import { inputStyles } from "./formStyles";
import FormSubmitBtn from "./FormSubmitBtn";

const AddRoutineForm = () => {

    const [name, setName] = useState("");

    const handleSubmit = e => {
        e.preventDefualt();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <ModalBody>
                <Stack>
                    <Input id="new-ritual-name-input"
                        type="text"
                        value={name}
                        onChange={e => {setName(e.target.value)}}
                        placeholder="Routine Name"
                        {...inputStyles}
                        fontSize="25px"
                        textAlign="center"
                        focusBorderColor="var(--accent)"
                    />
                </Stack>
            </ModalBody>
            <ModalFooter>
                <FormSubmitBtn buttonText="Create Routine" />
            </ModalFooter>
        </form>
     );
}
 
export default AddRoutineForm;