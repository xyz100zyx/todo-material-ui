import React from 'react';
import {Box} from '@mui/material';
import Sidebar from "../Sidebar/Sidebar";
import Divider from "@mui/material/Divider";
import Project from "../Project/Project";

function Content(props) {
    return (
        <Box
            sx={{
                minHeight: '800px',
                display: 'flex',
                width: '100%',
            }}
        >
            <Sidebar state={props.state}/>
            {props.state && <Divider sx={{width: '1px', marginTop: '5px', backgroundColor: '#000', opacity: 0.2}}/>}
            <Project />
        </Box>
    );
}

export default Content;