import { Paper, Grid, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
import { BUSINESS, BUSINESS_SPECIFIC_DATA } from "@/globals";
import Link from "next/link";

export const Services = () => (
  <section id="services">
    <Paper sx={{ p: 2, mt: 1 }} elevation={3}>
      <Typography variant="h2">
        Services
      </Typography>
      <Typography pb={2}>
        {BUSINESS_SPECIFIC_DATA[BUSINESS].servicesDescription}
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {BUSINESS_SPECIFIC_DATA[BUSINESS].services.map((obj) => {
          return (
            <Grid item key={obj.slug} xs={10} sm={6} md={3}>
              <Link href={`/${obj.slug}`} style={{textDecoration:'none'}}>
                <MediaCard
                  title={obj.teaser.title}
                  imageKey={`${BUSINESS}${obj.teaser.imageKey}`}
                  text={obj.teaser.text}
                />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Paper>
  </section>
)