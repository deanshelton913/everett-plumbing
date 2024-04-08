import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { BUSINESS_SPECIFIC_DATA } from '@/globals';

export default function Copyright({business}:{business: keyof typeof BUSINESS_SPECIFIC_DATA}) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        {BUSINESS_SPECIFIC_DATA[business].name}
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
