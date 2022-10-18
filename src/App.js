import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import {Container} from "@mui/material";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function App() {
    const [sideBar, setSidebar] = React.useState(false)

    console.log(sideBar)

    return (
        <div className="App">
            <Container sx={{maxWidth: '1440px'}}>
                <Header state={sideBar} action={setSidebar}/>
                <Content state={sideBar}/>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;
