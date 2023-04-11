import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from '../modal';
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%'
}));

export default function CreateCard() {

  const [modal, setModal] = useState(false);
  const handle = () => {
    setModal(true);
  }

  const result = (e) => {
    setModal(e);
  }

  return (
    <>
    {modal ? <FormDialog result = {result} flag={modal} /> : <FormDialog result = {result} flag={modal} />}
      <Grid  xs={12} md={6} lg={4} xl={3}  onClick={handle} >
        <Item  sx={{display:'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Box display={'flex'} justifyContent={'center'}>
            <AddIcon />
          </Box>
          <Box display={'flex'} justifyContent={'center'}>
            <Button size="small">Learn More</Button>
          </Box>
        </Item>
      </Grid>
    </>
  );
}
