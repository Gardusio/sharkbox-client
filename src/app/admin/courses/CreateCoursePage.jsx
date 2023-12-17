import React, { useState } from 'react';
import { createCourse } from '../../../api/courses.api.js';
import CourseForm from './CourseForm.jsx';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const CreateCoursePage = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleCreateCourse = async (formData) => {
        try {
            if (!formData.nome) {
                setError('Inserisci un nome per creare un corso');
                return
            }

            await createCourse(formData);
            setError(null)

            navigate('/corsi/');
        } catch (error) {
            console.log(error)
            setError('Non è stato possibile creare il corso.');
        }
    };


    return (
        <React.Fragment>
            {error && <Typography color="error" textAlign={'center'} mt={2}>{error}</Typography>}
            <CourseForm
                onSave={handleCreateCourse}
            />
        </React.Fragment>
    );
};

export default CreateCoursePage;
