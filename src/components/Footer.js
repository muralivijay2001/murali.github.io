import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, Instagram, GitHub, Twitter } from '@mui/icons-material';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <Box >
            <Box className="footer" sx={{ height: '30vh', bottom: 0 }}>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </Box>
            <Box sx={{ height: '20vh', backgroundColor: '#015871'}}>
                <Grid container spacing={4} justifyContent="center" sx={{ backgroundColor: '#015871', color: 'white'}}>
                    <Grid item xs={12} sm={6} md={3} className="footer-section">
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">Email: muralip.software.engineer@gmail.com</Typography>
                        <Typography variant="body2">Phone: +123 456 7890</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="footer-section">
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box className="social-icons">
                            <IconButton component={Link} href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
                                <LinkedIn sx={{ color: 'white'}} />
                            </IconButton>
                            <IconButton component={Link} href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                                <Instagram sx={{ color: 'white'}}/>
                            </IconButton>
                            <IconButton component={Link} href="https://github.com/" target="_blank" aria-label="GitHub">
                                <GitHub sx={{ color: 'white'}}/>
                            </IconButton>
                            <IconButton component={Link} href="https://twitter.com/" target="_blank" aria-label="Twitter">
                                <Twitter sx={{ color: 'white'}}/>
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="footer-section">
                        <Typography variant="h6" gutterBottom>
                            Links
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#home" underline="none" sx={{ color: 'white'}}>Home</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#about" underline="none" sx={{ color: 'white'}}>About</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#experience" underline="none" sx={{ color: 'white'}}>Experience</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="footer-section">
                        <Typography variant="h6" gutterBottom>
                            Address
                        </Typography>
                        <Typography variant="body2">123 Main Street</Typography>
                        <Typography variant="body2">City, State, Zip Code</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className="footer-bottom" sx={{ height: '5vh', backgroundColor: '#015871'}}>
                <Typography variant="body2" color="white">
                    © {new Date().getFullYear()} Murali Palanisamy. All rights reserved.
                </Typography>
            </Box>
        </Box>
        
    );
};

export default Footer;
