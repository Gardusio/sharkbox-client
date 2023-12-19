
import React, { useState } from 'react';
import { Button, Container, Typography, Box, Dialog, DialogTitle, useTheme } from '@mui/material';
import TimeSlotsModal from '../components/TimeSlotsModal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CourseFormTextFields from './CourseFormTextFields';
import dayjs from 'dayjs'
import { deleteSlot } from '../../../../api/slots.api';


const CourseForm = ({ course, onSave }) => {
    const theme = useTheme();

    const [formData, setFormData] = useState(
        course ? course : {
            nome: '',
            anticipo_disdetta: '30',
            anticipo_prenotazione: '48',
            max_partecipanti: '20',
            slots: {},
            slots_end_date: dayjs().add(1, 'week').toString()
        }
    );

    const [selectedDay, setSelectedDay] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOpenModal = (day) => {
        setSelectedDay(day);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedDay(null);
        setModalOpen(false);
        console.log(formData)
    };

    const handleSaveSlots = (newSlots) => {
        setFormData((prevData) => ({
            ...prevData,
            slots: {
                ...prevData.slots,
                [selectedDay]: newSlots,
            },
        }));
    };

    const handleEndDateChange = (date) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                slots_end_date: date.toString()
            }
        });
    };

    const handleRemoveSlot = async (index) => {
        const updatedSlots = [...formData.slots[selectedDay]];
        const toRemove = updatedSlots[index]

        if (toRemove.id) {
            await deleteSlot(toRemove);
        }

        updatedSlots.splice(index, 1);
        setFormData((prevData) => ({
            ...prevData,
            slots: {
                ...prevData.slots,
                [selectedDay]: updatedSlots,
            },
        }));
    };

    const getDayButtonStyle = (day) => ({
        width: '50px',
        height: '50px',
        borderRadius: '4px',
        margin: '4px 16px',
        color: formData.slots[day] && formData.slots[day].length > 0 ? '#fff' : '#000',
        backgroundColor: formData.slots[day] && formData.slots[day].length > 0 ?
            theme.palette.secondary.main
            : '#fff',
    });

    const fullDayName = (day) => {
        const fullIdx = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'].indexOf(day)
        const fulls = ['Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato']
        return fulls[fullIdx]
    }

    return (
        <Container component="main" sx={{ px: 4 }}>
            {/* Course Form */}
            <Box style={{ display: 'flex', flexDirection: 'column', gap: "16px" }}>

                <CourseFormTextFields
                    showNome
                    nome={formData.nome}
                    max_partecipanti={formData.max_partecipanti}
                    anticipo_disdetta={formData.anticipo_disdetta}
                    anticipo_prenotazione={formData.anticipo_prenotazione}
                    onChange={handleChange} />


                <Typography mb={1} fontWeight={"500"}>Crea il palinsesto</Typography>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    {['Lun', 'Mar', 'Mer'].map((day) => (
                        <Button
                            key={day}
                            variant="contained"
                            style={getDayButtonStyle(day)}
                            onClick={() => handleOpenModal(day)}
                        >
                            {day}
                        </Button>
                    ))}
                </Box>
                <Box mb={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    {['Gio', 'Ven', 'Sab'].map((day) => (
                        <Button
                            key={day}
                            variant="contained"
                            style={getDayButtonStyle(day)}
                            onClick={() => handleOpenModal(day)}>
                            {day}
                        </Button>
                    ))}
                </Box>

                {/* End Date */}
                <Typography mb={1} fontWeight={"500"}>Ripeti fino al</Typography>
                <DatePicker
                    label="Scegli una data"
                    value={dayjs(formData.slots_end_date)}
                    onChange={handleEndDateChange}
                />

                <Dialog sx={{ p: 0 }} open={isModalOpen} fullScreen>
                    <DialogTitle
                        textAlign={'center'}
                        fontWeight={'bold'}
                        bgcolor={theme.palette.bg.main}
                        color={"#fff"}>Palinsesto per {fullDayName(selectedDay)}</DialogTitle>
                    <TimeSlotsModal
                        selectedDay={selectedDay}
                        slots={formData.slots[selectedDay] || []}
                        onSave={handleSaveSlots}
                        onRemove={handleRemoveSlot}
                        onClose={handleCloseModal}
                    />
                </Dialog>
                <Button
                    sx={{ color: "#fff" }}
                    variant="contained"
                    onClick={() => onSave(formData)}>
                    Salva
                </Button>
            </Box >
        </Container >
    );
};

export default CourseForm;
