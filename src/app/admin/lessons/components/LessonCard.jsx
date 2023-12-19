import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, useTheme } from '@mui/material';

import LessonCardHeader from './LessonCardHeader';
import LessonCardContent from './LessonCardContent';
import LessonCardActions from './LessonCardActions';
import { UserContext } from '../../../context/UserProvider';

const LessonCard = ({ lesson, deleteLesson, joinLesson }) => {

    const { user } = useContext(UserContext);
    const theme = useTheme();
    const navigate = useNavigate();

    const isAdmin = (user) => user.role === "ADMIN"

    const handleCardClick = () => {
        if (isAdmin(user)) {
            return navigate("/lezioni/" + lesson.id)
        }
        else {
            return navigate(`/lezioni/${lesson.id}/partecipa/${user.id}`)
        }
    }

    return (
        <Card variant="outlined"
            sx={{
                width: "92%", margin: "auto",
                boxShadow: theme.containers.shadows.primary.main,
                background: "#fcfafa",
            }} >

            <CardContent sx={{ p: 0 }}
                onClick={handleCardClick}
            >
                <LessonCardHeader lesson={lesson} />
                <LessonCardContent lesson={lesson} />
            </CardContent>

            <LessonCardActions
                lesson={lesson}
                deleteLesson={deleteLesson}
                joinLesson={joinLesson}
                isAdmin={user && user.role === "ADMIN"}
            />

        </Card>
    );
};

export default LessonCard;
