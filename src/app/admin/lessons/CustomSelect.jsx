import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [customValue, setCustomValue] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCustomInputChange = (event) => {
    setCustomValue(event.target.value);
    // Optionally, you can clear the selectedOption when custom value is entered
    setSelectedOption('');
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        input={<TextField label="Select or Enter Custom Value" />}
      >
        <MenuItem value="Ten">Ten</MenuItem>
        <MenuItem value="Twenty">Twenty</MenuItem>
        <MenuItem value="Fifteen">Fifteen</MenuItem>
      </Select>

      <TextField
        label="Or Enter Custom Value"
        value={customValue}
        onChange={handleCustomInputChange}
      />
    </div>
  );
};

export default CustomSelect;
