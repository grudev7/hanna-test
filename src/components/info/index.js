import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import Title from './title';
import Landing from './landng';

const useStyles = makeStyles({
  newButton: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default function UserType() {

  const classes = useStyles();

  return (
    <>
      <Box display='flex' justifyContent={'space-between'}>
        <Title />
        <div className={classes.newButton}>
          <Button variant="contained" endIcon={<AddIcon />}>
            New plan
          </Button>
        </div>
      </Box>
      <Landing />
    </>
  );
}
