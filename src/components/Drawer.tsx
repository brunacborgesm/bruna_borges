import { useState } from 'react';
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

    const handleDrawerItemClick = (index: number) => {
        const sections = ['home', 'about-me', 'portfolio', 'contact'];
        const sectionId = sections[index];
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false);
    };

    const list = (
        <List className='font-title'>
            <p className='text-3xl flex justify-center items-center mb-14 text-cl-green font-bold'>Bem vindo(a) ao meu Potifólio!</p>
            {['Home', 'Sobre', 'Portifólio', 'Contatos'].map((text, index) => (
                <ListItem className='flex flex-col justify-center items-center text-center text-title text-cl-green mb-10' key={text} onClick={() => handleDrawerItemClick(index)}>
                    <ListItemText primary={<span className="font-semibold text-4xl font-title cursor-pointer">{text}</span>} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <div>
            <Button onClick={toggleDrawer}>
                {open ? <CloseIcon className='text-cl-orange' /> : <MenuIcon className='text-cl-orange' />}
            </Button>
            <Drawer anchor='top' open={open} className='transition-all duration-300 ease-in-out backdrop-filter backdrop-blur-lg mt-20'>
                <div className='bg-cl-black text-center flex flex-col justify-center items-center h-screen'>
                    <span>{list}</span>
                </div>
            </Drawer>
        </div>
    );
}