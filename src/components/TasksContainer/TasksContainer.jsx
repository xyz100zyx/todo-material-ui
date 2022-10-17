import React from 'react';
import {Container} from "@mui/material";

function TasksContainer({children}) {
    return (
        <Container sx={{
            maxWidth: '1090px'
        }}>
            {children}
        </Container>
    );
}

export default TasksContainer;