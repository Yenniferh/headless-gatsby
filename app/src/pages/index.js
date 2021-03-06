import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Layout, Seo } from "../components"

const IndexPage = () => (
  <Layout>
    <Seo title="Cody Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/">Go to page 2</Link> <br />
      <Link to="/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
