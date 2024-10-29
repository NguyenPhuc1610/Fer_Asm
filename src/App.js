import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/error404" element={<Error404/>} /> 
                <Route path="/contact" element={<Contact/>} />  
                <Route path="/account" element={<Account/>} /> 
            </Routes>
        </BrowserRouter>  
    </>
  );
}

export default App;