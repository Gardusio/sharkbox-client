import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, Button, Card, CardContent, CardActions, Box } from '@mui/material';
import { getAll, removeCourse } from '../../../api/courses.api';
import dayjs from 'dayjs'

const CourseListPage = () => {
    const navigate = useNavigate()
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
            console.log("remove")
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
                            <ListItem key={course.id} disablePadding>

                                <Card variant="outlined" sx={{ width: "100%", mb: 4, mt: 4, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;", borderRadius: "4px" }} >

                                    <CardContent sx={{ p: 0 }} onClick={() => navigate(`/corsi/modifica/${course.id}`)}>
                                        <Box
                                            display={"flex"} alignItems={"center"} justifyContent={"space-between"} width={"100%"} height={"52px"}
                                            bgcolor={"#6DA34D"} color={"#fff"}>
                                            <Typography variant="h6" component="div" width={"100%"} px={3} py={2}>
                                                {course.nome}
                                            </Typography>
                                        </Box>
                                        <List variant="body2" py={3} px={3} color={"#2f2f2f"}>
                                            <ListItem divider py={2}> <Typography><b>Max partecipanti: </b>{course.max_partecipanti} persone </Typography></ListItem>
                                            <ListItem divider py={2} > <Typography ><b>Disdetta: </b>{course.anticipo_disdetta} minuti prima </Typography></ListItem>
                                            <ListItem divider py={2}> <Typography ><b>Prenotazione: </b>{course.anticipo_prenotazione} ore prima </Typography></ListItem>
                                            <ListItem divider py={2}> <Typography ><b>Lezioni fino al: </b>{dayjs(course.slots_end_date).format("DD/MM")} </Typography></ListItem>
                                        </List>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', alignItems: "center", justifyContent: "flex-end", px: 3, py: 2 }}>
                                        <Button size='small' variant="text" style={{ textDecoration: 'none', color: '#942911' }}
                                            onClick={async () => await deleteCourse(course)}>
                                            Elimina
                                        </Button>

                                    </CardActions>
                                </Card>


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
