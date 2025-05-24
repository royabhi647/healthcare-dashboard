import "../styles/Header.css"
import searchImg from "../assets/search.png";
import notificationImg from "../assets/notification.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="search-container">
          <span className="search-icon">
            <img src={searchImg} />
          </span>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="notification-icon">
          <img src={notificationImg} />
        </div>
      </div>


      <div className="header-left">
        <h1 className="page-title">Dashboard</h1>
      </div>
    </header>


  )
}

export default Header
