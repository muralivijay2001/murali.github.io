import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const CustomTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'auto !important',
    color: '#002d5b',
}));

const About = () => {
    return (
        <Grid>
            <Grid item xs={12} sm={12} md={6} lg={12}>
                <Typography variant="body1">
                        As a passionate and dedicated Software Engineer with over two
                    years of professional experience, I specialize in web development
                    and possess a strong foundation in designing, developing, and
                    maintaining scalable and efficient web applications. My journey in
                    the tech industry has been marked by a commitment to continuous
                    learning and a drive to stay at the forefront of technological
                    advancements.
                </Typography>
            </Grid>
        </Grid>

    );
};

export default About;
