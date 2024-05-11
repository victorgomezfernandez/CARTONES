import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import "./NewsDetails.css"
import news from "../../models/news/news";

function NewsDetails(currentNew) {
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

export default NewsDetails;