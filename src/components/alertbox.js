import React from "react"

class AlertBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      alerts: []
    };
  }

  componentDidMount() {
    fetch("https://api.alerts.uaservice.arizona.edu/alerts.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            alerts: result
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
    const { error, isLoaded, alerts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {alerts.map(alert => (
              <li key={alert.servicealertid}>{alert.overview}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default AlertBox
