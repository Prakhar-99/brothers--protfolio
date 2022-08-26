import React from "react";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
   <>
   <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
   </Routes>
   </>
  );
}

export default App;
