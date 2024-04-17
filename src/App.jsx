import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Photos from "./components/photos/Photos";



function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home/>} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
