import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { getById } from '../../../../api/lessons.api';
import LoadingSpinner from '../../../common/layouts/LoadingSpinner';
import EditLessonPage from './EditLessonPage';

const LessonPage = () => {
    const { id } = useParams();
    const [lesson, setLesson] = useState(null);

    useEffect(() => {
        const fetchLessonById = async () => {
            try {
                const lesson = await getById(id);

                setLesson(lesson);
            } catch (error) {
                console.error('Error fetching lesson:', error);
            }
        };

        fetchLessonById();
    }, [id]);

    return (
        <Container component="main" maxWidth="xs" sx={{ p: 1 }}>
            {lesson ? (
                <EditLessonPage lesson={lesson} updateLessonState={setLesson} />
            ) :
                <LoadingSpinner />
            }
        </Container>
    );
};

export default LessonPage;




