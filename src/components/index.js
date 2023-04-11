import React from 'react';
import ResponsiveAppBar from './header';
import { makeStyles } from '@mui/styles';

import UserType from './info';
import FinancialCards from './financial';

const useStyles = makeStyles({
  container: {
    paddingTop: '10px',
    paddingRight: '150px',
    paddingBottom: '10px',
    paddingLeft: '150px'
  }
})

const Container = ({ qty }) => {
  // const dispatch = useDispatch()

  // const finalcialData = useSelector(state => state.card.financialData);
  // console.log(finalcialData)

  // useEffect(() => {
  //   dispatch(loadItems())
  // }, [])

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ResponsiveAppBar />
      <UserType />
      <h3>Financial Card</h3>
      <hr />
      <FinancialCards />
    </div>
  )
}

export default Container;