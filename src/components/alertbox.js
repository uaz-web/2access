import React, { useState, useEffect } from "react"

const AlertBox = () => {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    fetch(`https://api.alerts.uaservice.arizona.edu/alerts.json`)
      .then(response => response.json())
      .then(resultData => {
        setAlerts(resultData)
      })
  }, [])

  return (
    <div>
      <ul>
        {alerts.map(alert => (
          <li key={alert.servicealertid}>
            <a href={alert.servicealerturl}>{alert.overview}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlertBox
