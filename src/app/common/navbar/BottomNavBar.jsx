import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ViewListIcon from '@mui/icons-material/ViewList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/UserProvider';

export default function BottomNavBar() {
    const theme = useTheme();
    const { user } = React.useContext(UserContext)
    const navigate = useNavigate()

    const [value, setValue] = React.useState("calendario");


    return (
        <Box
            sx={{ width: "100vw", position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
            <BottomNavigation
                sx={{ bgcolor: theme.palette.bg.main, height: "60px" }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);

                    console.log(newValue);

                    switch (newValue) {
                        case "corsi":
                            navigate("/corsi")
                            break;
                        case "calendario":
                            navigate("/")
                            break;
                        case "utenti":
                            navigate("/utenti")
                            break;
                        case "tutorial":
                            navigate("/tutorial")
                            break;
                        default: break;
                    }

                }}
            >

                <BottomNavigationAction

                    sx={{
                        color: "#fff",
                        '& .Mui-selected': { color: "#fff" },
                    }}
                    label="Calendario"
                    value="calendario"
                    icon={<CalendarMonthIcon
                        sx={{
                            color: "#fff",
                            '& .Mui-selected': { color: "#fff" },
                        }}

                    />} />

                {user && user.role === "ADMIN" ?
                    <BottomNavigationAction

                        sx={{
                            color: "#fff",
                            '& .Mui-selected': { color: "#fff" },
                        }}
                        label="Corsi"
                        value="corsi"
                        icon={<ViewListIcon sx={{ color: "#fff" }} />} />
                    : null}
                {/*
                <BottomNavigationAction
                    sx={{
                        color: "#fff",
                        '& .Mui-selected': { color: "#fff" },
                    }}
                    label="Utenti"
                    value="utenti"
                    icon={<PeopleIcon sx={{ color: "#fff" }} />} />
                
                <BottomNavigationAction
                    sx={{
                        color: "#fff",
                        '& .Mui-selected': { color: "#fff" },
                    }}
                    label="Tutorial"
                    value="tutorial"
                    icon={<HelpIcon sx={{ color: "#fff" }} />} />
*/}
            </BottomNavigation>
        </Box>
    );
}