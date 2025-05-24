import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import RightSidebar from "./components/RightSidebar"
import "./styles/App.css"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <div className="content-wrapper">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default App
