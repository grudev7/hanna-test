import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
  
import { loadItems, deleteItem } from '../../actions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',

}));

const useStyles = makeStyles({
  itemWrap: {
    margin: '27px',
    width: '250px',
    paddingTop: '40px',
    paddingBottom: '40px'
  },
  itemIconWrap: {
    marginBottom: '0px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  itemDeleteIcon: {
    marginRight: '20px',
    marginLeft: '10px',
    fontSize: '18px',
    color: '#df253a'
  },
  itemCopyIcon: {
    color: '#1d4259',
    fontSize: '18px'
  },
  itemButton: {
    color: 'red',
    backgroundColor: 'red',
    width: '70%',
    variant: "outlined"
  },
  marginTopRemove: {
    marginTop: '0px',
    marginBottom: '0px'
  },
  alignLeft: {
    textAlign: 'left'
  },
  properPositin: {
    display: 'block',
    textAlign: 'initial'
  }

});

export default function FinancialCard() {
  const classes = useStyles();
  
  const dispatch = useDispatch()

  const finalcialDatas = useSelector(state => state.card.financialData);


  const deleteHandle = (id) => {
    dispatch(deleteItem(id));
  }

  useEffect(() => {
    dispatch(loadItems());
  }, [])

  return (
    <>
    {finalcialDatas.map((item) => (
        <Grid  xs={12} md={6} lg={4} xl={3} className={classes.gridItem}>
          <Item>
            <div className={classes.itemIconWrap}>
              <FolderCopyIcon className={classes.itemCopyIcon}/>
              <DeleteIcon className={classes.itemDeleteIcon} onClick={() => deleteHandle(item.id)}/>
            </div>

            <div className={classes.properPositin}>
              <p className={classes.marginTopRemove} >{item.file_name}</p>
              <p className={classes.alignLeft}>{item.legal}</p>
              <p className={classes.alignLeft}>Created 8 Sep</p>
              <Button className={classes.itemButton} variant="contained" color="warning">
                Follow up is active
              </Button>
            </div>
          </Item>
        </Grid>
      ))}
    </>
  )
}