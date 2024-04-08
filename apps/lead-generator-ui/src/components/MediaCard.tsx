"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getSihImageRequestUrl } from '@/utils';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hidden } from '@mui/material';

export default function MediaCard({ imageKey, title, text }: { imageKey: string; title: string; text: string }) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const getImageHeight = () => {
    if (isMd) return 200; // 200px height for md
    return 300; // 300px height for md and above
  };

  const getImageWidth = () => {
    if (isMd) return 395; // 200px height for md
    return 268; // 300px height for md and above
  };

  return (
    <Card>
      <Hidden smDown>
        <CardMedia
          sx={{ height: getImageHeight() }}

          image={getSihImageRequestUrl({
            src: imageKey,
            width: getImageWidth(),
            height: getImageHeight(),
            quality: 1,
          })}
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
