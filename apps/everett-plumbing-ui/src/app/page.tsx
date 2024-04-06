import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import ResponsiveAppBar from '@/components/NavBar';
import { Badge, Button, Card, Grid, Paper } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableEdgeDrawer from '@/components/SwipableEdgeDrawer';
import Image from 'next/image';
import { getSihImageRequestUrl } from '@/utils';
import MediaCard from '@/components/MediaCard';
// import {get} form '@repo/sih-tools'




export default function Home() {
  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar />
      <Paper sx={{ p: 2, mt: 1 }} elevation={3}>
  <Grid container spacing={2}>
    <Grid item xs={10} sm={6} md={3}>
      <MediaCard
        title='Water Lines'
        imageKey='/fixing-water-line.webp'
        text="Our expert plumbers ensure your water lines are flawlessly installed and efficiently maintained, guaranteeing a steady flow of clean water for your household needs. From new installations to repairs, we've got you covered!"
      />
    </Grid>
    <Grid item xs={10} sm={6} md={3}>
      <MediaCard
        title='Drains'
        imageKey='/fixing-drain.webp'
        text="Say goodbye to clogged drains with our professional plumbing services. We tackle tough clogs swiftly and effectively, restoring your drains to optimal performance. Trust us to keep your pipes clear and your home running smoothly!"
      />
    </Grid>
    <Grid item xs={10} sm={6} md={3}>
      <MediaCard
        title='Sewer Repair'
        imageKey='/fixing-sewer.webp'
        text="Don't let sewer issues disrupt your daily routine. Our skilled team specializes in sewer repair, addressing problems promptly to prevent further damage. Count on us to restore your sewer system efficiently and effectively!"
      />
    </Grid>
    <Grid item xs={10} sm={6} md={3}>
      <MediaCard
        title='Leaks'
        imageKey='/fixing-sink.webp'
        text="Leaks can lead to costly damage if left unchecked. Our experienced plumbers quickly detect and repair leaks, saving you time, money, and hassle. Let us stop the drip and ensure your home stays dry and secure!"
      />
    </Grid>
  </Grid>
</Paper>


      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            // letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Plumbing Excellence, Guaranteed Satisfaction!
        </Typography>
        <Card
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image alt="Everett Plumber Team" src="/images/the-team.webp" width="450" height="300" />
        </Card>

        <Card
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image alt="Everett Plumber Team" src="/images/fixing-sink.webp" width="300" height="300" />
        </Card>


        <SwipeableEdgeDrawer />
        <a href="https://www.flaticon.com/free-icons/plumber" title="plumber icons">Plumber icons created by Smashicons - Flaticon</a>
        <Copyright />
      </Box>
    </Container>
  );
}
