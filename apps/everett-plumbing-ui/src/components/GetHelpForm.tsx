"use client"
import ReCAPTCHA from "react-google-recaptcha";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Paper } from '@mui/material';
import { MinHeightTextarea } from './TextAreaAutoSize';



export function GetHelpForm() {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    description: '',
    captchaResponse: ''
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {
      ...values,
      [event.target.name]: event.target.value,
    }
    setValues(newValues);
  };

  return (
    <Box>
      <Paper elevation={4} sx={{ p: 2, mt: 2 }} >
        <Stack direction="row" spacing={2}>
          <FormControl variant="standard">
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <Input
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
              id="firstName"
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input
              value={values.lastName}
              onChange={handleChange}
              name="lastName"
              id="lastName"
            />
          </FormControl>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
            <Input
              value={values.phoneNumber}
              onChange={handleChange}
              type='phone'
              name="phoneNumber"
              id="phoneNumber"
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="emailAddress">Email Address</InputLabel>
            <Input
              value={values.emailAddress}
              onChange={handleChange}
              name="emailAddress"
              id="emailAddress"
            />
          </FormControl>
        </Stack>
        <FormControl variant="standard" sx={{ mt: 2, width: '100%' }}>
          <MinHeightTextarea
            value={values.description}
            onChange={handleChange}
            name="description"
            id="description"
          />
        </FormControl>

      </Paper>
      <Box mt={2} pr={0}>
        <ReCAPTCHA
          sitekey="6LewGbMpAAAAAKCTIQGZ2aB3rJnM3eKH-9KqgIPG"
          onChange={(data: any) => {
            handleChange({ target: { name: 'captchaResponse', value: data } } as any)
          }}
        />
      </Box>
    </Box>
  );
}