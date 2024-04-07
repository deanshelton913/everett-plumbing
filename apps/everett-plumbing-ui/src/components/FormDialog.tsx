"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GetHelpForm } from './GetHelpForm';
import Email from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import { BUSINESS } from '@/globals';
import { sendCustomerOutreachData } from '@/app/rest-client';

export default function FormDialog({inline}:{inline:boolean}) {
  const [open, setOpen] = React.useState(false);
  const [dataToSend, setDataToSend] = React.useState({business: BUSINESS});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (data:any) => {
    setDataToSend({
      ...dataToSend,
      ...data
    })
  };

  return (
    <React.Fragment>
      <div style={!inline ? { position: 'fixed', top: '10%', right: '0', zIndex: 1000 }:{}}>

        <Button variant="contained" color='secondary' onClick={handleClickOpen} startIcon={<Email />}
          sx={!inline ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }:{}}
        >
          Contact us
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          sx:{maxWidth:400},
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            sendCustomerOutreachData(dataToSend).then(console.log).catch(console.error)
            handleClose();
          },
        }}
      >
        <DialogTitle>Get Help NOW!</DialogTitle>
        <DialogContent>
          <DialogContentText>
          After submitting the form, 
          we will contact you via phone, email,
           or text about service details. 
          </DialogContentText>
          <GetHelpForm onChange={onChange} />
          <Typography component={'div'} sx={{mt:2}} variant='caption'>
          
           You can opt out anytime. 
           This form consent is not a condition of purchase. 
          Message/data rates may apply.
            </Typography>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Send</Button>
        </DialogActions>
        
      </Dialog>
    </React.Fragment>
  );
}