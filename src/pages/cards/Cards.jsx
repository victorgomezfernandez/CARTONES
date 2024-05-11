import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import "./Cards.css";
import cardsService from "../../services/firebase/cards.service";

function Cards() {

  const [cardType, setCardType] = useState("Creature");

  const [scrollOn, setScrollOn] = useState(false);

  const [cards, setCards] = useState([]);

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  useEffect(() => {
    document.title = 'CARTONES | Cards';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = 'images/onlylogowhite.png'
    }
  }, []);

  const changeCardTypeValue = (e) => {
    setCardType(e.target.value);
  }

  const getAllCards = () => {
    cardsService.getAllCards().then((items) => {
      let auxCards = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();
        auxCards.push({
          name: data.name,
          type: data.type,
          img: data.img,
          deck: data.deck
        })
      })
      setCards([...auxCards])
    })
  }

  useEffect(() => {
    getAllCards();
  }, [])

  return (
    <>
      <Header scrollOn={scrollOn} />
      <div className="cards-principal" onScroll={changedScrollY}>
        <div className="cards-title">
          <br />
          <h1>CARDS</h1>
          <br />
          <h3>In this section you will see the MTG cards that you can obtein as rewards in our competitions</h3>
          <h3>Filter the card types you want to see</h3>
          <form className="cards-form">
            <select value={cardType} onChange={changeCardTypeValue}>
              <option value="Creature">Creature</option>
              <option value="Land">Land</option>
              <option value="Instant">Instant</option>
              <option value="Sorcery">Sorcery</option>
              <option value="Artifact">Artifact</option>
              <option value="Enchantment">Enchantment</option>
              <option value="Planeswalker">Planeswalker</option>
            </select>
          </form>
        </div>
        <div className="cards-content">

          {
            cards.map((c) => (
              <>
                {c.type == cardType ?
                  <div className="cards-container">
                    <div className="cards-image-container">
                      <div className="cards-image">
                        <img src={`/cards-images/${c.img}`} alt="image not found" />
                      </div>
                    </div>
                    <div className="cards-text">
                      <p>Name: {c.name}</p>
                      <p>Deck: {c.deck}</p>
                    </div>
                  </div>
                  :
                  ""}
              </>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cards;