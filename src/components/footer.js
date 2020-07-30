import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

var style = {
  backgroundColor: "#f4ede5",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const Footer = ({ children }) => (
  <>
  <div style={phantom} />
  <footer style={style}>
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
  </footer>
  </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
