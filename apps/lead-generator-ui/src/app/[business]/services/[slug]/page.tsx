import FormDialog from '@/components/FormDialog';
import { LargeCTA } from '@/components/LargeCTA';
import ResponsiveAppBar from '@/components/NavBar';
import { BUSINESS_SPECIFIC_DATA } from '@/globals';
import { getSihImageRequestUrl } from '@/utils';
import { Box, Container, Hidden, Paper, Typography } from '@mui/material';
import { Metadata, ResolvingMetadata } from 'next';
import * as React from 'react';
import crypto from 'crypto';
import Image from 'next/image';

interface Props {
  params: {
    business: keyof typeof BUSINESS_SPECIFIC_DATA,
    slug: typeof BUSINESS_SPECIFIC_DATA['everett-plumbers']['services'][0]['slug'],
  },
  searchParams: { [key: string]: string | string[] | undefined }
}
// This function gets called at build time
export async function generateStaticParams() {
  // Get the paths we want to pre-render based on posts
  let paths: {}[] = [];
  Object.keys(BUSINESS_SPECIFIC_DATA).forEach((business) => {
    BUSINESS_SPECIFIC_DATA[business as 'everett-plumbers'].services
      .forEach(service => {
        paths.push({ business, slug: service.slug, potato: true, props: service })
      })
  })
  return paths;
}


const addJsonLd = (business:keyof typeof BUSINESS_SPECIFIC_DATA) => {
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


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const business = BUSINESS_SPECIFIC_DATA[params.business];
  const service = business.services.find(x => x.slug === params.slug)
  if (!service) {
    console.warn('missing service', params.business, params.slug)
    return {}
  }
  const title = `${business.name} | ${service.title} | ${business.slogan}`;
  const metadata: Metadata = {
    title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      type: "website",
      url: `${business.url}/services/${service.slug}`,
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








function generateUniqueKey(input: string) {
  // Create a hash object
  const hash = crypto.createHash('sha256');

  // Update the hash with the input
  hash.update(input);

  // Generate the hash digest as a hexadecimal string
  const hashedKey = hash.digest('hex');

  return hashedKey;
}

export default function Page({ params }: Props) {
  const service = BUSINESS_SPECIFIC_DATA[params.business as 'everett-plumbers'].services.find(x => x.slug === params.slug)
  if (!service) return ('404');
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
        <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' } }} >
          <LargeCTA business={params.business} />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' } }} >
          <FormDialog inline={false} business={params.business} />
        </Box>
        <Paper elevation={5} sx={{
          p: 5, mt: 2, backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${getSihImageRequestUrl({
            src: `${params.business}${service.bgPhoto}`,
            width: 900,
            quality: 60,
          }, { blur: 6 })})`, backgroundSize: 'cover'
        }}>

          <Typography variant={'h6'} component={'h1'}>{service.header}</Typography>
          <Typography pt={2}>{service.subHeader}</Typography>
        </Paper>

        <Paper sx={{ mt: 2, p: 2 }} elevation={5}>
          <Box sx={{  }}>
            <div>
              <Typography variant="h6" gutterBottom>
                {service.header}
              </Typography>
              {service.text.map((text) => (
                <Typography key={generateUniqueKey(text)} variant="body1" paragraph>
                  {text}
                </Typography>
              ))}
            </div>
            <div >
              
              <Image 
              alt={service.title} 
              width="300" 
              height="300" 
              src={getSihImageRequestUrl({src:`/images/${params.business}${service.servicePhoto}`,width:300,height:300, quality:60})}
              />
            </div>
          </Box>

        </Paper>


      </Container>
    </div>
  );
}
