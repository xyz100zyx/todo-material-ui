import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Loader from '../../components/ui/Loader';

const Auth = (props) => {

    const userStatus = useSelector(state => state.user.status);
    
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
            {userStatus === 'loading' && <Loader />}
        </Container>
    );
}

export default Auth;
