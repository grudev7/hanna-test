import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

export default function NativeSelectDemo({onChange, value, error}) {
  return (
    <Box sx={{ minWidth: 120, marginTop: '20px' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Legal
        </InputLabel>
        <Select
          defaultValue={30}
          onChange={onChange}
          name='legal'
          value={value}
        >
          <MenuItem value={'Company'}>Company</MenuItem>
          <MenuItem value={'Freelance'}>Freelance</MenuItem>
          <MenuItem value={'ASBL'}>ASBL</MenuItem>
        </Select>
      </FormControl>
      {error && (
        <span>{error}</span>
      )}
    </Box>
  );
}
