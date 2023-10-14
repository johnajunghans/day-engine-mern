import { useColorModeValue, Button } from "@chakra-ui/react";

const FormSubmitBtn = ({ buttonText}) => {

    const submitBtnColor = useColorModeValue("var(--accent-light)", "var(--accent-dark)"); 
    const btnColorHover = useColorModeValue("var(--accent-light-hover)", "var(--accent-dark-hover)");
    
    return ( 
        <Button
            type="submit" 
            m="0 auto" 
            bgColor={submitBtnColor}
            _hover={{bgColor: btnColorHover}}
        >{buttonText}</Button>
     );
}
 
export default FormSubmitBtn;