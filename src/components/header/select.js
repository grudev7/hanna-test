import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <NativeSelect sx={{ color: 'white' }}>
          <option value={10}>En</option>
          <option value={20}>Ger</option>
          <option value={30}>Ch</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
