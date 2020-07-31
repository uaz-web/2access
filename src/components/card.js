import PropTypes from "prop-types"
import React from "react"

const Card = (props) => (
  <div class="card">
    <div class="card-header">{props.header}</div>
    <div class="card-body">
      {props.children}
    </div>
  </div>
)

Card.propTypes = {
  header: PropTypes.string,
}

Card.defaultProps = {
  header: ``,
}

export default Card
