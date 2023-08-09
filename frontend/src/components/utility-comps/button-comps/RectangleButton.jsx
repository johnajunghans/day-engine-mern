import { Button } from "@chakra-ui/react";

const RectangleButton = ({children, margin}) => {



    return ( 
        <Button
            bgColor="#F1B049"
            m="1rem"
        >
            { children }
        </Button>
     );
}
 
export default RectangleButton;