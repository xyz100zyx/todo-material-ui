import './App.css';
import Header from "./components/Header/Header";
import {Container} from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
        <Container sx={{maxWidth: '1440px'}}>
            <Header />
            <Content />
            <Footer />
        </Container>
    </div>
  );
}

export default App;
