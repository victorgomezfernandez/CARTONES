import "./sidebar-movement.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <>
    <div className="bar-opener">
      <FontAwesomeIcon icon={faBars}/>
    </div>
    <div className="bar-main">
      <FontAwesomeIcon icon={faX}/>
      
      <a href="/home">Home</a>
      <a href="/news">News</a>
      <a href="/locations">Locations</a>
      <a href="/cards">Cards</a>
    </div>
    </>
  )
}

export default Sidebar;