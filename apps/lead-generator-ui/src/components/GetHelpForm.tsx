"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Paper } from '@mui/material';
import { MinHeightTextarea } from './TextAreaAutoSize';
import ReCAPTCHA from 'react-google-recaptcha';



export function GetHelpForm({onChange, errorMap}:{onChange: any, errorMap: {[key:string]:string[]}}) {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    description: '',
    'g-recaptcha-response': ''
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {
      ...values,
      [event.target.name]: event.target.value,
    }
    setValues(newValues);
  };
  React.useEffect(() => {

    onChange(values)

  },[values])

  return (
    <Box>
      <Paper elevation={4} sx={{ p: 2, mt: 2 }} >
        <Stack direction="row" spacing={2}>
          <FormControl variant="standard" error={!!errorMap.firstName}>
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <Input
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
              id="firstName"
            />
          </FormControl>
          <FormControl variant="standard" error={!!errorMap.lastName}>
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
          <FormControl variant="standard" error={!!errorMap.phoneNumber}>
            <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
            <Input
              value={values.phoneNumber}
              onChange={handleChange}
              type='phone'
              name="phoneNumber"
              id="phoneNumber"
            />
          </FormControl>
          <FormControl variant="standard" error={!!errorMap.emailAddress}>
            <InputLabel htmlFor="emailAddress">Email Address</InputLabel>
            <Input
              value={values.emailAddress}
              onChange={handleChange}
              name="emailAddress"
              id="emailAddress"
            />
          </FormControl>
        </Stack>
        <FormControl variant="standard" sx={{ mt: 2, width: '100%' }} error={!!errorMap.description}>
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
            handleChange({ target: { name: 'g-recaptcha-response', value: data } } as any)
          }}/>
      </Box>
    </Box>
  );
}