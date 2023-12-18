import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, CardActions, useTheme
} from '@mui/material';



const LessonCardActions = ({ lesson, deleteLesson }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <CardActions
            sx={{
                ...theme.containers.row.centerbetween,
                px: 2,
                py: 3
            }}>

            <Button
                variant='contained'
                color='primary'
                onClick={() => navigate("/lezioni/" + lesson.id + "/partecipanti", { state: { lesson: lesson } })}>
                Iscritti
            </Button>

            <Button variant='text'
                sx={{ color: "#7a7a7a" }}
                onClick={async () => await deleteLesson(lesson.id)}>
                Elimina
            </Button>

        </CardActions>

    );
};

export default LessonCardActions;
