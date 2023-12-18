import React, { useState } from 'react';
import CourseForm from '../forms/CourseForm.jsx';
import { useNavigate } from 'react-router';
import { updateCourse } from '../../../../api/courses.api.js';
import { Typography } from '@mui/material';


const EditCoursePage = ({ course, updateCourseState }) => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    // HANDLE EDIT
    const handleEditCourse = async (formData) => {
        try {
            if (!formData.nome) {
                setError("Il nome è obbligatorio");
                return
            }
            const updated = await updateCourse(formData);
            updateCourseState(updated)
            setError(null)
            navigate('/corsi/');
        } catch (error) {
            console.log(error)
            setError('Non è stato possibile creare il corso.');
        }
    };


    return (
        <React.Fragment>
            {error && <Typography color="error" textAlign={'center'} mt={2} px={2}>{error}</Typography>}
            <CourseForm
                showNome
                course={course}
                title={course.nome}
                onSave={handleEditCourse}
            />
        </React.Fragment>
    );
};

export default EditCoursePage;
