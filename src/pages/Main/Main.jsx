import React from "react";
import { Container } from "@mui/material";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const [sideBar, setSidebar] = React.useState(false);

  return (
    <Container sx={{ maxWidth: "1440px" }}>
      <Header state={sideBar} action={setSidebar} />
      <Content state={sideBar} />
      <Footer />
    </Container>
  );
};

export default Main;
