import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getSihImageRequestUrl } from '@/utils';
import { Hidden } from '@mui/material';

export default function MediaCard({imageKey, title, text}:{imageKey: string, title:string, text: string}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={getSihImageRequestUrl({
            src: imageKey,
            width: 345,
            quality: 1
          })}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Hidden smDown>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>

        </Hidden>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}