import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { BUSINESS_SPECIFIC_DATA, BUSINESS } from '@/globals';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        {BUSINESS_SPECIFIC_DATA[BUSINESS].name}
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
