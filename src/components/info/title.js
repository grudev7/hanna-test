import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  typeStyle: {
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center'
  },
  userType: {
    fontSize: '30px',
    color: 'grey'
  },
  test: {
    marginLeft: '5px',
    fontSize: '30px',
    color: 'dark',
    fontWeight: '600'
  }
});

export default function Title() {

  const classes = useStyles();

  return (
    <>
    <Box display={'flex'} alignItems={'center'}>
      <ArrowBackIosIcon />
      <div className={classes.typeStyle}>
        <p className={classes.userType}>Client: </p>
        <p className={classes.test}>ABI testing</p>
      </div>
    </Box>
    </>
  );
}
