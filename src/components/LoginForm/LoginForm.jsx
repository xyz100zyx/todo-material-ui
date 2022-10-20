import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextInput from "../TextInput/TextInput";

const LoginForm = () => {
  return (
    <Box
      sx={{
        maxWidth: "600px",
        backgroundColor: "#FFD7A7",
        width: '100%',
        padding: '50px 25px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Typography
        variant={"h6"}
        sx={{
            fontSize: '28px',
            fontWeight: '400',
            
        }}
      >
        Login
      </Typography>
      <TextInput mw={400} type={'auth'} mt={28} label={'Email'} placeholder={'Input your email'} />
      <TextInput mw={400} type={'auth'} mt={20} label={'Password'} placeholder={'Input your password'} />
      <Button 
        variant='contained'
        sx={{
            display: 'block',
            margin: '50px auto 20px auto',
            backgroundColor: '#000',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;