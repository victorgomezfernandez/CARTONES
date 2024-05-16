import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DetailsTemplate from "./DetailsTemplate";
import { useParams } from "react-router-dom";

function NewsDetails() {

  const [scrollOn, setScrollOn] = useState(false);

  const { currentNew } = useParams();

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  useEffect(() => {
    document.title = 'CARTONES | New Details';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = '/images/onlylogowhite.png'
    }
  }, []);

  return (
    <>
      <Header scrollOn={scrollOn} />
      <div className="news-details-principal" onScroll={changedScrollY}>
        <DetailsTemplate currentNew={currentNew} />
      </div>
      <Footer />
    </>
  )
}


export default NewsDetails;