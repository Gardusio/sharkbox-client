import { Box, Typography, useTheme } from '@mui/material';

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

const getItaDay = (day) => {
    switch (day) {
        case "Mon": return "Lun"
        case "Tue": return "Mar"
        case "Wed": return "Mer"
        case "Thu": return "Gio"
        case "Fri": return "Ven"
        case "Sat": return "Sab"
        case "Sun": return "Dom"
        default: return ""
    }
}

const getItaMonth = (day) => {
    switch (day) {
        case "Dec": return "Dic"
        case "Jan": return "Gen"
        case "Feb": return "Feb"
        case "Mar": return "Mar"
        case "Apr": return "Apr"
        case "May": return "Mag"
        case "Jun": return "Giu"
        case "Jul": return "Lug"
        case "Aug": return "Ago"
        case "Sep": return "Set"
        case "Opt": return "Ott"
        case "Nov": return "Nov"
        default: return ""
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
