import { BUSINESS_SPECIFIC_DATA } from "@/globals";
import { getSihImageRequestUrl } from "@/utils";
import { Paper, Typography } from "@mui/material";

export const Testimonials: React.FC<{business: keyof typeof BUSINESS_SPECIFIC_DATA}> = ({business}) => (
    <Paper elevation={5} id="testimonials" sx={{
        p: 5, mt: 2, backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(${getSihImageRequestUrl({
            src: BUSINESS_SPECIFIC_DATA[business].testimonials.backgroundImage,
            width: 900,
            // height:30,
            quality: 0.2,
        }, { blur: 6 })})`, backgroundSize: 'cover'
    }}>
        <Typography variant='h4' sx={{ p: 2, textDecoration: 'italic' }} fontWeight={200} align='center'>
            Testimonials
        </Typography>
        {BUSINESS_SPECIFIC_DATA[business].testimonials.quotes.map(obj => (

        <Typography key={obj.author} sx={{ p: 2, textDecoration: 'italic' }} fontWeight={200} align='center'>
            <em>&quot;{obj.quote}&quot;</em>
            <br/> - {obj.author} ({obj.location})
        </Typography>
        ))}
    </Paper>
)