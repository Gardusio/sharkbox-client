import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { updateLesson } from '../../../api/lessons.api.js';
import { Container, Typography } from '@mui/material';
import LessonForm from './EditLessonForm.jsx';


const EditLessonPage = ({ lesson, updateLessonState }) => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    // HANDLE EDIT
    const handleEditLesson = async (formData) => {
        try {
            const {
                anticipo_prenotazione, anticipo_disdetta, max_partecipanti,
                start, end } = formData

            const updated = await updateLesson({
                ...lesson,
                anticipo_prenotazione,
                anticipo_disdetta,
                max_partecipanti,
                start,
                end
            });
            updateLessonState(updated)
            setError(null)

            navigate('/');
        } catch (error) {
            console.log(error)
            setError('Non è stato possibile aggiornare la lezione');
        }
    };


    return (
        <Container sx={{ marginBottom: "120px", height: "100vh" }}>
            {error && <Typography color="error" textAlign={'center'} mt={2}>{error}</Typography>}
            <LessonForm
                lesson={lesson}
                onSave={handleEditLesson}
            />
        </Container>
    );
};

export default EditLessonPage;
