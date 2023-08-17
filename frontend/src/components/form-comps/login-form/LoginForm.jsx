import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const LoginForm = ({ handleLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        handleLogin(email, password);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <Stack
                spacing="1rem" 
                bgColor="rgba(255,255,255,0.5)" 
                borderRadius="10px"
                padding="1rem"
            >
                <Input
                    bgColor="#F8F8FF"
                    size="lg"
                    isRequired={true}
                    focusBorderColor="#F1B049"
                    placeholder="Email"
                    type="email"
                    onChange={e => {setEmail(e.target.value)}} 
                    value={email}
                />
                <Input
                    bgColor="#F8F8FF"
                    size="lg"
                    isRequired={true}
                    focusBorderColor="#F1B049"
                    placeholder="Password"
                    type="password"
                    onChange={e => {setPassword(e.target.value)}}
                    value={password}
                />
            <Button 
                type="submit"
                bgColor="#F1B049"
                _hover={{bgColor: "#F9D7A2"}}
            >Submit</Button>
            </Stack>
        </form>
     );
}
 
export default LoginForm;