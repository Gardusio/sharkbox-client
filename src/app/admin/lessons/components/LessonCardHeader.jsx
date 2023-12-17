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

        ...theme.containers.row.centercenter,
        gap: 1,

        py: 2,
        color: theme.palette.secondary.main,
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
        <Box>
            <Box sx={() => containerStyle(theme)}>
                <ScheduleTwoToneIcon fontSize='small' />
                <Typography sx={() => slotStyle(theme)}>
                    {trimMinutes(lesson.start)} - {trimMinutes(lesson.end)}
                </Typography>
            </Box>

            <Typography
                variant='h6'
                pb={1}
                textAlign={"center"}
            >
                {lesson.nome}
            </Typography>



        </Box >
    );
};

export default LessonCardHeader;
