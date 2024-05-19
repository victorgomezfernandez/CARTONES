import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import "./NewsDetails.css"
import news from "../../models/news/news";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function DetailsTemplate({ currentNew }) {

  const [scrollOn, setScrollOn] = useState(false);

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
      <div className="news-details-content">
          {
            news.map((n) => (
              <>
                {n.key == currentNew ?
                  <div>
                    <div className="back-to-news">
                      <a href="/news"><h2><FontAwesomeIcon icon={faBackward} /> Back to News</h2></a>
                    </div>
                    <h1>{n.title}</h1>
                    <p>{n.content}</p>
                    <br />
                    <div className="news-details-preview">
                      <img src={n.preview} alt="" />
                    </div>
                  </div>
                  : ""}
              </>
            ))
          }
        </div>
    </>
  )
}

export default DetailsTemplate;