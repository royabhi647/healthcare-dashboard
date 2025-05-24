import "../styles/Calendar.css"
import teethImg from "../assets/teeth.png";
import armImg from "../assets/arm.jpg";
const Calendar = () => {
  const calendarData = [
    { day: "Mon", date: 25, time: "10:00", appointment: "08:00" },
    { day: "Tue", date: 26, time: "12:00", appointment: "09:00" },
    { day: "Wed", date: 27, time: "13:00", appointment: "11:00" },
    { day: "Thu", date: 28, time: "10:00", appointment: "14:00" },
    { day: "Fri", date: 29, time: "12:00", appointment: "09:00" },
    { day: "Sat", date: 30, time: "15:00", appointment: "14:00" },
    { day: "Sun", date: 31, time: "11:00", appointment: "10:00" },
  ]

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <span className="week-label">This Week</span>
        <div className="month-nav">
          <span className="month-title">October 2021</span>
          <div className="nav-arrows">
            <button className="nav-arrow">‹</button>
            <button className="nav-arrow">›</button>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map((item, index) => (
          <div key={index} className="calendar-day">
            <div className="day-header">
              <span className="day-name">{item.day}</span>
              <span className="day-number">{item.date}</span>
            </div>
            <div className="time-slots">
              <div className="time-slot">{item.time}</div>
              <div className="time-slot appointment">{item.appointment}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        <div className="appointment-card dentist">
          <div className="appointment-details">
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <h4>Dentist</h4>
              <div className="appointment-icon">
                <img src={teethImg} />
              </div>
            </div>
            <p>09:00-11:00</p>
            <span>Dr. Cameron Williamson</span>
          </div>
        </div>

        <div className="appointment-card physiotherapy">
          <div className="appointment-details">
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <h4>Physiotherapy Appointment</h4>
              <div className="appointment-icon">
                <img src={armImg} style={{ width: "24px", height: "24px" }} />
              </div>
            </div>
            <p>13:00-14:00</p>
            <span>Dr. Kevin Djones</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
