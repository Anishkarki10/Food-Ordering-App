import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from './components/Layouts/Footer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />

        
      </Routes>
    </Router>
  );
}

export default App;
