# CARTONES

CARTONES EL ENCUENTRO is a React project, with the objective of a functional meeting point for Magic The Gathering Players

# TASK 1

## COMPONENTS

This project is composed of the next components that will be used all across the web:
- FOOTER: the default footer for the webpage.
- HEADER: the default header for the webpage.
- NEWSCONTAINERS: this component displays the information stored in the **news.js** file, using the slider from SLICK.
- PHOTOS: this component displays the images stored in the **photos.js** file, displaying them in columns with hover effects.

## MODELS
This project uses two .js files to store the information displayed in some of the components above:
- news.js: an array with information about some news regarding the Magic The Gathering world. Each "new" is composed of a **title**, a **preview** (image), some **content** and a **link** to other pages.
- photos.js: another array with the images displayed in the PHOTOS component.

## PLUGINS
For the moment, this project only uses one plugin, the Slider from SLICK, to display the news information in a slider format. To use it the next commands must be used:
```
npm install react-slick --save
npm install slick-carousel --save
```
Then, in the **NEWSCONTAINERS** component the next lines import everything necessary to use React Slick:
```python
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```
Inside the React **function** section the Slider settings must be put
```java
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};
```
Then I encountered a problem: the arrows at each side of the slider were white (as the background of the web) and weren't easily distinguished from the rest of the background. To overcome this problem I used the .css file linked and added the next lines:
```css
.slick-prev:before{
    color: black !important;
}

.slick-next:before{
    color: black !important;
}
```
All the information about the Slick Slider can be found in the official page [here](https://docs.fontawesome.com/web/use-with/react/)

----
Another plugin used is FontAwesome with an easy installation (using the official [guide](https://docs.fontawesome.com/web/use-with/react/)) and with the next **imports** using the icons is extremely easy
```python
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faInstagram, faWizardsOfTheCoast, faGithub } from '@fortawesome/free-brands-svg-icons'
```


## PAGES

The project is composed of three main pages:
- Home, the default page of the project with some information and images
- News, the page containing the last news of Magic The Gathering, using the previous mentioned NEWSCONTAINERS component and NEWS.JS model
- Locations will show the nearest play zones of Magic The Gathering


# TASK 2

## PLUGINS
For this task the web page will connect to a Firebase database, that will store information about some Magic The Gathering cards, with characteristics like name, description or type, including an image stored locally in the project (as the Firebasae storage was producing problems). These data will be displayed in a "Cards" page. The next code was used to be able to get the data from the database, in the firebase.config.js file:

```java
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmrWiarJyftL9RZYAvYTyNJQTnsY81ppI",
  authDomain: "cartones-62edd.firebaseapp.com",
  databaseURL: "https://cartones-62edd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cartones-62edd",
  storageBucket: "cartones-62edd.appspot.com",
  messagingSenderId: "628907442821",
  appId: "1:628907442821:web:14caf05e947a2ad94e5fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
```

## PAGES

This page includes only one new page, "Cards", that displays the information gotten from the database in an intuitive way. This page also includes a still-in-progress simple filter for these cards, filtering the type of the cards (creatures, lands, etc). The code to filter the cards is divided in the next parts:

--------------------

Getting the data from the database
```javascript
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
```

--------------------
Defining the elements used later
```java
const [cardType, setCardType] = useState("Creature");
```
-------------------
Getting the elements from the database and filtering by the type, displaying the needed data
```java
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
```

# TASK 3

## Making uploading possible

One of the challenges of this task is allowing the user to upload their own cards, writing its name, type, deck and uploading the image corresponding to the card. To make it possible a form was included in the Cards page with inputs for the different fields that, on submit, will update a realtime database in Firebase and upload an image to the storage in Firebase. To make it possible the next code was added in the cards.service.js file:

```javascript
const addCard = (name, type, img, deck) => {
	return push(refCards, {
		name: name,
		type: type,
		img: img,
		deck: deck
	});
};

const uploadCardImage = (image, imgName) => {
  console.log(image);
  const myStorageRef = storageRef(firebaseService.storage, imgName);
  return uploadBytes(myStorageRef, image);
}


const getCardImage = (snapshotUrl) => {
	return getDownloadURL(snapshotUrl);
}
```

There is also the option to delete a card; this will delete the registers in the database, using the next code:

```javascript
const removeCard = (key) => {
	const dbRefCard = ref(firebaseService.db, `/cards/${key}`);
	return remove(dbRefCard);
};
```

But this would not work without implementing it into the Cards.jsx file, so to allow it the next code was added. The uuidv4 module was installed to create an unique name for the uploaded images:

```javascript
  const [cards, setCards] = useState([]);

  const [image, setImage] = useState(null);

  let imgName = uuidv4();

  const refForm = useRef();

  const getAllCards = () => {
    cardsService.getAllCards().then((items) => {
      let auxCards = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();
        auxCards.push({
          key: key,
          name: data.name,
          type: data.type,
          img: data.img,
          deck: data.deck
        })
      })
      setCards([...auxCards])
    })
  }

  const addCard = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const img = imgName;
    const deck = e.target.deck.value;
    cardsService.addCard(name, type, img, deck).then((res) => {
      refForm.current.reset();
      setCards(oldValues => [...oldValues, { key: res.key, name, type, img, deck }])
    })
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleImageSubmit = (e) => {
    e.preventDefault();
    const imgName = uuidv4();
    cardsService.uploadCardImage(image, imgName).then((response) => {
      console.log("image uploaded");
      cardsService.getCardImage(response.ref).then(res => {
        const name = e.target.name.value
        const type = e.target.type.value
        const img = res
        const deck = e.target.deck.value
        cardsService.addCard(name, type, img, deck).then((response) => {
          console.log("card uploaded");
        })
      })
    })
  }


  const removeCard = (key) => {
    cardsService.removeCard(key).then(() => {
      getAllCards();
      console.log("card removed");
    });
  };
```

To apply it to the page a form was created with the next code:

```js
<form className="cards-filter">
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
```

## RSS

To achieve this part I created some pages with details from the news.js file used earlier. Creating a template with data that will change depending on the parameter sent to the function the work was decreased and normalized, creating a consistent page with less possible errors. This pages are the ones included in the RSS file:
```xml
<?xml version="1.0" encoding="UTF-8"?>

<rss version="2.0">

  <channel>
    <title>CARTONES News Page</title>
    <link>https://cartones-9f0dc.web.app/cartones/news</link>
    <description>News from the Magic the Gathering multiverse</description>
    <pubDate>Fri, 17 May 2024 10:30:00 +0000</pubDate>
    <item>
      <title>Outlaws of Thunder Junction</title>
      <link>https://cartones-9f0dc.web.app/news/1</link>
      <description>Outlaws of Thunder Junction out tomorrow</description>
      <pubDate>Fri, 17 May 2024 10:30:00 +0000</pubDate>
    </item>
    <item>
      <title>The Lost Caverns of Ixalan</title>
      <link>https://cartones-9f0dc.web.app/news/2</link>
      <description>The Lost Caverns of Ixalan already avaliable</description>
      <pubDate>Fri, 17 May 2024 10:30:00 +0000</pubDate>
    </item>
    <item>
      <title>Bloomburrow</title>
      <link>https://cartones-9f0dc.web.app/news/3</link>
      <description>Bloomburrow release date confirmed</description>
      <pubDate>Fri, 17 May 2024 10:30:00 +0000</pubDate>
    </item>
    <item>
      <title>Modern Horizons III</title>
      <link>https://cartones-9f0dc.web.app/news/4</link>
      <description>Modern Horizons III available for pre-purchase</description>
      <pubDate>Fri, 17 May 2024 10:30:00 +0000</pubDate>
    </item>
    <item>
      <title>Tales of Middle Earth</title>
      <link>https://cartones-9f0dc.web.app/news/5</link>
      <description>Magic The Gathering and Lord of the Rings new collaboration</description>
      <pubDate>Fri, 17 May 2024 10:30:00 +0000</pubDate>
    </item>
  </channel>

</rss>
```

The project had to be uploaded to Firebase Hosting ([app link](https://cartones-9f0dc.web.app))in order to be able to get the different news. The file can be found in the footer of the page, and linking it to a RSS reader will result in something like this:

<img width="1920" alt="feedly" src="https://github.com/victorgomezfernandez/CARTONES/assets/145705464/24c6205d-0e07-4e1f-9ea6-7d51ae7dfef6">


### Failed attemps

One part of this task was making a dropdown menu for the page in phone-sized screens, but it has not been possible to include this section in the page (the fundations are in the repository)

## INSPIRATION

I have used the next [page](https://www.figma.com/community/file/891374608655348853) as a shallow inspiration for the creation of the page


## Authors
- Víctor Gómez
