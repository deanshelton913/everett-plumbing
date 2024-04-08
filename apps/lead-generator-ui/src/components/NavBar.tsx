"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeRepairService from '@mui/icons-material/HomeRepairService';
import FormatQuote from '@mui/icons-material/FormatQuote';

import theme from '@/theme';
import { BUSINESS_SPECIFIC_DATA } from '@/globals';
import { formatPhoneNumber } from '@/utils';

function ResponsiveAppBar({ business }: { business: keyof typeof BUSINESS_SPECIFIC_DATA }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);



  const pages = [formatPhoneNumber(BUSINESS_SPECIFIC_DATA[business].phone), 'Services', 'Testimonials'];
  const href = [`tel:${BUSINESS_SPECIFIC_DATA[business].phone}`, `/#services`, `/#testimonials`];
  const icons = [<PhoneIcon sx={{ height: 20, mr: 1 }} />, <HomeRepairService sx={{ height: 20, mr: 1 }} />, <FormatQuote sx={{ height: 20, mr: 1 }} />];
  const colors = [{ backgroundColor: theme.palette.success.main }, {}, {}]

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            color='inherit'
            component="div"
            mr={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {BUSINESS_SPECIFIC_DATA[business].name.toUpperCase()}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pages.map((page, i) => (
                <MenuItem
                  key={page} onClick={handleCloseNavMenu} style={{
                    display: 'flex', textAlign: 'center', ...colors[i]
                  }}>
                  {icons[i] && icons[i]} {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="div"
            mr={2}
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <a
              aria-label='Company Name'
              href="/"
              style={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '0.1rem',
                color: 'inherit',
                textDecoration: 'none'
              }}>{BUSINESS_SPECIFIC_DATA[business].name}</a>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={href[i] ? (href[i] as string) : ''}
                sx={{
                  ...colors[i],
                  my: 2,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {icons[i] && icons[i]}
                  <div>{page}</div>
                </div>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
