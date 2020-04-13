import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../component/layout/layout"
import Head from "../component/head"
import "../styles/about.scss"

const AboutPage = () => {
  const about = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/Michele.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="Who am I">
      <Head title="About" />
      <div className="about-container">
        <div className="aboutImg">
          <Img fluid={about.file.childImageSharp.fluid} className="imgComp" />
        </div>
        <div className="paragraph-content">
          <p>
            <span className="first-word">H</span>i everyone,my name is Michele
            Merola
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
