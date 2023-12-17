
import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box, TextField } from '@mui/material';
import CourseFormTextFields from '../../courses/CourseFormTextFields';
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers';
import { getAll } from '../../../../api/courses.api';
import CoursesListSelect from '../components/CoursesListSelect';

const CreateLessonForm = ({ onSave }) => {
    const [error, setError] = useState();
    const [courses, setCourses] = useState([]);
    const [formData, setFormData] = useState(
        {
            course_id: '',
            anticipo_disdetta: '30',
            anticipo_prenotazione: '48',
            max_partecipanti: '20',
            date: dayjs(),
            start: '',
            end: ''
        }
    );

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

    const handleCourseChange = (course) => {
        setFormData((prevData) => ({
            ...prevData,
            course_id: course.id,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                date: date.toString()
            }
        });
    };


    return (
        <Container component="main">
            {/* Lesson Form */}
            <Box style={{ display: 'flex', flexDirection: 'column', gap: "24px" }}>

                <CoursesListSelect courses={courses} onSelect={handleCourseChange}></CoursesListSelect>
                <CourseFormTextFields
                    max_partecipanti={formData.max_partecipanti}
                    anticipo_disdetta={formData.anticipo_disdetta}
                    anticipo_prenotazione={formData.anticipo_prenotazione}
                    onChange={handleChange} />

                <Box
                    display={'flex'} alignItems={"center"} justifyContent={"space-between"}>
                    <TextField
                        sx={{ width: "45%" }}
                        label="Ora inizio"
                        type="time"
                        name="start"
                        value={formData.start}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ step: 300 }}
                    />
                    <TextField
                        label="Ora fine"
                        sx={{ width: "45%" }}
                        type="time"
                        name="end"
                        value={formData.end}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ step: 300 }}
                    />
                </Box>

                <Typography >Data lezione</Typography>
                <DatePicker
                    label="Scegli una data"
                    value={dayjs(formData.date)}
                    onChange={handleDateChange}
                />
                <Button variant="contained" sx={{ bgcolor: "#9BC53D", mt: 2 }} onClick={() => onSave(formData)}>
                    Salva
                </Button>
            </Box>
        </Container >
    );
};

export default CreateLessonForm;
