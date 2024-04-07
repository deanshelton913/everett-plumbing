import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';
import ResponsiveAppBar from '@/components/NavBar';
import { getSihImageRequestUrl } from '@/utils';
import { Metadata } from 'next';
import { LargeCTA } from '@/components/LargeCTA';
import { Testimonials } from '@/components/Testimonials';
import { Services } from '@/components/Services';
import { Hero } from '@/components/Hero';
import { Hidden } from '@mui/material';
import FormDialog from '@/components/FormDialog';
import { BUSINESS, BUSINESS_SPECIFIC_DATA } from '@/globals';


const addJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": BUSINESS_SPECIFIC_DATA[BUSINESS].businessType,
    "name": BUSINESS_SPECIFIC_DATA[BUSINESS].name,
    "logo": `${getSihImageRequestUrl({ width: 350, quality: 100, src: '/logo.webp' })}`,
    "description": BUSINESS_SPECIFIC_DATA[BUSINESS].description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_SPECIFIC_DATA[BUSINESS].streetAddress,
      "addressLocality": BUSINESS_SPECIFIC_DATA[BUSINESS].addressLocality,
      "addressRegion": BUSINESS_SPECIFIC_DATA[BUSINESS].addressRegion,
      "postalCode": BUSINESS_SPECIFIC_DATA[BUSINESS].postalCode,
      "addressCountry": BUSINESS_SPECIFIC_DATA[BUSINESS].addressCountry
    },
    "telephone": BUSINESS_SPECIFIC_DATA[BUSINESS].phone,
    "openingHours": "Mo, Tu, We, Th, Fr 08:00-17:00",
    "image": `${getSihImageRequestUrl({ width: 350, quality: 100, src: '/logo.webp' })}`,
    "priceRange": "$",
    "url": BUSINESS_SPECIFIC_DATA[BUSINESS].url
  };

  return JSON.stringify(jsonLd)
};

export const metadata: Metadata = {
  title: BUSINESS_SPECIFIC_DATA[BUSINESS].name,
  description: BUSINESS_SPECIFIC_DATA[BUSINESS].description,
  keywords: BUSINESS_SPECIFIC_DATA[BUSINESS].keywords
}

export default function Home() {
  return (
    <div>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: addJsonLd() }}
        />
      </section>
      <Container maxWidth="lg">
        <ResponsiveAppBar />
        <Hidden mdUp>
          <LargeCTA />
        </Hidden>
        <Services />
        <Hidden mdDown>

        <FormDialog inline={false}/>
        </Hidden>
        <Hero />
        <Testimonials />


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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {BUSINESS_SPECIFIC_DATA[BUSINESS].slogan}
          </Typography>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
