import React from "react"
import PropTypes from "prop-types"

const LinkBox = (props) => (
  <div>
    {props.links.map(link =>
      <div key={link.url}>
        <a href={props.train ? (link.train ? link.train : `#`) : link.url}>
        {link.title}
        </a>
        {link.vpn ? (<span role="img" aria-label="VPN Required">&#128274;</span>) : ``}
        <br />
      </div>
    )}
  </div>
)

LinkBox.propTypes = {
  links: PropTypes.array,
  train: PropTypes.bool
}

LinkBox.defaultProps = {
  links: [],
  train: false
}

export default LinkBox
