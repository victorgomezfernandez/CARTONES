import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Locations from "./pages/locations/Locations";
import News from "./pages/news/News";
import Cards from "./pages/cards/Cards";
import NewsDetails from "./pages/news-details/NewsDetails";
import RSS from "./pages/rss/RSS";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:currentNew" element ={<NewsDetails />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/rss" element={<RSS />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;