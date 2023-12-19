import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../buttons/PrimaryButton';
import { UserContext } from '../../context/UserProvider';

const appBarStyle = (theme) => {
    return {
        position: "fixed",
        display: 'flex',
        justifyContent: "center",
        height: "70px",
        bgcolor: theme.palette.bg.main,
    }
}

export default function SimpleTopBar({ props }) {
    const { user } = React.useContext(UserContext)
    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Box sx={{ mb: "86px" }}>
            <AppBar sx={() => appBarStyle(theme)}>
                <Toolbar sx={{ ...theme.containers.row.centerbetween }}>
                    <Typography component="div" variant="h6" sx={{ color: theme.palette.text.light }}>
                        {props.title}
                    </Typography>

                    {user && user.role === "ADMIN" && props.withBtn ?
                        <PrimaryButton
                            action={() => navigate(props.link)}
                            text={props.btnText}
                        />
                        : null
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
}