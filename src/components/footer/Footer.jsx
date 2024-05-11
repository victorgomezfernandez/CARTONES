import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faInstagram, faWizardsOfTheCoast, faGithub } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className="footer-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <a href="/home"><img className="footer-logo" src="/images/onlylogowhite.png" alt="image not found" /></a>
          </div>
          <div className="footer-col">
            <h4>CONTACT</h4>
            <ul className="footer-ul">
              <li className="footer-content">Monday-Friday 8:00-16:00</li>
              <li><b>CUSTOMER SUPPORT</b> </li>
              <li className="footer-content">cartonessuport@cartones.com</li>
              <li><b>ORDERS RECLAMATIONS</b></li>
              <li className="footer-content">cartonesshop@cartones.com</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SHOP</h4>
            <ul className="footer-ul">
              <li className="footer-content"><a href="/news">News</a></li>
              <li className="footer-content"><a href="/locations">Locations</a></li>
              <li className="footer-content"><a href="/cards">Cards</a></li>
              <li className="footer-content"><a href="#">Shipping policies</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <div className="footer-socials">
              <a href="https://twitter.com/wizards_magic"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="https://www.instagram.com/wizards_magic/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://magic.wizards.com/en"><FontAwesomeIcon icon={faWizardsOfTheCoast} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>IMPORTANT INFO</h4>
            <ul className="footer-ul">
              <li><a href="/privacy">Privacy Notice</a></li>
              <li><FontAwesomeIcon icon={faCopyright} /> 2024 CARTONES All Rights Reserved</li>
              <li><b>Check the Github</b></li>
              <div className="footer-socials">
                <a href="https://github.com/victorgomezfernandez/CARTONES"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;