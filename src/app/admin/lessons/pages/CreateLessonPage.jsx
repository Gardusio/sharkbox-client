import React, { useState } from 'react';
import { createLesson } from '../../../../api/lessons.api.js';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import CreateLessonForm from '../forms/CreateLessonForm.jsx';

const CreateLessonPage = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleCreateLesson = async (formData) => {
        try {
            if (!formData.course_id) {
                setError('Scegli un corso per creare la lezione');
                return
            }

            await createLesson({
                ...formData,
                type: "SINGLE"
            });

            setError(null)

            navigate('/');
        } catch (error) {
            console.log(error)
            setError('Non è stato possibile creare la lezione.');
        }
    };


    return (
        <React.Fragment>
            {error && <Typography color="error" textAlign={'center'} my={2} mx={2}>{error}</Typography>}
            <CreateLessonForm
                title="Crea Lezione"
                onSave={handleCreateLesson}
            />
        </React.Fragment>
    );
};

export default CreateLessonPage;
