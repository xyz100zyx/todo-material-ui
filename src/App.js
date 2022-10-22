import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:userId" element={<Main />} />
        <Route path="/auth/register" element={<Auth action={'Register'} />} />
        <Route path="/auth/login" element={<Auth action={'Login'} />} />
      </Routes>
    </div>
  );
}

export default App;
