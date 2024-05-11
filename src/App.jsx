import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Locations from "./pages/locations/Locations";
import News from "./pages/news/News";
import Cards from "./pages/cards/Cards";
import OTJ from "./pages/news-details/OTJ";
import LCI from "./pages/news-details/LCI";
import BBW from "./pages/news-details/BBW";
import MH3 from "./pages/news-details/MH3";
import TME from "./pages/news-details/TME";
import Prueba from "./pages/news-details/Prueba";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/outlaws_of_thunder_junction" element={<OTJ/>}/>
        <Route path="/news/lost_caverns_of_ixalan" element={<LCI/>}/>
        <Route path="/news/bloomburrow" element={<BBW/>}/>
        <Route path="/news/modern_horizons_3" element={<MH3/>}/>
        <Route path="/news/tales_of_middle_earth" element={<TME/>}/>
        <Route path="/prueba" element={<Prueba />}/>
        <Route path="/locations" element={<Locations />} />
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;