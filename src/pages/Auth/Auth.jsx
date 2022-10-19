import { Container } from '@mui/material';
import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Auth = (props) => {
    return (
        <Container
            sx={{
                maxWidth: '600px',
                width: '100%',
                minHeight: '200px',
                height: '100vh',
                backgroundColor: 'antiquewhite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <RegisterForm />
        </Container>
    );
}

export default Auth;
