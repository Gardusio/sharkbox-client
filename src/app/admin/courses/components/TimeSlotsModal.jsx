import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Box,
    List,
    ListItem,
    ListItemText,
    useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TimeSlotsModal = ({ slots, onSave, onRemove, onClose, selectedDay }) => {
    const theme = useTheme();

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
            sx={{ p: 3 }}
        >

            <Box sx={{
                ...theme.containers.borders.highlighted
            }}
                display={'flex'} flexDirection={'column'} gap={'20px'} p={2}

                boxShadow={theme.containers.shadows.primary.highlighted}
                bgcolor={"#fcfafa"}
            >
                <Typography variant="h6" textAlign={'center'} fontWeight={'bold'} mb={1}>Crea lezione</Typography>
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
                            borderRadius: "8px",
                            padding: 1,
                            margin: "auto",
                            boxShadow: theme.containers.shadows.primary.main,
                            color: "#fff",
                            backgroundColor: theme.palette.primary.main
                        }}
                        onClick={handleAddSlot}>
                    </AddIcon>

                </Box>
            </Box>

            <Typography sx={{ p: 0, mt: 6 }} fontWeight={'bold'} variant="h6">Lista lezioni </Typography>
            <List sx={{ mb: 4 }}>
                {slots.length > 0 ? slots.map((slot, index) => (
                    <ListItem
                        divider
                        sx={{ p: 2 }}
                        key={index}
                        disableGutters
                        secondaryAction={
                            <Button
                                variant="text"
                                color='warning'
                                onClick={() => onRemove(index)}>Elimina</Button>
                        }
                    >
                        <ListItemText primary={`${selectedDay} ${slot.start} - ${slot.end}`} />
                    </ListItem>
                )) : <Typography mt={2} textAlign={'center'} color={"rgba(0,0,0,0.3)"}>Ancora nessuna lezione</Typography>}

            </List>

            <Button sx={{ mt: 2, color: "#fff" }}
                variant="contained" onClick={onClose} >
                SALVA
            </Button>
        </Box >
    );
};

export default TimeSlotsModal;
