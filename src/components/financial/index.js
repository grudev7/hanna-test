import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import CreateCard from './createItem';
import FinancialCard from './Item';

export default function FinancialCards() {
  return (
    <Grid container spacing={10}>
      <FinancialCard />
      <CreateCard />
    </Grid>
  );
}
