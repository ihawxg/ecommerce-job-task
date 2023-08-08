import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [brand, setBrand] = React.useState('');

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  let brands = props.brands;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Brand</InputLabel>
        <Select
          value={brand}
          label="Brand"
          onChange={handleChange}
        >
            {brands.map(brand=> <MenuItem value={brand}>{brand}</MenuItem>)}
          
        </Select>
      </FormControl>
    </Box>
  );
}