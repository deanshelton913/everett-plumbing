import { getSihImageRequestUrl } from "@/utils";
import { Paper, Typography } from "@mui/material";
import { BUSINESS_SPECIFIC_DATA } from '@/globals'
type HeroProps = {
    // Define any props your Hero component might receive
    business: keyof typeof BUSINESS_SPECIFIC_DATA
};
export const Hero: React.FC<HeroProps> = ({business}) => (
    <Paper elevation={5} sx={{
        p: 5, mt: 2, backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${getSihImageRequestUrl({
            src: BUSINESS_SPECIFIC_DATA[business].hero.backgroundImage,
            width: 900,
            quality: 0.2,
        }, { blur: 6 })})`, backgroundSize: 'cover'
    }}>
        <Typography sx={{ p: 2 }} variant='h3' fontWeight='fontWeightMedium' align='center'>
            {BUSINESS_SPECIFIC_DATA[business].hero.title}
        </Typography>
        <Typography sx={{ p: 2 }} align='center'>
            {BUSINESS_SPECIFIC_DATA[business].hero.paragraphs[0]}
        </Typography>
        <Typography sx={{ p: 2 }} align='center'>
            {BUSINESS_SPECIFIC_DATA[business].hero.paragraphs[1]}
        </Typography>
    </Paper>
)