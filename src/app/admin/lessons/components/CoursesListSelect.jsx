
import * as React from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';


const CoursesListSelect = ({ courses, onSelect }) => {

    const [selected, setSelected] = React.useState('');

    const handleChange = (event) => {
        setSelected(event.target.value);
        onSelect(courses.find(c => c.nome === event.target.value));
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <Typography mb={2} ></Typography>
            <FormControl fullWidth>
                <InputLabel id="select-corso-label">Scegli il corso</InputLabel>
                <Select
                    labelId="select-corso-label"
                    id="select-corso"
                    value={selected}
                    label="Corso"
                    onChange={handleChange}
                >
                    {courses.map(course => <MenuItem key={course.id} value={course.nome}> {course.nome} </MenuItem>)}
                </Select>
            </FormControl>
        </Box >
    );
}

export default CoursesListSelect;
