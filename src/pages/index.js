import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AlertBox from "../components/alertbox"
import ServiceBox from "../components/servicebox"

const IndexPage = () => (
  <Layout>
    <SEO title="UAccess" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Alerts</h2>
          <AlertBox />
        </div>

        <div class="col">
          <h2>Services</h2>
          <ServiceBox />
        </div>
      </div>
    </div>

    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
