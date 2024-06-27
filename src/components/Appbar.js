import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import About from './About';
import Experience from './Experience';
import Home from './Home';

// const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'margingLeft', padding: '20px' }}>
            <Typography variant="h6" sx={{ my: 2, }}>MURALI PALANISAMY</Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
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
                        color="darksalmon"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Box sx={{ display: { xs: 'none', sm: 'block', marginLeft: 'auto' } }}>
                        {navItems.map((item) => (
                        <Button key={item} sx={{ color: 'darksalmon' }}>
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', backgroundColor: 'white' },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main"
                sx={{
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '100%',
                        lg: '100%',
                        xl: '100%',
                    },
                    height: {
                        xs: 'auto',
                        sm: 'auto',
                        md: '100%',
                        lg: '100%',
                        xl: '100%',
                    },
                    margin: '0 auto',
                }} p={{ xs: 3, sm: 1, md: 10, lg: 10, xl: 20 }}>
                <Home />
                <About />
                <Experience />
                
            </Box>
        </Box>
    );
}


DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
  
export default DrawerAppBar;
