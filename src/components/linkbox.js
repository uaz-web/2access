// If you don't want to use TypeScript you can delete this file!
import React from "react"
import PropTypes from "prop-types"
import { PageProps, Link, StaticQuery, graphql } from "gatsby"

const LinkBox = ({ links }) => (
  <div>
    {links.map(link =>
    <>
      <Link to={link.url}>
        {link.title}
      </Link>
        {link.vpn ? (<span>&#128274;</span>) : ``}
      <br />
    </>
    )}
  </div>
)

LinkBox.propTypes = {
  links: PropTypes.object,
}

LinkBox.defaultProps = {
  links: {},
}

export default LinkBox

