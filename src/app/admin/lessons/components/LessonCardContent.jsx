import { Typography, List, ListItem, useTheme, Box } from '@mui/material';

import QueueTwoToneIcon from '@mui/icons-material/QueueTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';

const itemStyle = (theme) => {
    return {
        height: "42px",
        ...theme.containers.row.centerbetween
    }
}

const itemTitleStyle = (theme) => {
    return { display: "flex", alignItems: "center", gap: 1, width: "40%" }
}

const iconStyle = (theme) => {
    return {
        color: theme.palette.secondary.main
    }
}

const textStyle = (theme) => {
    return {
        fontWeight: "600",
        color: theme.palette.secondary.main
    }
}

const infoStyle = (theme) => {
    return {
        fontWeight: "600",

    }
}

const LessonCardContent = ({ lesson }) => {
    const theme = useTheme();

    return (
        <List >

            <ListItem divider sx={() => itemStyle(theme)}>

                <Box sx={() => itemTitleStyle()}>
                    <GroupsTwoToneIcon sx={() => iconStyle(theme)} />
                    <Typography sx={() => textStyle(theme)}>Iscritti</Typography>
                </Box>
                <Typography sx={() => infoStyle(theme)}>{lesson.partecipanti.length} persone</Typography>
            </ListItem>


            <ListItem divider sx={() => itemStyle(theme)}>
                <Box sx={() => itemTitleStyle()}>
                    <QueueTwoToneIcon sx={() => iconStyle(theme)} />
                    <Typography sx={() => textStyle(theme)}>In coda</Typography>
                </Box>
                <Typography sx={() => infoStyle(theme)}>{lesson.coda.length} persone</Typography>
            </ListItem>

        </List>

    );
};

export default LessonCardContent;
