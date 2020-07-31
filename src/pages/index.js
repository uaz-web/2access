import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AlertBox from "../components/alertbox"
import ServiceBox from "../components/servicebox"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="UAccess" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <Card header="Alerts">
            <AlertBox />
          </Card>
        </div>

        <div class="col">
          <Card header="Services">
            <ServiceBox />
          </Card>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <Card header="Support">
            24/7 IT Support Center
              <br />
            <Link to="https://it.arizona.edu/service/247-it-support">
              Request Assistance or Report a Problem
              </Link>
            <br />
                Requesting Access
              <br />
            <Link to="https://it.arizona.edu/service/access-provisioning-tool">
              UAccess Access Provisioning ToolVPN Required
              </Link>
            <br />
                UAccess Community
              <br />
            <Link to="http://community.uaccess.arizona.edu/">
              System Resources, Forums and Training
              </Link>
          </Card>
        </div>

        <div class="col-sm-6">
          <Card header="Information">
            University Business Event Tracking
              <br />
            <Link to="http://ubet.arizona.edu/">
              University Business Event Tracking (UBET)
              </Link>
            <br />
              Maintenance Window
              <br />
              Every Sunday, 6am to 6pm
              <br />
              Financials Batch Processing
              <br />
              Mon-Fri, 8pm to 7am<br />
              Sat-Sun, midnight to 5:30am<br />
              Wed of Payroll Weeks, 7pm to 7am<br />
          </Card>
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
