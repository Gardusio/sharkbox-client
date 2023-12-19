import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, IconButton, useTheme
} from '@mui/material';


const UserActionButtons = ({ lesson, joinLesson }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Button
                color='primary'
                sx={{
                    px: 3,
                    borderRadius: "4px",
                    bgcolor: theme.palette.primary.main, color: "#fff"
                }}
                onClick={() => null}
                aria-label="partecipanti">
                Iscriviti
            </Button>

        </React.Fragment>

    );
};

export default UserActionButtons;
