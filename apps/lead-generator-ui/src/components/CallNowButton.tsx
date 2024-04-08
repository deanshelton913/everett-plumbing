import { BUSINESS_SPECIFIC_DATA } from "@/globals";
import { Button } from "@mui/material";
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';

export const CallNowButton: React.FC<any> = ({ business, ...props }: { business: keyof typeof BUSINESS_SPECIFIC_DATA, sx:any }) => (
  <Button
    sx={{
      backgroundColor: '#66bb6a',
      my: 2,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      ...(props?.sx && props.sx)
    }}
    href={`tel:${BUSINESS_SPECIFIC_DATA[business].phone}`}
  >

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PhoneIcon sx={{ mr: 1 }} />
      <div>
        Call now!
      </div>
    </div>
  </Button>
)