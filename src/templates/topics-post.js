import * as React from "react"
import { Link,graphql } from "gatsby"

import Seo from "../components/Seo"

import Header from "../components/Header"
import Nav from "../components/Nav"
import Layout from "../components/Layout"

const TopicsPost = ({data}) => {
  return (
    <>
        <Header />
        <Nav />
        
        <Layout>
            <Seo />

            <section id="main">
                <h1 id="display-item2">
                    <span className="date">{data.microcmsTopics.date}</span>
                    {data.microcmsTopics.title}
                </h1>
                
                <div id="book">
                  <div id="book-inside">
                    <div id="book-wrap">
                      <div
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsTopics.body}`,
                      }}
                      />
                    </div>
                  </div>
                </div>
                <p className="center"><Link to={'/topics/' + data.microcmsTopics.category.slug + "/"} className="bt01">一覧へ戻る</Link></p>
            </section>
        
        </Layout>
    </>
  )
}

export default TopicsPost

export const query = graphql`
query ($id: String) {
    microcmsTopics(topicsId: {eq: $id}) {
      topicsId
      title
      date(formatString: "YYYY年MM月DD日")
      slug
      body
      category {
        name
        slug
        id
      }
    }
  }
`