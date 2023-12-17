import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, useTheme } from '@mui/material';

import LessonCardHeader from './LessonCardHeader';
import LessonCardContent from './LessonCardContent';
import LessonCardActions from './LessonCardActions';


const LessonCard = ({ lesson, deleteLesson }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Card variant="outlined"
            sx={{
                width: "92%", margin: "auto",
                boxShadow: theme.shadows.primary.main,
                background: "#fcfafa",
            }} >

            <CardContent sx={{ p: 0 }}
                onClick={() => navigate("/lezioni/" + lesson.id)}
            >
                <LessonCardHeader lesson={lesson} />
                <LessonCardContent lesson={lesson} />
            </CardContent>

            <LessonCardActions lesson={lesson} />

        </Card>
    );
};

export default LessonCard;
