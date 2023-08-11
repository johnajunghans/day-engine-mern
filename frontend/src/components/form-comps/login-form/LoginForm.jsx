import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const StdInput = ({ placeholder, onChange }) => {
        
        return (
            <Input 
                placeholder={placeholder} 
                bgColor="#F8F8FF"
                size="lg"
                isRequired="true"
                onChange={onChange}
                // outline="none"
                // outlineOffset="0px"
                // _focus={{outlineColor: "#F1B049"}}
            />
        )
    }

    return ( 
        <form onSubmit={{}}>
            <Stack
                spacing="1rem" 
                bgColor="rgba(255,255,255,0.5)" 
                borderRadius="10px"
                padding="1rem"
            >
                <StdInput 
                    placeholder="Email"
                    onChange={e => {setEmail(e.target.value)}} 
                />
                <StdInput 
                    placeholder="Password" 
                    onChange={e => {setPassword(e.target.value)}}
                />
            <Button 
                type="submit"
                bgColor="#F1B049"
            >Submit</Button>
            </Stack>
        </form>
     );
}
 
export default LoginForm;