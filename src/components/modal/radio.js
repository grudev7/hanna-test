import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({handleChange}) {
  return (
    <FormControl sx={{marginTop: '20px'}}>
      <FormLabel id="subject-label">Subject</FormLabel>
      <RadioGroup
        row
        aria-labelledby="subject-label"
        name="subject"
        defaultValue="Yes"
        onChange={handleChange}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
