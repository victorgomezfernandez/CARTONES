 CARTONES

CARTONES EL ENCUENTRO is a React project, with the objective of a functional meeting point for Magic The Gathering Players

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
- Locations, still in process, that will show the nearest play zones of Magic The Gathering

## INSPIRATION

I have used the next [page](https://www.figma.com/community/file/891374608655348853) as a shallow inspiration for the creation of the page

## Authors
- Víctor Gómez
