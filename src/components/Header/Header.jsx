import React from 'react';
import Autocomplete from '@mui/material/Autocomplete'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import listImg from '../../img/list-img.png';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {

    const toggleSidebar = () => {
        props.action(!props.state);
    }

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar sx={{backgroundColor: '#FFE794'}} position="static">
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton
                        onClick={() => toggleSidebar()}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: '#000' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box width={'100%'} maxWidth={'250px'} sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={listImg} alt={'list-logo'}/>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#000' }}>
                            Your Todo
                        </Typography>
                    </Box>
                    <Button color={'inherit'} sx={{color: '#000'}}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;