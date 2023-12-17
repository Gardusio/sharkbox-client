import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { getById } from '../../../api/courses.api';
import LoadingSpinner from '../../common/layouts/LoadingSpinner';
import EditCoursePage from './EditCoursePage';

const CoursePage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseById = async () => {
            try {
                const course = await getById(id);

                setCourse(course);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        // Call the API function when the component mounts
        fetchCourseById();
    }, [id]);

    return (
        <Container component="main" maxWidth="xs" sx={{ p: 1, marginBottom: "100px" }}>
            {course ? (
                <EditCoursePage course={course} updateCourseState={setCourse} />
            ) :
                <LoadingSpinner />
            }
        </Container>
    );
};

export default CoursePage;
