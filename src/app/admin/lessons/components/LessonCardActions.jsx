import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, CardActions, useTheme
} from '@mui/material';



const LessonCardActions = ({ lesson }) => {
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
                partecipanti
            </Button>

            <Button variant='text'
                color="warning"
                onClick={async () => await deleteLesson(lesson.id)}>
                Elimina
            </Button>

        </CardActions>

    );
};

export default LessonCardActions;
