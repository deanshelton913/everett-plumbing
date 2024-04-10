"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hidden } from '@mui/material';

export default function MediaCard({ url, title, text, height }: { url: string; title: string; text: string, height: number }) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

 

  return (
    <Card>
      <Hidden smDown>
        <CardMedia
          sx={{ height }}
          image={url}
          title={title}
        />
      </Hidden>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'none' }}>
          {title}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Learn More</Button>
      </CardActions>
    </Card>
  );
}
