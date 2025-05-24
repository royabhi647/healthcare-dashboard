import "../styles/UpcomingSchedule.css"
import injectionImg from "../assets/injection.jpg";
import eyeIcon from "../assets/eye.webp";
import heartIcon from "../assets/heart.avif";
import boyIcon from "../assets/boy.png";

const UpcomingSchedule = () => {
  const scheduleData = {
    thursday: [
      { type: "Health checkup complete", time: "11:00 AM", icon: injectionImg },
      { type: "Ophthalmologist", time: "14:00 PM", icon: eyeIcon },
    ],
    saturday: [
      { type: "Cardiologist", time: "12:00 AM", icon: heartIcon },
      { type: "Neurologist", time: "16:00 PM", icon: boyIcon },
    ],
  }

  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>

      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="schedule-items">
          {scheduleData.thursday.map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-info">
                <span className="schedule-type">{item.type}</span>
                <span className="schedule-time">{item.time}</span>
              </div>
              <div className="schedule-icon">
                <img src={item.icon} style={{ width: "24px", height: "24px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="schedule-items">
          {scheduleData.saturday.map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-info">
                <span className="schedule-type">{item.type}</span>
                <span className="schedule-time">{item.time}</span>
              </div>
              <div className="schedule-icon">
                <img src={item.icon} style={{ width: "24px", height: "24px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingSchedule
