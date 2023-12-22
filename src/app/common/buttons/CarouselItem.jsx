import { Box, Typography, useTheme } from '@mui/material';
import { getItaMonth, getItaDay } from "../../../theme.js"
import 'pure-react-carousel/dist/react-carousel.es.css';


const itemStyle = (theme, isActive) => {
    return {
        ...theme.containers.column.centerevenly,
        ...theme.containers.borders.main,
        backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.bg.light,
        boxShadow: theme.containers.shadows.primary.main,
        margin: "0 4px",
        padding: "4px 0"
    }
}

const CarouselItem = ({ day, isActive }) => {
    const theme = useTheme();

    return (
        <Box sx={() => itemStyle(theme, isActive)}>

            <Typography
                color={isActive ? "#fff" : theme.palette.primary.dark}
                fontSize={"12px"}>{`${getItaMonth(day.format("MMM"))}`}</Typography>

            <Typography
                color={isActive ? "#fff" : theme.palette.primary.dark}
                variant="h6">{`${day.date()}`}</Typography>

            <Typography
                color={isActive ? "#fff" : theme.palette.primary.dark}
                fontSize={"14px"}>{getItaDay(day.format('ddd'))}</Typography>
        </Box>
    )
};

export default CarouselItem;
