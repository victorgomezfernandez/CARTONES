import "./Header.css"

function Header({ scrollOn }) {
  return (
    <div className={`header-wrapper ${scrollOn ? "header-dark" : ""}`}>
      <a href="/home" className="header-logo"><img src="/images/logoblack.png" alt="image not found" /></a>
      <nav className="header-navbar">
        <a href="/buy">Buy</a>
        <a href="/sell">Sell</a>
        <a href="/locations">Locations</a>
      </nav>
    </div>
  )
}
export default Header;