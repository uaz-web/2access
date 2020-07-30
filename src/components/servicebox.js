import React from "react"

class ServiceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      alerts: []
    };
  }

  componentDidMount() {
    fetch("https://api.alerts.uaservice.arizona.edu/services.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            services: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, services } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading Services...</div>;
    } else {
      return (
        <div>
          <ul>
            {services.filter(service => service.currentstate.toLowerCase() !== 'optimal').map(service => (
              <li key={service.machinename}>{service.servicename}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default ServiceBox
