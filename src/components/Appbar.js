import * as React from 'react';
import PropTypes from 'prop-types';
// ** @mui material ** //
import {AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Button, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
//** pages **//
import About from './About';
import Experience from './Experience';
import Home from './Home';
import Footer from './Footer';

const navItems = ['Home', 'About', 'Experience', 'Footer'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const homeRef = React.useRef(null);
    const aboutRef = React.useRef(null);
    const experienceRef = React.useRef(null);
    const footerRef = React.useRef(null);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavItemClick = (item) => {
        setMobileOpen(false);
        let ref;
        switch (item) {
            case 'Home':
                ref = homeRef;
                break;
            case 'About':
                ref = aboutRef;
                break;
            case 'Experience':
                ref = experienceRef;
                break;
            case 'Footer':
                ref = footerRef;
                break;
            default:
                ref = homeRef;
        }
        ref.current.scrollIntoView({ behavior: 'smooth' });
        handleDrawerToggle();
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h6" sx={{ my: 2 }}>MURALI PALANISAMY</Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClick(item)}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: '#015871' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block', marginLeft: 'auto' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'darksalmon' }} onClick={() => handleNavItemClick(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ flexGrow: 1, }}>
                <Box ref={homeRef} sx={{ height: '100vh', width: '100%' }}><Home /></Box>
                <Box ref={aboutRef} sx={{ height: '100vh', width: '100%' }}><About /></Box>
                <Box ref={experienceRef} sx={{ height: '100vh', width: '100%' }}><Experience /></Box>
                <Box ref={footerRef} sx={{ mt: 4 }}><Footer /></Box>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
