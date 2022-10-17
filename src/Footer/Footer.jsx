import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#FFD874'
            }}
        >
            <Typography>Created by xyz100zyx</Typography>
        </Toolbar>
    );
}

export default Footer;