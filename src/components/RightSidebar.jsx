import Calendar from "./Calendar"
import UpcomingSchedule from "./UpcomingSchedule"
import "../styles/RightSidebar.css"

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <Calendar />
      <UpcomingSchedule />
    </div>
  )
}

export default RightSidebar
