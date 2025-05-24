import "../styles/AnatomySection.css"
import bodyImg from "../assets/body.png";
import lungsImg from "../assets/lungs.png";
import teethImg from "../assets/teeth.png";
import boneImg from "../assets/bone.png";

const AnatomySection = () => {
  const healthData = [
    {
      icon: lungsImg,
      label: "Lungs",
      date: "Tue, 26 Oct 2021",
      progress: 85,
      color: "#ff6b6b",
    },
    {
      icon: teethImg,
      label: "Teeth",
      date: "Wed, 20 Oct 2021",
      progress: 70,
      color: "#4ecdc4",
    },
    {
      icon: boneImg,
      label: "Bone",
      date: "Thu, 26 Oct 2021",
      progress: 60,
      color: "#45b7d1",
    },
  ]

  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-model">
          <img src={bodyImg} alt="Human Anatomy" className="anatomy-image" />
        </div>

        <div className="health-indicators">
          {healthData.map((item, index) => (
            <div key={index} className="health-item">
              <div className="wrap">
                <div className="health-icon">
                  <img src={item.icon} />
                </div>
                <h3>{item.label}</h3>
              </div>
              <div className="health-info">
                <p>{item.date}</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${item.progress}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnatomySection
