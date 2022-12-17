import React from 'react'
import { Link,graphql } from 'gatsby'
import LayoutTopics from '../../components/LayoutTopics';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import BreadCrumb from '../../components/BreadCrumb';
import PageTitle from '../../components/PageTitle';
import PageTop from '../../components/PageTop';

const pagemeta = {
    subTitle:`トピックス`,
    slug:`topics`
}

const topics = ({ data }) => {
  return (
    <>
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
            <section id="page-info" className="topics">
        <BreadCrumb
        title={pagemeta.subTitle}
        slug="404"
        />
        <PageTitle
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
        </section>
        <LayoutTopics>
            <Seo
            title={pagemeta.subTitle}
            description="トピックスの最近の記事一覧"
            />
            <section id="main">
              <h1 id="display-item">{pagemeta.subTitle}の記事一覧</h1>
            
                {data.allMicrocmsTopics.edges.map(({ node }) => (
                    <article class="list">
                        <p class="date">
                            <span className='cat_list'>{node.category.name}</span>
                            <span class="blobdate">{node.date}</span>
                        </p>
                        <div class="rack">
                            <h1 class="arrange">
                                <a href={'/topics/' + node.topicsId}>{node.title}</a>
                            </h1>
                            <p class="preface">
                                <a href={'/topics/' + node.topicsId}>
                                  {node.excerpt}
                                </a>
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </LayoutTopics>
    </>
  )
}

export default topics

export const query = graphql`
query {
  allMicrocmsTopics(limit: 20) {
    edges {
      node {
        title
        topicsId
        slug
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        excerpt
        body
      }
    }
  }
}
`
