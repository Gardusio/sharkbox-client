import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, Button, Card, CardContent, CardActions, Box } from '@mui/material';
import { getAll, removeCourse } from '../../../../api/courses.api';
import dayjs from 'dayjs'
import CourseCard from '../components/CourseCard';

const CourseListPage = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courses = await getAll();

                setCourses(courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError("Qualcosa è andato storto, riprova più tardi");
            }
        };

        fetchCourses();
    }, []);

    const deleteCourse = async (course) => {
        try {
            await removeCourse(course.id)
            setCourses((prevData) => prevData.filter(c => c.id != course.id))
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Impossibile eliminare il corso, riprova più tardi")
        }
    }

    return (

        <Container component="main" maxWidth="xs" sx={{ p: 0 }}>

            {error && <Typography color="error" textAlign={'center'} mt={2}>{error}</Typography>}

            {
                courses.length > 0 ? (
                    <List
                        sx={{
                            mt: 1,
                            px: 2,
                            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
                        }}>
                        {courses.map((course) => (
                            <ListItem divider key={course.id} disablePadding sx={{ mt: 2 }}>
                                <CourseCard course={course} deleteCourse={deleteCourse} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography mt={4} textAlign="center" variant="body1">Vedrai i corsi qui</Typography>
                )
            }
        </Container >
    );
};

export default CourseListPage;
