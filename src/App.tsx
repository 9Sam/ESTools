import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
   return (
      <BrowserRouter>
         <main>
            {/* <Navbar changeMode={changeMode} darkMode={darkMode} /> */}
            <div className="p-5 border-2 border-sky-100">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/" element={<Home />} />
               </Routes>
            </div>
            {/* <Footer /> */}
         </main>
      </BrowserRouter>
   );
}

export default App;
