import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    padding: '10px',
    display: 'flex',
    backgroundColor: '#ebf6fb'
  },
  title: {
    fontSize: '20px',
    color: 'grey'
  },
  description: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'dark'
  },
  block: {
    display: 'block'
  },
  flex: {
    display: 'flex'
  }

});

export default function Landing() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box width={'30%'}>
        <div className={classes.flex}>
          <p className={classes.title}>Country:</p>
          <p className={classes.description}>Belgium</p>
        </div>
        <div>
          <p className={classes.title}>City:</p>
        </div>
      </Box>
      <Box width={'30%'}>
        <div className={classes.flex}>
          <p className={classes.title}>Contract Person:</p>
          <p className={classes.description}>Eline Gregoire</p>
        </div>
        <div className={classes.flex}>
          <p className={classes.title}>Email address:</p>
          <p className={classes.description}>eline@hanna-solution.com</p>
        </div>
        <div className={classes.flex}>
          <p className={classes.title}>Phone Number:</p>
          <p className={classes.description}>0494763876</p>
        </div>
      </Box>
      <Box width={'30%'}>
        <div className={classes.flex}>
          <p className={classes.title}>Secondary Contract Person:</p>
          <p className={classes.description}>Ann</p>
        </div>
        <div className={classes.flex}>
          <p className={classes.title}>Email address:</p>
          <p className={classes.description}></p>
        </div>
        <div className={classes.flex}>
          <p className={classes.title}>Phone Number:</p>
          <p className={classes.description}></p>
        </div>
      </Box>
    </div>
  );
}
