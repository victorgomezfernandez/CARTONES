import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./RSS.css"
function RSS() {

  const [scrollOn, setScrollOn] = useState(false);

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  useEffect(() => {
    document.title = 'CARTONES | RSS';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = 'images/onlylogowhite.png'
    }
  }, []);

  return (
    <>
      <Header scrollOn={scrollOn} />
      <div className="rss-principal" onScroll={changedScrollY}>
        <div className="rss-content">
          <h1>Here you will find links to our RSS, to keep up with the news of CARTONES</h1>
          <br />
          <a href="/newsrss.xml"><h1>Link to our RSS news file</h1></a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RSS;