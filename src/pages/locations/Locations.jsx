import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "./Locations.css";
import Photos from "../../components/photos/Photos";

function Locations() {
  
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
      <Header scrollOn={scrollOn} />
      <div className="locations-principal" onScroll={changedScrollY}>
        <div className="locations-content">
          {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Locations;