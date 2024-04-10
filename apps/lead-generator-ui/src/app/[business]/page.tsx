import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';
import ResponsiveAppBar from '@/components/NavBar';
import { getSihImageRequestUrl } from '@/utils';
import { Metadata, ResolvingMetadata } from 'next';
import { LargeCTA } from '@/components/LargeCTA';
import { Testimonials } from '@/components/Testimonials';
import { Services } from '@/components/Services';
import { Hero } from '@/components/Hero';
import { Hidden } from '@mui/material';
import FormDialog from '@/components/FormDialog';
import { BUSINESS_SPECIFIC_DATA } from '@/globals';


const addJsonLd = (business: keyof typeof BUSINESS_SPECIFIC_DATA) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": BUSINESS_SPECIFIC_DATA[business].businessType,
    "name": BUSINESS_SPECIFIC_DATA[business].name,
    "logo": `${getSihImageRequestUrl({ width: 350, quality: 75, src: '/logo.webp' })}`,
    "description": BUSINESS_SPECIFIC_DATA[business].description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_SPECIFIC_DATA[business].streetAddress,
      "addressLocality": BUSINESS_SPECIFIC_DATA[business].addressLocality,
      "addressRegion": BUSINESS_SPECIFIC_DATA[business].addressRegion,
      "postalCode": BUSINESS_SPECIFIC_DATA[business].postalCode,
      "addressCountry": BUSINESS_SPECIFIC_DATA[business].addressCountry
    },
    "telephone": BUSINESS_SPECIFIC_DATA[business].phone,
    "openingHours": "Mo, Tu, We, Th, Fr 08:00-17:00",
    "image": `${getSihImageRequestUrl({ width: 350, quality: 75, src: '/logo.webp' })}`,
    "priceRange": "$",
    "url": BUSINESS_SPECIFIC_DATA[business].url
  };

  return JSON.stringify(jsonLd)
};
interface Props {
  params: {
    business: keyof typeof BUSINESS_SPECIFIC_DATA,
    slug: typeof BUSINESS_SPECIFIC_DATA['everett-plumbers']['services'][0]['slug'],
  },
  searchParams: { [key: string]: string | string[] | undefined }
}



export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const business = BUSINESS_SPECIFIC_DATA[params.business];
  const title = `${business.name} | ${business.slogan}`
  const metadata: Metadata = {
    title,
    description: business.description,
    keywords: business.keywords,
    openGraph: {
      type: "website",
      url: business.url,
      title,
      description: business.description,
      siteName: business.name,
      images: [{
        url: `${business.url}/images/${business}/logo.webp`,
      }],
    }
  }
  return metadata
}


export default function Home({ params }: Props) {

  return (
    <div>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: addJsonLd(params.business) }}
        />
      </section>
      <Container maxWidth="lg">
        <ResponsiveAppBar business={params.business} />
        <Hidden mdUp>
          <LargeCTA business={params.business} />
        </Hidden>
        <Services business={params.business} />
        <Hidden mdDown>

          <FormDialog inline={false} business={params.business} />
        </Hidden>
        <Hero business={params.business} />
        <Testimonials business={params.business} />


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
            {BUSINESS_SPECIFIC_DATA[params.business].slogan}
          </Typography>
          <Copyright business={params.business} />
        </Box>
      </Container>
    </div>
  );
}
