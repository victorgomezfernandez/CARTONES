import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Home.css"

function Home() {
  const [scrollOn, setScrollOn] = useState(false);

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  return (
    <>
      <Header scrollOn={scrollOn}/>
      <div className="home-principal" onScroll={changedScrollY}>
        
      </div>
      <Footer />
    </>
  )
}

export default Home;