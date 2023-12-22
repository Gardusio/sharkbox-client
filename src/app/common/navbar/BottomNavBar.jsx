import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ViewListIcon from '@mui/icons-material/ViewList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import ClassIcon from '@mui/icons-material/Class';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
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
                        case "classi":
                            navigate("/classi")
                            break;
                        case "messaggi":
                            navigate("/messaggi")
                            break;
                        default: break;
                    }

                }}
            >

                <BottomNavigationAction
                    sx={{
                        color: "#fff",
                    }}
                    label="Calendario"
                    value="calendario"
                    icon={<CalendarMonthIcon


                    />} />

                {user && user.role === "ADMIN" ?
                    <BottomNavigationAction
                        sx={{
                            color: "#fff",
                        }}
                        label="Corsi"
                        value="corsi"
                        icon={<ViewListIcon />} />
                    : null}

                {user && user.role === "ADMIN" ?
                    <BottomNavigationAction
                        sx={{ color: "#fff", }}
                        label="Utenti"
                        value="utenti"
                        icon={<PeopleIcon />} />
                    : null
                }

                {user && user.role === "USER" ?
                    <BottomNavigationAction
                        sx={{ color: "#fff", }}
                        label="Classi"
                        value="classi"
                        icon={<ChecklistRtlIcon />} />
                    :
                    null
                }


                <BottomNavigationAction
                    sx={{
                        color: "#fff",
                    }}
                    label="Messaggi"
                    value="messaggi"
                    icon={<CampaignRoundedIcon />} />
            </BottomNavigation>
        </Box>
    );
}