import styles from "./WheelMain.module.css";
import HabitSector from "../habit-sector/HabitSector";
import { useDisclosure, Flex, IconButton, useColorModeValue} from "@chakra-ui/react";
import DaySelector from "../day-selector/DaySelector";
// import { Settings } from "../../../assets/SvgImports.jsx";
// import SettingsSVG from "../../../assets/small-settings.svg";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";


const WheelMain = () => {

    // SVG dimension variables
    const svgDimensions = 800;
    const center = svgDimensions/2;
    const outerRadius = 400;
    const innerRadius = 175; 

    // Arrays to be mapped
    const rotations = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345]
    const timeMarkers = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM"];

    const innerCircleBg = useColorModeValue("var(--primary-light)", "var(--primary-dark)");
    const markerTextColor = useColorModeValue("#000000", "#f8f8ff");

    const CircleIconBtn = ({ size, icon, customStyles, onClick }) => {
        return (
            <foreignObject className={`${styles.overflow} ${customStyles}`} width={`${size}px`} height={`${size}px`} x={400-size/2} y={400-size/2}>
                <IconButton icon={icon}
                    width={size} 
                    height={size}
                    backgroundColor="var(--accent)"
                    borderRadius="50%"
                    margin={0}
                    padding={0}
                    minW="none"
                    boxShadow="0px 4px 2px rgb(0 0 0 / 0.2)"
                    _hover={{boxShadow: "0px 4px 4px rgb(0 0 0 / 0.4)"}}
                    onClick={onClick}
                />
            </foreignObject>
        )
    }

    return (
            <Flex 
                flexDir="column" 
                // gap="3rem" 
                align="center" 
                justify="center" 
                minW="938px" 
                px="3rem"
            >
                {/* <Flex 
                    align="center" 
                    justify="flex-start" 
                    w="100%"
                    mt="0.5rem"
                >
                    <DaySelector />
                </Flex> */}
                <svg className={styles.svg} width={svgDimensions} height={svgDimensions}>
                    <circle cx={center} cy={center} r={outerRadius} className={styles.outerCircle} />
                    <circle cx={center} cy={center} r={innerRadius} className={styles.innerCircle} fill={innerCircleBg} />
                    <CircleIconBtn size={30} customStyles={styles.smallSettingsBtn} icon={<SettingsIcon />}/>
                    <CircleIconBtn size={67} icon={<AddIcon boxSize="25px" />} />
                    <g id="line-wrapper">
                        {rotations.map( rot => (
                            <path key={rot} d="M 225 400 L -10 400" className={styles.lines} style={{transform: `rotate(${rot}deg)`}}/>
                        ))}
                    </g>
                    <g id="time-marker-wrapper">
                        {timeMarkers.map( marker => (
                            <g key={marker} className={styles.markerWrapper} style={{transform: `rotate(${timeMarkers.indexOf(marker)*15}deg)`}}>
                                <text textAnchor="middle" x={-26} y={404} fill={markerTextColor} className={styles.marker} style={{transform: `rotate(${timeMarkers.indexOf(marker)*-15}deg)`}}>{marker}</text>
                            </g>
                        ))}
                    </g>
                    <HabitSector risingTime="06:00" innerRadius={innerRadius} outerRadius={outerRadius} center={center} startTime="05:30" endTime="6" habitName="Morning Walk" />
                    <HabitSector risingTime="06:00" innerRadius={innerRadius} outerRadius={outerRadius} center={center} startTime="06:00" endTime="06:45" habitName="Breathwork" />
                    <HabitSector risingTime="06:00" innerRadius={innerRadius} outerRadius={outerRadius} center={center} startTime="08:45" endTime="15:00" habitName="Work" />
                </svg>
            </Flex>
     );
}
 
export default WheelMain;