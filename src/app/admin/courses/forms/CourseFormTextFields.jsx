
import React from 'react';
import { Box, TextField, } from '@mui/material';

const CourseFormTextFields = ({ nome, anticipo_disdetta, anticipo_prenotazione, max_partecipanti, onChange, showNome }) => {

    return (
        <div style={{ width: "100%" }}>

            {showNome ? <TextField
                label="Nome"
                fullWidth
                placeholder='Ad es. Crossfit'
                type="text"
                variant="outlined"
                margin='normal'
                name="nome"
                InputLabelProps={{ shrink: true }}
                value={nome}
                onChange={onChange}
            /> : null}

            <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                <TextField
                    sx={{ width: "45%" }}
                    label="Disdetta"
                    helperText="Minuti prima"
                    InputLabelProps={{ shrink: true, }}
                    placeholder='Default 30 (minuti)'
                    type="number"
                    margin="normal"
                    variant="outlined"
                    name="anticipo_disdetta"
                    value={anticipo_disdetta}
                    onChange={onChange}
                />
                <TextField
                    sx={{ width: "45%" }}
                    label="Prenotazione"
                    type="number"
                    helperText="Ore prima"
                    InputLabelProps={{ shrink: true }}
                    placeholder='Ad es. 48 (ore)'
                    margin="normal"
                    variant="outlined"
                    name="anticipo_prenotazione"
                    value={anticipo_prenotazione}
                    onChange={onChange}
                />
            </Box>
            <TextField
                label="Max Partecipanti"
                type="number"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder='Ad es. 12'
                margin="normal"
                variant="outlined"
                name="max_partecipanti"
                value={max_partecipanti}
                onChange={onChange}
            />
        </div>
    );
};

export default CourseFormTextFields;
