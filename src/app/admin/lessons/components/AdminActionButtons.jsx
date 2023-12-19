import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, useTheme
} from '@mui/material';



const AdminActionButtons = ({ lesson, deleteLesson }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <React.Fragment>

            <Button
                variant='contained'
                color='primary'
                onClick={() => navigate("/lezioni/" + lesson.id + "/partecipanti", { state: { lesson: lesson } })}>
                Iscritti
            </Button>

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
