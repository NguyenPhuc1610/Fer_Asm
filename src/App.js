import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/error404" element={<Error404/>} /> 
                <Route path="/contact" element={<Contact/>} />   
            </Routes>
        </BrowserRouter>  
    </>
  );
}

export default App;