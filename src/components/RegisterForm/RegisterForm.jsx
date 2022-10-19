import { Box, Typography } from "@mui/material";
import React from "react";
import TextInput from "../TextInput/TextInput";

const RegisterForm = () => {
  return (
    <Box
      sx={{
        maxWidth: "600px",
        backgroundColor: "#FFD7A7",
        width: '100%'
      }}
    >
      <Typography
        variant={"h6"}
        sx={{
            fontSize: '28px',
            fontWeight: '400',

        }}
      >
        Registration
      </Typography>
    </Box>
  );
};

export default RegisterForm;
