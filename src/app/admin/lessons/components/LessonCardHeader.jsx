import { Typography, Box, useTheme } from '@mui/material';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';

const trimMinutes = (hour) => {
    const hhmm = hour.split(":");
    if (hhmm[1] === "00") {
        return hhmm[0];
    }
    return hour;
}

const containerStyle = (theme) => {
    return {

        ...theme.containers.row.centerbetween,
        height: "52px",
        py: 1,
        borderBottom: "1px solid rgba(0,0,0,0.12)"
    }
}

const slotStyle = (theme) => {
    return {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
    }
}

const LessonCardHeader = ({ lesson }) => {
    const theme = useTheme();


    return (
        <Box sx={() => containerStyle(theme)}>
            <Typography
                variant='h6'
                p={2}
            >
                {lesson.nome}
            </Typography>
            <Box
                sx={{
                    px: 2,
                    height: "100%",

                    color: theme.palette.secondary.main,
                    fontWeight: "bold",
                    ...theme.containers.row.center,
                    gap: 1,
                    borderRadius: "4px"
                }}
            >
                <ScheduleTwoToneIcon fontSize='small' />
                <Typography sx={() => slotStyle(theme)}>
                    {trimMinutes(lesson.start)} - {trimMinutes(lesson.end)}
                </Typography>
            </Box>
        </Box >

    );
};

export default LessonCardHeader;
