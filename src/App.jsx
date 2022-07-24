import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<h1>Products Page</h1>} />
            <Route path="/add" element={<h1>Add Products Page</h1>} />
            <Route path="/update" element={<h1>Products Update Page</h1>} />
            <Route path="/logout" element={<h1>LogOut Page</h1>} />
            <Route path="/profile" element={<h1>Profile Page</h1>} />
          </Routes>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
