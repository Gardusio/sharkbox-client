import { Typography, ListItem, useTheme, Box } from '@mui/material';

const itemStyle = (theme) => {
    return {
        ...theme.containers.row.centerbetween,
        py: 1
    }
}

const itemTitleStyle = () => {
    return { display: "flex", alignItems: "center", gap: 1, width: "45%" }
}

const iconStyle = (theme) => {
    return {
        color: theme.palette.secondary.main
    }
}

const textStyle = (theme) => {
    return {
        fontWeight: "400",
        color: theme.palette.secondary.main
    }
}

const infoStyle = (theme) => {
    return {
        fontWeight: "500",
    }
}

const CardListItem = ({ label, value, icon: Icon }) => {
    const theme = useTheme();

    return (

        <ListItem divider sx={() => itemStyle(theme)}>

            <Box sx={() => itemTitleStyle()}>
                <Icon sx={() => iconStyle(theme)} />
                <Typography sx={() => textStyle(theme)}>{label}</Typography>
            </Box>
            <Typography sx={() => infoStyle(theme)}>{value}</Typography>
        </ListItem>
    );
};

export default CardListItem;
