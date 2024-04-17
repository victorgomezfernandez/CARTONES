import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Locations from "./pages/locations/Locations";

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;