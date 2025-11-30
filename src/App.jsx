import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import Navbar from "./components/layout/Navbar";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
