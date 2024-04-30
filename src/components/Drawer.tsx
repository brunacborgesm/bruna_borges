import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {['Home', 'Sobre', 'Portifólio', 'Contato'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer}>
                <MenuIcon sx={{ color: '#000' }} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer}>
                <Box>
                    <Button onClick={toggleDrawer}><CloseIcon /></Button>
                </Box>
                {list}
            </Drawer>
        </div>
    );
}
