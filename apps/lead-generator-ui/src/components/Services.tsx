import { Paper, Grid, Typography, Hidden, Box } from "@mui/material";
import MediaCard from "./MediaCard";
import { BUSINESS_SPECIFIC_DATA } from "@/globals";
import Link from "next/link";
import { getSihImageRequestUrl } from "@/utils";

export const Services: React.FC<{ business: keyof typeof BUSINESS_SPECIFIC_DATA }> = ({ business }) => (
  <section id="services">
    <Paper sx={{ p: 2, mt: 1 }} elevation={3}>
      <Typography variant="h2">
        Services
      </Typography>
      <Typography pb={2} textAlign={'justify'} maxWidth={600}>
        {BUSINESS_SPECIFIC_DATA[business].servicesDescription}
      </Typography>
      <Hidden smDown>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {BUSINESS_SPECIFIC_DATA[business].services.map((obj) => {
            return (
              <Grid item key={obj.slug} xs={10} sm={6} md={3}>
                <Link href={`/services/${obj.slug}`} style={{ textDecoration: 'none' }}>
                  <MediaCard
                    title={obj.teaser.title}
                    imageKey={`${business}${obj.teaser.imageKey}`}
                    text={obj.teaser.text}
                  />
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Box >

          <Grid container display={'flex'} justifyContent={'center'} flex={1} spacing={2} sx={{
            gridTemplateColumns: '200px 200px',
            gridRow: 'auto auto',
            columnGap: '10px',
            rowGap: '10px',
            maxWidth: 300,
            margin: '0 auto'
          }}>

            {BUSINESS_SPECIFIC_DATA[business].services.map((obj) => {
              return (

                <Typography align="center" variant="body2" >

                  <Link href={`/services/${obj.slug}`} style={{
                    textDecoration: 'none',
                    color: '#fff'
                  }} >
                    <Grid item boxShadow={5} mt={2} key={obj.slug} style={{
                      // border: '2px solid #959090',
                      backgroundColor: '#333',
                      padding: '10px',
                      borderRadius: '10px',
                      color: '#fff',
                      height: 100,
                      width: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: `url(/images/${business}${obj.teaser.imageKey}) `,
                      backgroundSize: '100px 100px'
                    }}>
                    </Grid>
                  </Link>
                  {obj.teaser.title}
                </Typography>
              )
            })}
          </Grid>
        </Box>

      </Hidden>
    </Paper>
  </section>
)