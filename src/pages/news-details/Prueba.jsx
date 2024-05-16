import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NewsDetails from "./NewsDetails";

function Prueba() {
  const [scrollOn, setScrollOn] = useState(false);

  const currentNew = 3;

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  useEffect(() => {
    document.title = 'CARTONES | BloomBurrow';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = '/images/onlylogowhite.png'
    }
  }, []);
  return(
    <>
    <Header scrollOn={scrollOn} />
    <div className="news-details-principal" onScroll={changedScrollY}>
      <NewsDetails currentNew={currentNew} />
    </div>
    <Footer />
    </>
  )
}

export default Prueba;