import React from 'react';
import {Box} from '@mui/material';
import Sidebar from "../components/Sidebar/Sidebar";
import Divider from "@mui/material/Divider";
import Project from "../components/Project/Project";

function Content() {
    return (
        <Box
            sx={{
                minHeight: '800px',
                display: 'flex'
            }}
        >
            <Sidebar />
            <Divider sx={{width: '1px', marginTop: '5px', backgroundColor: '#000', opacity: 0.2}}/>
            <Project />
        </Box>
    );
}

export default Content;