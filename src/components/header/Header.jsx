import "./Header.css"

function Header({ scrollOn }) {
  return (
    <div className={`header-wrapper ${scrollOn ? "header-dark" : ""}`}>
      <div className="header-logo">
        <a href="/home" className="header-logoblack"><img src="/images/logoblack.png" alt="image not found" /></a>
        <a href="/home" className="header-logowhite"><img src="/images/logowhite.png" alt="image not found" /></a>
      </div>
      <nav className="header-navbar" >
        <a href="/news">News</a>
        <a href="/locations">Locations</a>
      </nav>
    </div>
  )
}
export default Header;