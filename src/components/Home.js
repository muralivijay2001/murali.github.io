import React from 'react';
import { Grid, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import home from '../images/home.svg';
import'./Home.css';

const CustomTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'auto !important',
    color: '#002d5b',
}));

const Home = () => {
    return (
        <Grid container spacing={2} className="container">
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid className="textContainer">
                    <CustomTypography variant="h2">
                        I'm Software Engineer
                        <br />
                        Murali
                    </CustomTypography>
                    <Typography variant="body1" mt={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={6} className="imageContainer">
                <img src={home} alt="home" className="image" />
            </Grid>
        </Grid>
    );
};

export default Home;
