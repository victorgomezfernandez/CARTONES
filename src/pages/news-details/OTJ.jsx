import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./NewsDetails.css"
import news from "../../models/news/news";

function OTJ() {
  const [scrollOn, setScrollOn] = useState(false);

  const currentNew = 1;

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  useEffect(() => {
    document.title = 'CARTONES | Outlaws of Thunder Junction';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = '/images/onlylogowhite.png'
    }
  }, []);

  return (
    <>
      <Header scrollOn={scrollOn} onScroll={changedScrollY} />
      <div className="news-details-principal">
      <div className="news-details-content">
          {
            news.map((n) => (
              <>
                {n.key == currentNew ?
                  <div>
                    <h1>{n.title}</h1>
                  </div>
                  : ""}
              </>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OTJ;