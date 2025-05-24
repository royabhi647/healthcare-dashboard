import "../styles/Sidebar.css"
import dashboardImg from "../assets/dashboard.png";
import historyImg from "../assets/history.png";
import calendarImg from "../assets/calendar.png";
import appointmentsImg from "../assets/appointment.png";
import statisticsImg from "../assets/statistics.png";
import chatImg from "../assets/chat.png";
import supportImg from "../assets/support.png";
import settingImg from "../assets/setting.png";

const Sidebar = () => {
  const menuItems = [
    { icon: dashboardImg, label: "Dashboard", active: true },
    { icon: historyImg, label: "History" },
    { icon: calendarImg, label: "Calendar" },
    { icon: appointmentsImg, label: "Appointments" },
    { icon: statisticsImg, label: "Statistics" },
    { icon: chatImg, label: "Chat" },
    { icon: supportImg, label: "Support" },
    { icon: settingImg, label: "Setting" },
  ]

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-accent">Health</span>
        <span className="logo-text">care.</span>
      </div>

      <nav className="nav-menu">
        <div className="menu-section">
          <span className="menu-label">GENERAL</span>
          {menuItems.slice(0, 4).map((item, index) => (
            <div key={index} className={`menu-item ${item.active ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={item.icon} />
              </div>
              <span className="menu-text">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="menu-section">
          <span className="menu-label">TOOLS</span>
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className={`menu-item ${item.active ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={item.icon} />
              </div>
              <span className="menu-text">{item.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
