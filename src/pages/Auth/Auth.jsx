import { Container } from '@mui/material';
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
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
                justifyContent: 'center',
            }}
        >
            {props.action === 'Register' ? <RegisterForm /> : <LoginForm />}
        </Container>
    );
}

export default Auth;
