import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./News.css"
import Newscontainers from "../../components/newscontainers/Newscontainers";

function News() {

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
      <Header scrollOn={scrollOn}/>
      <div className="news-principal" onScroll={changedScrollY}>
        <div className="news-content">
          <br />
          <h1>NEWS</h1>
          <br />
          <h3>In this section you will see the most recent news in the world of Magic The Gathering</h3>
        </div>
        <div className="news-cards">
          <Newscontainers />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default News;