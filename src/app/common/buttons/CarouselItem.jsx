import { Box, Typography, useTheme } from '@mui/material';

import 'pure-react-carousel/dist/react-carousel.es.css';
import dayjs from 'dayjs';


const itemStyle = (theme, isActive) => {
    return {
        ...theme.containers.column.centerevenly,
        ...theme.containers.borders.main,
        backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.bg.light,
        color: isActive ? theme.palette.text.light : theme.palette.text.main,
        boxShadow: theme.shadows.primary.main,
        margin: "0 4px",
        padding: "4px 0"
    }
}

const CarouselItem = ({ day, isActive }) => {
    const theme = useTheme();

    return (
        <Box sx={() => itemStyle(theme, isActive)}>

            <Typography fontSize={"12px"}>{`${day.format("MMM")}`}</Typography>

            <Typography variant="h6">{`${day.date()}`}</Typography>

            <Typography fontSize={"14px"}>{day.format('ddd')}</Typography>
        </Box>
    )
};

export default CarouselItem;
