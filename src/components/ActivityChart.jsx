import "../styles/ActivityChart.css"

const ActivityChart = () => {
  const chartData = [
    { day: "Mon", bars: [20, 40, 10] },
    { day: "Tue", bars: [60, 30, 10] },
    { day: "Wed", bars: [10, 20, 10] },
    { day: "Thu", bars: [30, 20, 40] },
    { day: "Fri", bars: [50, 20, 10] },
    { day: "Sat", bars: [10, 30, 10] },
    { day: "Sun", bars: [20, 10, 30] },
  ]

  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="appointment-count">3 appointment on this week</span>
      </div>

      <div className="chart-container">
        {chartData.map((item, index) => (
          <div key={index} className="chart-bar">
            <div className="bar-group">
              {item.bars.map((height, barIndex) => (
                <div
                  key={barIndex}
                  className="bar"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <span className="bar-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityChart