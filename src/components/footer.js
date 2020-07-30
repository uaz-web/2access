import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ children }) => (
  <footer className="fixed-bottom" style={{ background: `#f4ede5`, marginTop: `1.45rem`}}>
    <div class="container">
      {/* <hr /> */}
      {/* <br /> */}
      <div class="d-flex flex-row justify-content-center">
        { children }
      </div>
      <div class="d-flex flex-row justify-content-center">
        <div class="p-2">
          <a href="https://privacy.arizona.edu/privacy-statement">
            University Privacy Statement
          </a>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center">
        <div class="p-2">
          © {new Date().getFullYear()} The Arizona Board of Regents | The University of Arizona | Tucson, Arizona 85721 | 520-621-2211
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
