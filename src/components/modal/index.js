import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { addItems, validationError } from '../../actions';
import NativeSelectDemo from './select';
import RowRadioButtonsGroup from './radio';

export default function FormDialog({ result, flag }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [errorData, setErrorData] = useState({
    'error_name': '',
    'error_legal': '',
    'error_subject': ''
  });

  const [data, setData] = useState({
    'file_name': '',
    'legal': '',
    'subject': 'Yes'
  });

  useEffect(() => {
    setOpen(flag);
  }, [flag]);

  const handleSubmit = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const validationForm = () => {
    let isValid = true;
    let errors = { ...errorData };

    if (data.file_name === '') {
      isValid = false;
      errors.error_name = 'require the value';
    }
    if (data.legal === '') {
      isValid = false;
      errors.error_legal = 'require the value';
    }
    if (data.subject === '') {
      isValid = false;
      errors.error_subject = 'require the value';
    }

    setErrorData(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    if (validationForm()) {
      dispatch(addItems(data));
    } else {
      dispatch(validationError(errorData));
    }
    console.log(errorData);
  }

  const handleClose = () => {
    setOpen(false);
    result(false)
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>FinancialCard</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>

            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
            <TextField
              onChange={handleSubmit}
              value={data.file_name}
              name="file_name"
              autoFocus
              margin="dense"
              id="name"
              label="File Name"
              type="text"
              fullWidth
              variant="standard"
            />
            {errorData.error_name && (
              <span>{errorData.error_name}</span>
            )}
            <NativeSelectDemo 
              onChange={handleSubmit}
              value={data.legal}
              name="legal"
              error={errorData.error_legal}
            />
            <RowRadioButtonsGroup
              handleChange={handleSubmit}
            />
            {/* {errorData.error_legal && errorData.error_legal} */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={onSubmit}>Subscribe</Button>
          </DialogActions>
        </form>

      </Dialog>
    </div>
  );
}
