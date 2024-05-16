import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Home.css"
import Photos from "../../components/photos/Photos";

function Home() {

  const [scrollOn, setScrollOn] = useState(false);

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  useEffect(() => {
    document.title = 'CARTONES | Home';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = 'images/onlylogowhite.png'
    }
  }, []);

  return (
    <>
      <Header scrollOn={scrollOn} />
      <div className="home-principal" onScroll={changedScrollY}>
        <div className="home-content">
          <br />
          <h1>Welcome to CARTONES, EL ENCUENTRO</h1>
          <br />
          <h3>This page aims to be a meeting point for Magic The Gathering players in Las Palmas de Gran Canaria</h3>
          <br />
          <h3>Here you can search for playing <a href="/locations">LOCATIONS</a> near you and get the latest <a href="/news">NEWS</a> related to MTG</h3>
        </div>
        <Photos />
      </div>
      <Footer />
    </>
  )
}

export default Home;