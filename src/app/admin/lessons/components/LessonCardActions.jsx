import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, CardActions, useTheme
} from '@mui/material';
import AdminActionButtons from './AdminActionButtons';



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

            <AdminActionButtons lesson={lesson} deleteLesson={deleteLesson} />
        </CardActions>

    );
};

export default LessonCardActions;
