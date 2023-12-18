
import React, { useState } from 'react';
import { Button, Container, Typography, Box, TextField } from '@mui/material';
import CourseFormTextFields from '../../courses/forms/CourseFormTextFields';


const LessonForm = ({ lesson, onSave }) => {
    const [formData, setFormData] = useState(
        lesson ? lesson : {
            nome: '',
            anticipo_disdetta: '30',
            anticipo_prenotazione: '48',
            max_partecipanti: '20',
            start: '',
            end: ''
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <Container component="main">

            <Typography variant="h5" color={"#2F2F2F"} textAlign={'center'} fontWeight={"bold"}>{lesson.nome}</Typography>
            <Typography variant="subtitle1" textAlign={'center'} color={"#2F2F2F"} fontWeight={"bold"}>{lesson.date}</Typography>


            {/* Course Form */}
            <Box style={{ display: 'flex', flexDirection: 'column', marginTop: "12px", gap: "16px" }}>

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
                <Button variant="contained" sx={{ bgcolor: "#9BC53D", mt: 2 }} onClick={() => onSave(formData)}>
                    Salva
                </Button>
            </Box>
        </Container >
    );
};

export default LessonForm;
