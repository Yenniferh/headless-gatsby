import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Layout, Seo } from "../../components"
import { formatDate } from "../../utils"
import ReactMarkdown from "react-markdown"

const PostLayout = ({ data: { graphCmsPost: post, cover } }) => {
  const shareImg = post.seo.image ? post.seo.image.url : post.cover.url || null

  return (
    <Layout>
      <Seo
        title={post.seo.title}
        description={post.seo.description}
        image={shareImg}
      />
      <div className="container px-5 mx-auto">
        <GatsbyImage
          image={getImage(cover)}
          alt={post.seo.title}
          className="h-64 lg:h-96"
        />

        <section className="mt-10 max-w-[47.5rem] mx-auto">
          <h1 className="text-title-black font-bold text-5xl">{post.title}</h1>
          <div className="mt-5 inline-flex space-x-16">
            <p className="text-title-black font-bold">Written by Cody</p>
            <p className="text-title-gray">
              {formatDate(post.publishedAt, "EEEE, LLLL  dd yyyy")}
            </p>
          </div>

          <hr className="my-8 text-gray-200" />

          <div className="mb-14 prose max-w-full">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!, $slug: String!) {
    graphCmsPost(slug: { eq: $slug }) {
      id
      title
      slug
      cover {
        url
      }
      category
      content
      seo {
        title
        description
        image {
          url
        }
      }
      publishedAt
    }
    cover: graphCmsAsset(coverPost: { elemMatch: { id: { eq: $id } } }) {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`

export default PostLayout
