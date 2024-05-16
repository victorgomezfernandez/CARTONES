import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./Locations.css";

function Locations() {
  
  const [scrollOn, setScrollOn] = useState(false);

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  useEffect(() => {
    document.title = 'CARTONES | Locations';
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
          <div className="locations-text">
            <h1>LOCATIONS</h1>
            <br />
            <h3>Find your nearest stores or playing places in this interactive map</h3>
          </div>
          <MapContainer className="locations-map-container" center={[28.128, -15.446]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[28.12828685609975, -15.446745260579549]}>
              <Popup>
                IES El Rincon. <br /> - Store <br /> - Playing place.
              </Popup>
            </Marker>
            <Marker position={[28.12791207656798, -15.447125024585416]}>
              <Popup>
                MTG Saloon. <br /> - Playing place.
              </Popup>
            </Marker>
            <Marker position={[28.125893849141995, -15.439145089142492]}>
              <Popup>
                Where the Humans and the Stars collide. <br /> - Playing place.
              </Popup>
            </Marker>
            <Marker position={[28.103133851252387, -15.415670612478685]}>
              <Popup>
                Moebius 1 <br /> - Store <br />- Playing place.
              </Popup>
            </Marker>
            <Marker position={[28.136534090492393, -15.432168403941127]}>
              <Popup>
                Moebius 2 <br /> - Store
              </Popup>
            </Marker>
            <Marker position={[28.116158024433002, -15.429378742386804]}>
              <Popup>
                Stockholm Syndrome <br /> - Store <br />- Playing place.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Locations;