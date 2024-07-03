import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Experience = () => {
    return (
        <Grid container spacing={2} className="container">
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h2" gutterBottom>
                Experience
            </Typography>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" gutterBottom>
                    Job Title
                </Typography>
                <Typography variant="h4" color="text.secondary" gutterBottom>
                    Company Name
                </Typography>
                <Typography variant="body1">
                    Job Description and responsibilities.
                </Typography>
            </Box>
            </Grid>
        </Grid>
    );
};

export default Experience;
