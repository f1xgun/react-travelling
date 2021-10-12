import Button from './Button'

function Header () {
  return (
    <header>
      <div className="header__logo">
        <img src="/img/logo.svg" className="header__logo-img" alt="Logo"></img>
        <h2 className="header__logo-title">Way<span>farer</span></h2>
      </div>
      <ul className="header__links">
        <li className="active">Home</li>
        <li>Place</li>
        <li>News</li>
        <li>Feedback</li>
      </ul>
      <Button className="header__login" title="Login"/>
    </header>
  )
}

export default Header;