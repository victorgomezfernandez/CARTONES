import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Locations from "./pages/locations/Locations";
import News from "./pages/news/News";
import Cards from "./pages/cards/Cards";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;