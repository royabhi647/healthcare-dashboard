import AnatomySection from "./AnatomySection"
import ActivityChart from "./ActivityChart"
import "../styles/MainContent.css"
import Header from "./Header"

const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <AnatomySection />
      <ActivityChart />
    </div>
  )
}

export default MainContent
