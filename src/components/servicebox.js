import React, { useState, useEffect } from "react"

const ServiceBox = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://api.alerts.uaservice.arizona.edu/services.json`)
      .then(response => response.json())
      .then(resultData => {
        setServices(resultData)
      })
  }, [])

  return (
    <div>
      <ul>
        {services.filter(x => x.currentstate.toLowerCase() !== 'optimal').map(service => (
          <li key={service.machinename}>{service.servicename} - {service.currentstate}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceBox
