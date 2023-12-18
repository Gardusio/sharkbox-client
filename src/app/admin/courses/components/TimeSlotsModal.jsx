import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Box,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TimeSlotsModal = ({ slots, onSave, onRemove, onClose, selectedDay }) => {
    const [start, setStart] = useState('10:00');
    const [end, setEnd] = useState('11:00');

    const handleAddSlot = () => {
        if (start && end) {
            onSave([...slots, { start, end }]);
            setStart('');
            setEnd('');
        }
    };

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
                height: "100vh",
                p: 3,
                m: 0
            }}
        >

            <Box
                display={'flex'} flexDirection={'column'} gap={'20px'} p={2}
                borderRadius={'10px'}
                boxShadow={"rgba(0, 0, 0, 0.20) 0px 1px 4px;"}
                bgcolor={"#fffee"}
            >
                <Typography textAlign={'center'} fontWeight={'bold'} mb={1}>Crea lezione</Typography>
                <Box
                    display={'flex'} alignItems={"center"} justifyContent={"space-between"}>
                    <TextField
                        sx={{ width: "45%" }}
                        label="Ora inizio"
                        type="time"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ step: 300 }}
                    />
                    <TextField
                        label="Ora fine"
                        sx={{ width: "45%" }}
                        type="time"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ step: 300 }}
                    />
                </Box>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={1}>
                    <AddIcon
                        sx={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "4px",
                            padding: 1,
                            margin: "auto",
                            boxShadow: "0 3px 6px rgba(0,0,0,0.20)",
                            color: "#fff", backgroundColor: "#6DA34D"
                        }}
                        onClick={handleAddSlot}>
                    </AddIcon>

                </Box>
            </Box>

            <Typography sx={{ p: 0, mt: 6 }} fontWeight={'bold'}>Lista lezioni </Typography>
            <List>
                {slots.length > 0 ? slots.map((slot, index) => (
                    <ListItem
                        divider
                        sx={{ p: 2 }}
                        key={index}
                        disableGutters
                        secondaryAction={
                            <Button
                                sx={{ fontWeight: "medium", color: "#942911" }}
                                variant="text"
                                onClick={() => onRemove(index)}>Elimina</Button>
                        }
                    >
                        <ListItemText primary={`${selectedDay} ${slot.start} - ${slot.end}`} />
                    </ListItem>
                )) : <Typography textAlign={'center'} color={"rgba(0,0,0,0.3)"}>Ancora nessuna lezione</Typography>}

            </List>

            <Button variant="contained" onClick={onClose} sx={{ mt: 2, bgcolor: "#6DA34D" }}>
                SALVA
            </Button>
        </Box >
    );
};

export default TimeSlotsModal;
