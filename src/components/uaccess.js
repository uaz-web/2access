/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import AlertBox from "../components/alertbox"
import ServiceBox from "../components/servicebox"
import { CardDeck, Card, CardHeader, CardBody, CardText, Container } from 'reactstrap'
import LinkBox from "../components/linkbox"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const UAccess = (props) => {
  const data = useStaticQuery(graphql`
    query UAccessDataQuery {
      site {
        siteMetadata {
          title
        }
      }
      allUaccessYaml {
        nodes {
          title
          url
          train
          tags
          vpn
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <SEO title="UAccess" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>

        <Container>
          <CardDeck>
            <Card>
              <CardHeader>Students</CardHeader>
              <CardBody>
                <LinkBox links={data.allUaccessYaml.nodes.filter(
                  x => x.tags != null && x.tags.includes('student'))
                } train={props.train}/>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>Administrative</CardHeader>
              <CardBody>
                <LinkBox links={data.allUaccessYaml.nodes.filter(
                  x => x.tags != null && x.tags.includes('admin'))
                } train={props.train}/>
              </CardBody>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card>
              <CardHeader>Alerts</CardHeader>
              <CardBody>
                <AlertBox />
              </CardBody>
            </Card>

            <Card>
              <CardHeader>Services</CardHeader>
              <CardBody>
                <ServiceBox />
              </CardBody>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card>
              <CardHeader>Support</CardHeader>
              <CardBody>
                <CardText>
                  24/7 IT Support Center
                  <br />
                  <a href="https://it.arizona.edu/service/247-it-support">
                    Request Assistance or Report a Problem
                  </a>
                  <br />
                Requesting Access
                  <br />
                  <a href="https://it.arizona.edu/service/access-provisioning-tool">
                    UAccess Access Provisioning ToolVPN Required
                  </a>
                  <br />
                UAccess Community
                  <br />
                  <a href="http://community.uaccess.arizona.edu/">
                    System Resources, Forums and Training
              </a>
                </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>Information</CardHeader>
              <CardBody>
                <CardText>
                  University Business Event Tracking
              <br />
                  <a href="http://ubet.arizona.edu/">
                    University Business Event Tracking (UBET)
                  </a>
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
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

UAccess.propTypes = {
  children: PropTypes.node,
  train: PropTypes.bool
}

UAccess.defaultProps = {
  train: false,
}

export default UAccess
