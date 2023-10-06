import { time24HrStringToCoordinates, time24HrStringToRawHours, timeRawHoursToCoordinates, timeRawHoursToDegrees } from "../../../../functions/polarCoordinates";
import styles from './HabitSector.module.css';

const HabitSector = ({risingTime, innerRadius, outerRadius, center, startTime, endTime, habitName}) => {

    //Finding coordinates for habit path
    const [innerStartX, innerStartY] = time24HrStringToCoordinates(startTime, risingTime, innerRadius, center);
    const [outerStartX, outerStartY] = time24HrStringToCoordinates(startTime, risingTime, outerRadius, center);
    const [innerEndX, innerEndY] = time24HrStringToCoordinates(endTime, risingTime, innerRadius, center);
    const [outerEndX, outerEndY] = time24HrStringToCoordinates(endTime, risingTime, outerRadius, center);

    // Finding the coordinates of the center of the habit sector
    const startHours = time24HrStringToRawHours(startTime);
    const endHours = time24HrStringToRawHours(endTime);
    const risingHours = time24HrStringToRawHours(risingTime);
    const [sectorCenterX, sectorCenterY] = timeRawHoursToCoordinates((startHours+endHours)/2, risingHours, (innerRadius+outerRadius)/2, center);

    //Finding rotation degree for text
    const startDegree = timeRawHoursToDegrees(startHours, risingHours);
    const endDegree = timeRawHoursToDegrees(endHours, risingHours);
    const avgDegree = (startDegree+endDegree)/2;
    const avgHours = (startHours+endHours)/2;
    const textRotationDegree = (avgHours-risingHours) >= 6 && (avgHours-risingHours) <= 18 ? avgDegree+180 : avgDegree;

    return (
        <g className={styles.habitWrapper}>
            <path 
                className={styles.habitSector} 
                d={`
                    M ${innerStartX} ${innerStartY} 
                    L ${outerStartX} ${outerStartY} 
                    A ${outerRadius} ${outerRadius} 1 0 1 ${outerEndX} ${outerEndY} 
                    L ${innerEndX} ${innerEndY} 
                    A ${innerRadius} ${innerRadius} 1 0 0 ${innerStartX} ${innerStartY}
                `}
            />
            <text 
                className={styles.habitText} 
                textAnchor="middle" 
                dominantBaseline="middle" 
                x={sectorCenterX} 
                y={sectorCenterY} 
                style={{
                    transform: `rotate(${textRotationDegree}deg)`, 
                    transformOrigin: `${sectorCenterX}px ${sectorCenterY}px`}}
            >{habitName}</text>
        </g> 
     );
}
 
export default HabitSector;