import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, IconButton, useTheme
} from '@mui/material';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';



const AdminActionButtons = ({ lesson, deleteLesson }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <IconButton
                color='primary'
                sx={{
                    px: 3,
                    borderRadius: "4px",
                    bgcolor: theme.palette.primary.main, color: "#fff"
                }}
                onClick={() => navigate("/lezioni/" + lesson.id + "/partecipanti", { state: { lesson: lesson } })}
                aria-label="partecipanti">
                <GroupAddTwoToneIcon fontSize='medium' />
            </IconButton>

            <Button
                variant='text'
                sx={{ color: "#7a7a7a" }}
                onClick={async () => await deleteLesson(lesson.id)}>
                Elimina
            </Button>


        </React.Fragment>

    );
};

export default AdminActionButtons;
