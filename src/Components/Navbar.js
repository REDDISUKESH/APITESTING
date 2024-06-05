import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { styled } from '@mui/material/styles';

// Create a styled component for a flex-grow div
const FlexGrow = styled('div')({
  flexGrow: 1,
});

// Define the NavBar component
const NavBar = ({ darkMode, setDarkMode }) => {
  // State to manage the drawer open/close state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to handle theme change
  const handleThemeChange = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };

  // Function to toggle the drawer open/close state
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // JSX for the drawer content
  const drawerList = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
        <ListItemIcon><InfoIcon /></ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        <ListItemIcon><ContactMailIcon /></ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  // Render the NavBar component
  return (
    <>
      {/* AppBar component for the top navigation */}
      <AppBar position="static">
        {/* Toolbar component for AppBar content */}
        <Toolbar>
          {/* IconButton for menu icon */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          {/* Typography for app title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          {/* Button links for larger screens */}
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', md: 'block' } }}>Home</Button>
          <Button color="inherit" component={Link} to="/about" sx={{ display: { xs: 'none', md: 'block' } }}>About</Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ display: { xs: 'none', md: 'block' } }}>Contact</Button>
          {/* Switch component for dark mode toggle */}
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>
      {/* Drawer component for mobile navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default NavBar;
